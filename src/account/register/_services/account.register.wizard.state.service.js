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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AccountRegisterService = (function () {
    function AccountRegisterService(_http) {
        this._http = _http;
        this._registerUrl = 'http://localhost:2734/api/account/company/register';
        this.wizardState = {
            isCompanyInfoStepValid: false,
            isCompanyAddressStepValid: false,
            isAccountDetailsStepValid: false
        };
    }
    AccountRegisterService.prototype.setCompanyAddressStepSatate = function (state) {
        this.wizardState.isCompanyAddressStepValid = state;
    };
    AccountRegisterService.prototype.setCompanyInfoStepState = function (state) {
        this.wizardState.isCompanyInfoStepValid = state;
    };
    AccountRegisterService.prototype.setAccountDetailsStepState = function (state) {
        this.wizardState.isAccountDetailsStepValid = state;
    };
    AccountRegisterService.prototype.isWizardValid = function () {
        return this.wizardState.isCompanyInfoStepValid
            && this.wizardState.isCompanyAddressStepValid
            && this.wizardState.isAccountDetailsStepValid;
    };
    AccountRegisterService.prototype.register = function (registerModel) {
        return this._http.post(this._registerUrl, registerModel);
    };
    return AccountRegisterService;
}());
AccountRegisterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AccountRegisterService);
exports.AccountRegisterService = AccountRegisterService;
//# sourceMappingURL=account.register.wizard.state.service.js.map