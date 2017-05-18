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
var account_signin_service_1 = require("../_services/account.signin.service");
exports.SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
exports.SIGNIN_FAILURE = 'SIGNIN_FAILURE';
var signinActions = (function () {
    function signinActions(_signinService) {
        this._signinService = _signinService;
    }
    signinActions.prototype.signin = function (state) {
        this._signinService.signIn(state.signinEntity)
            .map(function (result) { return result.json(); })
            .subscribe(function (data) {
            store_1.signinStore.dispatch({
                type: exports.SIGNIN_SUCCESS,
                payload: Object.assign({}, data)
            });
        }, function (error) {
            store_1.signinStore.dispatch({
                type: exports.SIGNIN_FAILURE,
                payload: Object.assign({}, error.json())
            });
        });
    };
    return signinActions;
}());
signinActions = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [account_signin_service_1.AccountSigninService])
], signinActions);
exports.signinActions = signinActions;
//# sourceMappingURL=actions.js.map