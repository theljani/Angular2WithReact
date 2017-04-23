"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var initialState = {
    registerEntity: {
        userDetails: {
            fullName: '',
            phoneNumber: '',
            address: {
                addressLine: '',
                city: '',
                country: '',
                zipCode: ''
            }
        },
        companyDetails: {
            name: '',
            companyCode: '',
            position: '',
            website: ''
        },
        accountDetails: {
            login: '',
            companyCode: '',
            password: '',
            confirmPassword: ''
        }
    }
};
function registerReducer(state, action) {
    switch (action.type) {
        case actions_1.USER_DETAILS_FORM_UPDATED:
            return { "registerEntity": action.payload };
        case actions_1.COMPANY_DETAILS_FORM_UPDATED:
            return { "registerEntity": action.payload };
        case actions_1.ACCOUNT_DETAILS_FORM_UPDATED:
            return { "registerEntity": action.payload };
        default:
            return state ? state : initialState;
    }
    ;
}
exports.registerReducer = registerReducer;
//# sourceMappingURL=reducer.js.map