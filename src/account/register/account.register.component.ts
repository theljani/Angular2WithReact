import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {registerStore} from './_store/store';
import {registerActions} from './_store/actions';
import {Step} from '../../common/wizard-stepper/_entities/step';

import {WizardStepperComponent} from '../../common/wizard-stepper/wizard.stepper.component';

import {CompanyRegister} from './_entities/companyRegister';
import {IRegisterState} from './_store/IRegisterState';
// Services
import {AccountRegisterService} from './_services/account.register.wizard.state.service';

@Component({
    moduleId:module.id,
    templateUrl: '_templates/account.register.component.html',
    styleUrls: ['_styles/account.register.component.css'] 
})
export class AccountRegisterComponent implements OnInit {

    @ViewChild(WizardStepperComponent) wizardStepperChild: WizardStepperComponent;
    activeStep: Step = null;
    registerEntity: CompanyRegister;
    backendError: string;

    steps: Step[] = [
        {
            "number": 1,
            "title": "Company details",
            "state": 'active',
            "nextStep": 2,
            "previousStep": null,
            "contentRoute": "/account/register/companyInfo"
        },
        {
            "number": 2,
            "title": "Company address",
            "state": null,
            "nextStep": 3,
            "previousStep": 1,
            "contentRoute": "/account/register/companyAddress"
        },
        {
            "number": 3,
            "title": "Account details",
            "state": null,
            "nextStep": null,
            "previousStep": 2,
            "contentRoute": "/account/register/accountDetails"
        }       
    ];

    constructor(private _router: Router,
        private actionsDispatcher: registerActions,
        private registerWizardState: AccountRegisterService) {
    }
    
    ngOnInit(): void {
        this.activeStep = this.steps[0];
        // this.updateFromState();

        // registerStore.subscribe(() => {
        //     this.updateFromState();
        // });

        this._router.navigate([this.activeStep.contentRoute]);

        registerStore.subscribe(() => {
            var registerResponse = registerStore.getState();

            if(registerResponse.from) {
                registerResponse.from = undefined;
                if(registerResponse.ok) {
                    this._router.navigate(['/account/signin']);
                }  else {
                    this.backendError = registerResponse.responseDetails.error;
                }
            }
        });
    }

    Next():void {
        var nextStepNumber = this.activeStep.nextStep;

        if(nextStepNumber != null) {
            this.activeStep.state = 'done';
            var next = this.steps.filter((s: Step)=> s.number == nextStepNumber);

            if(next.length > 0) {
                this.activeStep = next[0];
                this.activeStep.state= 'active';
                this.wizardStepperChild.setActiveStep(this.activeStep);

                var route = this.activeStep.contentRoute;
                this._router.navigate([route]);
            }
        }
    }

    Previous(): void {
        var previousStepNumer = this.activeStep.previousStep;
        if(previousStepNumer != null) {
            this.activeStep.state='inactive';
            var previous = this.steps.filter((s: Step)=> s.number == previousStepNumer);

            if(previous.length > 0) {
                this.activeStep = previous[0];
                this.activeStep.state= 'active';

                this.wizardStepperChild.setActiveStep(this.activeStep);

                var route = this.activeStep.contentRoute;
                this._router.navigate([route]);
            }
        }
    }

    Confirm(): void {
        this.activeStep.state = 'done';
        let state = this.updateFromState();
        this.backendError= undefined;
        this.actionsDispatcher.createAccount(state);
    }

    isFormValid(): boolean {
        if(this.activeStep.nextStep == null 
        && this.registerWizardState.wizardState.isCompanyInfoStepValid
        && this.registerWizardState.wizardState.isCompanyAddressStepValid
        && this.registerWizardState.wizardState.isAccountDetailsStepValid) {
            return true;
        }

        return false;
    }

    isCurrentStepValid(): boolean {
            var wizardStateService= this.registerWizardState;
            let state = false;
            if(this.activeStep == null) {
                state = wizardStateService.wizardState.isCompanyInfoStepValid;
            } else {
                switch(this.activeStep.number.toString()) {
                    case "1":
                        state = wizardStateService.wizardState.isCompanyInfoStepValid;
                    break;

                    case "2":
                        state = wizardStateService.wizardState.isCompanyAddressStepValid;
                    break;

                    case "3":
                        state = wizardStateService.wizardState.isAccountDetailsStepValid;
                    break;
                }
            }

            return state;
    }

    updateFromState(): IRegisterState {
        const registerFormState = registerStore.getState();
        this.registerEntity = registerFormState.registerEntity;
        return registerFormState;
    }
}