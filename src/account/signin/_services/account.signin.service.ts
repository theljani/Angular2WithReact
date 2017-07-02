import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ISignin} from '../_entities/ISignin';


@Injectable()
export class AccountSigninService {
    private _signInUrl = 'http://localhost:2734/api/account/company/signin';

    constructor(private _http: Http) {

    }

    signIn(signinModel: ISignin) :  Observable<any> {
        return this._http.post(this._signInUrl, signinModel);
        //.catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Error');
    }
}