"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("./store");
exports.USER_DETAILS_FORM_UPDATED = "USER_DETAILS_FORM_UPDATED";
exports.COMPANY_DETAILS_FORM_UPDATED = "COMPANY_DETAILS_FORM_UPDATED";
exports.ACCOUNT_DETAILS_FORM_UPDATED = "ACCOUNT_DETAILS_FORM_UPDATED";
var registerActions = (function () {
    function registerActions() {
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
    registerActions.prototype.createAccount = function (registerEntity) {
        alert(JSON.stringify(registerEntity));
    };
    return registerActions;
}());
exports.registerActions = registerActions;
//# sourceMappingURL=actions.js.map