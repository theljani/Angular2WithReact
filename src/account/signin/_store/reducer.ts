import {ISigninState} from './signinState';
import {SIGNIN_SUCCESS, SIGNIN_FAILURE} from './actions';

export function SigninReducer(state: ISigninState, action: any) {
    switch(action.type) {
        case SIGNIN_SUCCESS:
            return Object.assign({}, {
                ok: true,
                signinEntity: action.payload
            });

        case SIGNIN_FAILURE:
            return Object.assign({}, {
                ok: false,
                signinEntity: action.payload
            });

        default:
            return state;
    }
}