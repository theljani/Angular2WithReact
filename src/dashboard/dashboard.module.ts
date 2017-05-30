// Import Angular modules
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';

//
import {CompnayDashboardRoutes} from './_routes/company.dashboard.routes';
import {CompanyDashboardComponent} from './company-dashboard/company.dashboard.component';

// Guards
import {CompanyDashboardCanActivate} from "./company-dashboard/_guards/company.dashboard.canactivate";
import {CompanyDashboardDataResolver} from './company-dashboard/_guards/company.dashboard.data.resolver';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(CompnayDashboardRoutes)
    ],
    declarations: [CompanyDashboardComponent],
    providers: [CompanyDashboardCanActivate, CompanyDashboardDataResolver]
})
export class DashboardModule {}