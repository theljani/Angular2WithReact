import {createStore, applyMiddleware, compose, GenericStoreEnhancer} from 'redux';
import {registerReducer} from './reducer';
import {IRegisterState} from './IRegisterState';


declare var window: any;

const devToolsExtenxion: GenericStoreEnhancer = (window.devToolsExtenxion) 
    ? window.devToolsExtenxion : (f: any) => f;

export const registerStore = createStore<IRegisterState>(registerReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());