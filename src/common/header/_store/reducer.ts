import {headerState} from './headerState';

const defaultHeaderItems: any[] = [
        {
            "label": "Sign In",
            "route": "/account/signin"
        },
        {
            "label": "Register",
            "route": "/account/register"
        }
];

export function headerReducer(state: headerState, action: any) {
    switch(action.type) {
        case 'SIGNIN_SUCCESS':
            return Object.assign({}, state, {
                headerItems: action.payload
            });

        default: 
            return Object.assign({}, state, {
                headerItems: defaultHeaderItems
            });
    }
}