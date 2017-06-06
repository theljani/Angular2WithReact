import {createStore} from 'redux';
import {headerReducer} from './reducer';
import {headerState} from './headerState';

declare var window: any;

export const headerStore = createStore<headerState>(headerReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());