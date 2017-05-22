"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("./_store/store");
var actions_1 = require("./_store/actions");
var wizard_stepper_component_1 = require("../../common/wizard-stepper/wizard.stepper.component");
// Services
var account_register_wizard_state_service_1 = require("./_services/account.register.wizard.state.service");
var AccountRegisterComponent = (function () {
    function AccountRegisterComponent(_router, actionsDispatcher, registerWizardState) {
        this._router = _router;
        this.actionsDispatcher = actionsDispatcher;
        this.registerWizardState = registerWizardState;
        this.activeStep = null;
        this.steps = [
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
    }
    AccountRegisterComponent.prototype.Next = function () {
        var nextStepNumber = this.activeStep.nextStep;
        if (nextStepNumber != null) {
            this.activeStep.state = 'done';
            var next = this.steps.filter(function (s) { return s.number == nextStepNumber; });
            if (next.length > 0) {
                this.activeStep = next[0];
                this.activeStep.state = 'active';
                this.wizardStepperChild.setActiveStep(this.activeStep);
                var route = this.activeStep.contentRoute;
                this._router.navigate([route]);
            }
        }
    };
    AccountRegisterComponent.prototype.Previous = function () {
        var previousStepNumer = this.activeStep.previousStep;
        if (previousStepNumer != null) {
            this.activeStep.state = 'inactive';
            var previous = this.steps.filter(function (s) { return s.number == previousStepNumer; });
            if (previous.length > 0) {
                this.activeStep = previous[0];
                this.activeStep.state = 'active';
                this.wizardStepperChild.setActiveStep(this.activeStep);
                var route = this.activeStep.contentRoute;
                this._router.navigate([route]);
            }
        }
    };
    AccountRegisterComponent.prototype.Confirm = function () {
        this.activeStep.state = 'done';
        var state = this.updateFromState();
        this.actionsDispatcher.createAccount(state);
    };
    AccountRegisterComponent.prototype.isFormValid = function () {
        if (this.activeStep.nextStep == null
            && this.registerWizardState.wizardState.isCompanyInfoStepValid
            && this.registerWizardState.wizardState.isCompanyAddressStepValid
            && this.registerWizardState.wizardState.isAccountDetailsStepValid) {
            return true;
        }
        return false;
    };
    AccountRegisterComponent.prototype.isCurrentStepValid = function () {
        var wizardStateService = this.registerWizardState;
        var state = false;
        if (this.activeStep == null) {
            state = wizardStateService.wizardState.isCompanyInfoStepValid;
        }
        else {
            switch (this.activeStep.number.toString()) {
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
    };
    AccountRegisterComponent.prototype.updateFromState = function () {
        var registerFormState = store_1.registerStore.getState();
        this.registerEntity = registerFormState.registerEntity;
        return registerFormState;
    };
    AccountRegisterComponent.prototype.ngOnInit = function () {
        this.activeStep = this.steps[0];
        // this.updateFromState();
        // registerStore.subscribe(() => {
        //     this.updateFromState();
        // });
        this._router.navigate([this.activeStep.contentRoute]);
    };
    return AccountRegisterComponent;
}());
__decorate([
    core_1.ViewChild(wizard_stepper_component_1.WizardStepperComponent),
    __metadata("design:type", wizard_stepper_component_1.WizardStepperComponent)
], AccountRegisterComponent.prototype, "wizardStepperChild", void 0);
AccountRegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: '_templates/account.register.component.html',
        styleUrls: ['_styles/account.register.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        actions_1.registerActions,
        account_register_wizard_state_service_1.AccountRegisterService])
], AccountRegisterComponent);
exports.AccountRegisterComponent = AccountRegisterComponent;
//# sourceMappingURL=account.register.component.js.map