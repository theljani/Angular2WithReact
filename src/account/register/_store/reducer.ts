import {CompanyRegister} from '../_entities/companyRegister';
import {USER_DETAILS_FORM_UPDATED, COMPANY_DETAILS_FORM_UPDATED, ACCOUNT_DETAILS_FORM_UPDATED, REGISTER_SUCCEEDED, REGISTER_FAILED} from './actions';
import {IRegisterState} from './IRegisterState';

const initialState: IRegisterState = {
    registerEntity: {
        companyInfo: {
            name: '',
            companyCode: '',
            phoneNumber: '',
            webSite: ''
        },
        companyAddress: {
            addressLine: '',
            city: '',
            postalCode: '',
            country: ''
        },
        accountDetails: {
            login: '',
            password: '',
            confirmPassword: ''
        }
    }
} 

export function registerReducer(state: IRegisterState, action: any) {
    switch(action.type) {
        case USER_DETAILS_FORM_UPDATED:
            return Object.assign({}, state, {
                registerEntity: action.payload
            });
        
        case COMPANY_DETAILS_FORM_UPDATED:
            return Object.assign({}, state, {
                registerEntity: action.payload
            });

        case ACCOUNT_DETAILS_FORM_UPDATED:
            return Object.assign({}, state, {
                registerEntity: action.payload
            });

        case REGISTER_SUCCEEDED:
            return Object.assign({}, {
                from: 'backend',
                ok: true,
                responseDetails: action.paylaod
            });

        case REGISTER_FAILED:
            return Object.assign({}, state, {
                from: 'backend',
                ok: false,
                responseDetails: action.paylaod
            });

        default:
            return state ? state : initialState;
    };
}