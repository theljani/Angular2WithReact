
import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {signinStore} from '../../account/signin/_store/store'
import {Router, ActivatedRoute, Params,UrlSegment} from '@angular/router';
import { CookieService } from 'ng2-cookies';

import {DashboardActions} from '../_store/actions';
import {IGetCompanyDetailsModel} from '../_entities/ICompanyModels';

@Injectable()
export class DashboardDataResolver implements Resolve<any> {
    accountDetails: any = null;
    private _companyId: string
    
    constructor(private _route: ActivatedRoute, 
                private _cookieService: CookieService,
                private _router: Router,
                private _dashboardActions: DashboardActions) {}
    
    resolve(route: ActivatedRouteSnapshot): any {
        this.accountDetails =  signinStore.getState();

        // Get Login and Password from the cookie
        var login = this._cookieService.get("Login");
        var password = this._cookieService.get("Password");

        if(!this.accountDetails) {
            this._route.queryParams.subscribe((url: UrlSegment) => {

                if(! this._companyId) {
                    var urlSegment1 = document.URL.substring(document.URL.indexOf("company/")+8, document.URL.length);
                    this._companyId = urlSegment1.substring(0, urlSegment1.lastIndexOf("/"));
                }

                if(!login || ! password) {
                    alert("Something wrong! Please sign in again!");
                    this._cookieService.deleteAll();
                    this._router.navigate(['/account/signin'])
                } else {
                    var model: IGetCompanyDetailsModel = {
                        companyCode: this._companyId,
                        login: login, 
                        password: password
                    };

                    // Call a method to get the company details
                    this._dashboardActions.getCompanyDetails(model);
                }
            });
        } else {
            // re-verify account details object and login/password in the cookies

            if(login != this.accountDetails.responseDetails.accountDetails.login ||
            password != this.accountDetails.responseDetails.accountDetails.password) {
                alert("Something wrong! Please sign in again!");
                this._cookieService.deleteAll();
                this._router.navigate(['/account/signin'])
            } else {
                return this.accountDetails.responseDetails;
            }
        }
    }
}