import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {WizardState} from '../_entities/wizardState';
import {CompanyRegister} from '../_entities/companyRegister';

@Injectable()
export class AccountRegisterService {
    private _registerUrl = 'http://localhost:2734/api/account/company/register';
    wizardState: WizardState = {
        isCompanyInfoStepValid: false,
        isCompanyAddressStepValid: false,
        isAccountDetailsStepValid: false
    };

    constructor(private _http: Http) {}

    setCompanyAddressStepSatate(state: boolean): void {
        this.wizardState.isCompanyAddressStepValid = state;
    }

    setCompanyInfoStepState(state: boolean): void {
        this.wizardState.isCompanyInfoStepValid = state;
    }

    setAccountDetailsStepState(state: boolean): void {
        this.wizardState.isAccountDetailsStepValid = state;
    }

    isWizardValid(): boolean {
        return this.wizardState.isCompanyInfoStepValid 
            && this.wizardState.isCompanyAddressStepValid 
            && this.wizardState.isAccountDetailsStepValid;
    }

    register(registerModel: CompanyRegister) :  Observable<any> {
        return this._http.post(this._registerUrl, registerModel);
    }
}