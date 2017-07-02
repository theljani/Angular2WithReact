import {Injectable} from '@angular/core';

import {DashboardServices} from '../_services/dashboard.services';
import {IGetCompanyDetailsModel} from '../_entities/ICompanyModels';

import {GET_COMPANY_DETAILS_SUCCESS, GET_COMPANY_DETAILS_FAIL} from './types';
import {dashboardStore} from './store';


@Injectable()
export class DashboardActions {

    constructor(private _dashboardServices: DashboardServices){}

    getCompanyDetails(model: IGetCompanyDetailsModel): void {
      this._dashboardServices.searchCompanyDetails(model)
        .map(result => result.json())
        .subscribe(
            data => dashboardStore.dispatch({
                type: GET_COMPANY_DETAILS_SUCCESS,
                payload: data
            }),
            error => dashboardStore.dispatch({
                type: GET_COMPANY_DETAILS_FAIL,
                payload: error.json() 
            })
        ); 
    } 
}