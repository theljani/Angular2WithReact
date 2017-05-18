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
var store_1 = require("./store");
var account_register_wizard_state_service_1 = require("../_services/account.register.wizard.state.service");
exports.USER_DETAILS_FORM_UPDATED = "USER_DETAILS_FORM_UPDATED";
exports.COMPANY_DETAILS_FORM_UPDATED = "COMPANY_DETAILS_FORM_UPDATED";
exports.ACCOUNT_DETAILS_FORM_UPDATED = "ACCOUNT_DETAILS_FORM_UPDATED";
var registerActions = (function () {
    function registerActions(_registerService) {
        this._registerService = _registerService;
    }
    registerActions.prototype.userDetailsStateChanged = function (entityState) {
        store_1.registerStore.dispatch({
            type: exports.USER_DETAILS_FORM_UPDATED,
            payload: Object.assign({}, entityState)
        });
    };
    registerActions.prototype.companyDetailsStateChanged = function (entityState) {
        store_1.registerStore.dispatch({
            type: exports.COMPANY_DETAILS_FORM_UPDATED,
            payload: Object.assign({}, entityState)
        });
    };
    registerActions.prototype.accountDetailsStateChanged = function (entityState) {
        store_1.registerStore.dispatch({
            type: exports.ACCOUNT_DETAILS_FORM_UPDATED,
            payload: Object.assign({}, entityState)
        });
    };
    registerActions.prototype.createAccount = function (registerState) {
        this._registerService.register(registerState.registerEntity)
            .map(function (result) { return result.json(); })
            .subscribe(function (data) {
            debugger;
            console.log(data);
        }, function (error) {
            debugger;
            console.log(error);
        });
    };
    return registerActions;
}());
registerActions = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [account_register_wizard_state_service_1.AccountRegisterService])
], registerActions);
exports.registerActions = registerActions;
//# sourceMappingURL=actions.js.map