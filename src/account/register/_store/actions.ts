import {Injectable} from '@angular/core';
import {CompanyRegister} from '../_entities/companyRegister';
import {registerStore} from './store';
import {IRegisterState} from './IRegisterState';
import {AccountRegisterService} from '../_services/account.register.wizard.state.service';

export const USER_DETAILS_FORM_UPDATED = "USER_DETAILS_FORM_UPDATED";
export const COMPANY_DETAILS_FORM_UPDATED = "COMPANY_DETAILS_FORM_UPDATED";
export const ACCOUNT_DETAILS_FORM_UPDATED = "ACCOUNT_DETAILS_FORM_UPDATED";

@Injectable()
export class registerActions {

    constructor(private _registerService: AccountRegisterService){}

    userDetailsStateChanged(entityState: CompanyRegister): void {
        registerStore.dispatch({
            type: USER_DETAILS_FORM_UPDATED,
            payload: Object.assign({}, entityState)
        });
    }

    companyDetailsStateChanged(entityState: CompanyRegister): void {
        registerStore.dispatch({
            type: COMPANY_DETAILS_FORM_UPDATED,
            payload: Object.assign({}, entityState)
        });
    }

    accountDetailsStateChanged(entityState: CompanyRegister): void {
        registerStore.dispatch({
            type: ACCOUNT_DETAILS_FORM_UPDATED,
            payload: Object.assign({}, entityState)
        });
    }

    createAccount(registerState: IRegisterState): void {
        this._registerService.register(registerState.registerEntity)
            .map(result => result.json())
            .subscribe(data => {
                            debugger
                            console.log(data);
                        },
                        error => {
                            debugger
                            console.log(error);
                        }
            );
    }
}