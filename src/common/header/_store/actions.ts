import {Injectable} from '@angular/core';
import {headerState} from './headerState';
import {headerStore} from './store';
@Injectable()
export class headerActions {

    headerChanged(state: headerState, type: string): void {
        headerStore.dispatch({
           type: type,
           payload: Object.assign({}, state) 
        });
    }
}