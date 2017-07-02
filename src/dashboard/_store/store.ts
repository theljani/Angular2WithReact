import {createStore} from 'redux';
import {DashboardReducer} from './reducer';
import {DashboardState} from './state';


declare var window: any;

export const dashboardStore = createStore(DashboardReducer, 
                                                    window.__REDUX_DEVTOOLS_EXTENSION__
                                                    && window.__REDUX_DEVTOOLS_EXTENSION__());