import {Routes} from '@angular/router'

import {DashboardComponent} from '../dashboard.component';
import {DashboardDataResolver} from '../_guards/dashboard.data.resolver';
import {DashboardCanActivate} from "../_guards/dashboard.canactivate";

export const CompnayDashboardRoutes: Routes = [
    {
        path: 'company/:companyId/dashboard', 
        component: DashboardComponent, 
        canActivate: [DashboardCanActivate],
        resolve: {companyData: DashboardDataResolver}    
    }
];