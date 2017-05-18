"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
function SigninReducer(state, action) {
    switch (action.type) {
        case actions_1.SIGNIN_SUCCESS:
            return Object.assign({}, {
                ok: true,
                signinEntity: action.payload
            });
        case actions_1.SIGNIN_FAILURE:
            return Object.assign({}, {
                ok: false,
                signinEntity: action.payload
            });
        default:
            return state;
    }
}
exports.SigninReducer = SigninReducer;
//# sourceMappingURL=reducer.js.map