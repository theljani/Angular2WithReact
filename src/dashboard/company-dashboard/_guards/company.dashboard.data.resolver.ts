
import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {signinStore} from '../../../account/signin/_store/store'
import {ActivatedRoute, Params,UrlSegment} from '@angular/router';

@Injectable()
export class CompanyDashboardDataResolver implements Resolve<any> {
    accountDetails: any = null;
    private _companyId: string
    
    constructor(private _route: ActivatedRoute) {}
    
    resolve(route: ActivatedRouteSnapshot): any {
        this.accountDetails =  signinStore.getState();

        if(!this.accountDetails) {
            this._route.queryParams.subscribe((url: UrlSegment) => {

                if(! this._companyId) {
                    var urlSegment1 = document.URL.substring(document.URL.indexOf("company/")+8, document.URL.length);
                    this._companyId = urlSegment1.substring(0, urlSegment1.lastIndexOf("/"));
                }

                // Get Login and Password from the cookie

                // Call a method to get the company details
            });
        }

        alert(this._companyId);

        return this.accountDetails.responseDetails;
    }
}