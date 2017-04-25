import {RegisterEntity} from '../_entities/register';
import {registerStore} from './store';

export const USER_DETAILS_FORM_UPDATED = "USER_DETAILS_FORM_UPDATED";
export const COMPANY_DETAILS_FORM_UPDATED = "COMPANY_DETAILS_FORM_UPDATED";
export const ACCOUNT_DETAILS_FORM_UPDATED = "ACCOUNT_DETAILS_FORM_UPDATED";

export class registerActions {

    constructor(){}

    userDetailsStateChanged(entityState: RegisterEntity): void {
        registerStore.dispatch({
            type: USER_DETAILS_FORM_UPDATED,
            payload: Object.assign({}, entityState)
        });
    }

    companyDetailsStateChanged(entityState: RegisterEntity): void {
        registerStore.dispatch({
            type: COMPANY_DETAILS_FORM_UPDATED,
            payload: Object.assign({}, entityState)
        });
    }

    accountDetailsStateChanged(entityState: RegisterEntity): void {
        registerStore.dispatch({
            type: ACCOUNT_DETAILS_FORM_UPDATED,
            payload: Object.assign({}, entityState)
        });
    }

    createAccount(registerEntity: RegisterEntity): void {
        alert(JSON.stringify(registerEntity));
    }
}