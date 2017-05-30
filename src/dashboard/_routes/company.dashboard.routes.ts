import {Routes} from '@angular/router'

import {CompanyDashboardComponent} from '../company-dashboard/company.dashboard.component';
import {CompanyDashboardDataResolver} from '../company-dashboard/_guards/company.dashboard.data.resolver';
import {CompanyDashboardCanActivate} from "../company-dashboard/_guards/company.dashboard.canactivate";

export const CompnayDashboardRoutes: Routes = [
    {
        path: 'company/:companyId/dashboard', 
        component: CompanyDashboardComponent, 
        canActivate: [CompanyDashboardCanActivate],
        resolve: {companyData: CompanyDashboardDataResolver}    
    }
];