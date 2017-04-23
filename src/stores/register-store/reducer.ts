import {RegisterEntity} from '../../account/register/_entities/register';
import {USER_DETAILS_FORM_UPDATED, COMPANY_DETAILS_FORM_UPDATED, ACCOUNT_DETAILS_FORM_UPDATED} from './actions';
import {IRegisterState} from './IRegisterState';
import {IAction} from '../IAction';

const initialState: IRegisterState = {
    registerEntity: {
        userDetails: {
            fullName: '',
            phoneNumber: '',
            address: {
                addressLine: '',
                city: '',
                country: '',
                zipCode: ''
            }
        },
        companyDetails: {
            name: '',
            companyCode: '',
            position: '',
            website: ''
        },
        accountDetails: {
            login: '',
            companyCode: '',
            password: '',
            confirmPassword: ''
        }
    }
} 

export function registerReducer(state: IRegisterState, action: IAction) {
    switch(action.type) {
        case USER_DETAILS_FORM_UPDATED:
            return {"registerEntity": action.payload};
        
        case COMPANY_DETAILS_FORM_UPDATED:
            return {"registerEntity": action.payload};

        case ACCOUNT_DETAILS_FORM_UPDATED:
            return {"registerEntity": action.payload};

        default:
            return state ? state : initialState;
    };
}