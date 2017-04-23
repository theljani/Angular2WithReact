"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AccountRegisterWizardStateService = (function () {
    function AccountRegisterWizardStateService() {
        this.wizardState = {
            isUserDetailsSetpValid: false,
            isCompanyDetailsStepValid: false,
            isAccountDetailsStepValid: false
        };
    }
    AccountRegisterWizardStateService.prototype.setUserDetailsStepSatate = function (state) {
        this.wizardState.isUserDetailsSetpValid = state;
    };
    AccountRegisterWizardStateService.prototype.setCompanyDetailsStepState = function (state) {
        this.wizardState.isCompanyDetailsStepValid = state;
    };
    AccountRegisterWizardStateService.prototype.setAccountDetailsStepState = function (state) {
        this.wizardState.isAccountDetailsStepValid = state;
    };
    AccountRegisterWizardStateService.prototype.isWizardValid = function () {
        return this.wizardState.isUserDetailsSetpValid
            && this.wizardState.isCompanyDetailsStepValid
            && this.wizardState.isAccountDetailsStepValid;
    };
    return AccountRegisterWizardStateService;
}());
AccountRegisterWizardStateService = __decorate([
    core_1.Injectable()
], AccountRegisterWizardStateService);
exports.AccountRegisterWizardStateService = AccountRegisterWizardStateService;
//# sourceMappingURL=account.register.wizard.state.service.js.map