import {Component} from '@angular/core';

import {AccountSigninService} from './_services/account.signin.service'
import {ISigninEntity} from './_iEntities/signinEntity';

@Component({
    selector: '',
    moduleId:module.id,
    templateUrl: '_templates/account.signin.component.html',
    styleUrls: ['_styles/account.signin.component.css']
})
export class AccountSigninComponent {
    login: string;
    password: string;

    constructor(private _accountSigninService: AccountSigninService){}


    signIn(): void {
        let signinModel: ISigninEntity = {
            login: this.login,
            password: this.password
        };

        let result = this._accountSigninService.signIn(signinModel);
        
        alert(result);
    }
}