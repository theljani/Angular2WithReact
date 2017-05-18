import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ISigninEntity} from '../_entities/signinEntity';


@Injectable()
export class AccountSigninService {
    private _signInUrl = 'http://localhost:2734/api/account/signin';

    constructor(private _http: Http) {

    }

    signIn(signinModel: ISigninEntity) :  Observable<any> {
        return this._http.get(this._signInUrl);
        //.catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Error');
    }
}