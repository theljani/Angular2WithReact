
import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class CompanyDashboardDataResolver implements Resolve<any> {
    
    resolve(route: ActivatedRouteSnapshot): any {
        return {
            "companyName": "TCY"
        };
    }
}