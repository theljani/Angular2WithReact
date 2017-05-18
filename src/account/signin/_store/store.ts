import {createStore} from 'redux';
import {ISigninState} from './signinState';
import {SigninReducer} from './reducer';

declare var window: any;

export const signinStore = createStore<ISigninState>(SigninReducer, 
                                                    window.__REDUX_DEVTOOLS_EXTENSION__
                                                    && window.__REDUX_DEVTOOLS_EXTENSION__());
