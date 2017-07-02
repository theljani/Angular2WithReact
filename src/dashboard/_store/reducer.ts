import {DashboardState} from './state';
import {ICompanyDetails} from '../_entities/ICompanyModels';

import {GET_COMPANY_DETAILS_SUCCESS, GET_COMPANY_DETAILS_FAIL} from './types';

const initialState:DashboardState = {
    companyDetails:  {
        companyInfo: {
            name: '',
            companyCode: '',
            phoneNumber: '',
            website: '',
        },
        accountDetails: {
            login: '',
            password: '',
        },

        companyAddress: {
            addressLine: '',
            postalCode: '',
            city: '',
            country: '',
        }
    }
}

export function DashboardReducer(state: DashboardState, action: any) {
    switch(action.type) {
        case GET_COMPANY_DETAILS_SUCCESS:
        return {
            ok: true,
            companyDetails: action.payload
        };

        case GET_COMPANY_DETAILS_FAIL:
        return {
            ok: false,
            companyDetails: action.payload
        };


        default:
        return initialState;
    }
}