import {Injectable} from '@angular/core';

import {WizardState} from '../_entities/wizardState';

@Injectable()
export class AccountRegisterWizardStateService {

    wizardState: WizardState = {
        isUserDetailsSetpValid: false,
        isCompanyDetailsStepValid: false,
        isAccountDetailsStepValid: false
    };

    setUserDetailsStepSatate(state: boolean): void {
        this.wizardState.isUserDetailsSetpValid = state;
    }

    setCompanyDetailsStepState(state: boolean): void {
        this.wizardState.isCompanyDetailsStepValid = state;
    }

    setAccountDetailsStepState(state: boolean): void {
        this.wizardState.isAccountDetailsStepValid = state;
    }

    isWizardValid(): boolean {
        return this.wizardState.isUserDetailsSetpValid 
            && this.wizardState.isCompanyDetailsStepValid 
            && this.wizardState.isAccountDetailsStepValid;
    }
}