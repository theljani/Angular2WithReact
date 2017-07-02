import {ISigninState} from './signinState';
import {SIGNIN_SUCCESS, SIGNIN_FAILURE} from './actions';

export function SigninReducer(state: ISigninState, action: any) {
    switch(action.type) {
        case SIGNIN_SUCCESS:
            return {
                    ok: true,
                    responseDetails: action.payload
                };

        case SIGNIN_FAILURE:
            return {
                ok: false,
                responseDetails: action.payload
            };

        default:
            return state;
    }
}