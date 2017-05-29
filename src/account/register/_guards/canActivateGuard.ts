import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {CookieService} from 'ng2-cookies';

@Injectable()
export class CanActivateRegisterGuard implements CanActivate {

    constructor(private _cookiesService: CookieService) {

    }

    canActivate(): boolean {
        let login = '';
        let password= '';

        login = this._cookiesService.get("Login");
        password = this._cookiesService.get("Password");

        if(login != '' && password != '') {
            return  false;
        } 
        
        return true;
    }
}