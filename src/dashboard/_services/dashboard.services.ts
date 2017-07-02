import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {IGetCompanyDetailsModel, ICompanyDetails} from '../_entities/ICompanyModels';
import {ISignin} from '../../account/signin/_entities/ISignin';

@Injectable()
export class DashboardServices {

    private _getCompanyDetailsUrl = 'http://localhost:2734/api/company/search/companyDetails';

    constructor(private _http: Http) {}

    searchCompanyDetails(model: IGetCompanyDetailsModel): Observable<Response> {
        return this._http.post(this._getCompanyDetailsUrl, model);
    }
}

