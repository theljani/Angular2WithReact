"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var initialState = {
    registerEntity: {
        companyInfo: {
            name: '',
            companyCode: '',
            phoneNumber: '',
            webSite: ''
        },
        companyAddress: {
            addressLine: '',
            city: '',
            postalCode: '',
            country: ''
        },
        accountDetails: {
            login: '',
            password: '',
            confirmPassword: ''
        }
    }
};
function registerReducer(state, action) {
    switch (action.type) {
        case actions_1.USER_DETAILS_FORM_UPDATED:
            return Object.assign({}, state, {
                registerEntity: action.payload
            });
        case actions_1.COMPANY_DETAILS_FORM_UPDATED:
            return Object.assign({}, state, {
                registerEntity: action.payload
            });
        case actions_1.ACCOUNT_DETAILS_FORM_UPDATED:
            return Object.assign({}, state, {
                registerEntity: action.payload
            });
        default:
            return state ? state : initialState;
    }
    ;
}
exports.registerReducer = registerReducer;
//# sourceMappingURL=reducer.js.map