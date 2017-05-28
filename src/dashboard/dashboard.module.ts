// Import Angular modules
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';

//
import {CompanyDashboardComponent} from './company-dashboard/company.dashboard.component';


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {
                path: 'company/:companyId/dashboard', component: CompanyDashboardComponent
            }
        ])
    ],
    declarations: [CompanyDashboardComponent],
    providers: []
})
export class DashboardModule {}