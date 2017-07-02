// Import Angular modules
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';

// Components
import {CompnayDashboardRoutes} from './_routes/dashboard.routes';
import {DashboardComponent} from './dashboard.component';
import {SpinnerComponent} from '../common/spinner/spinner.component';
import {HeaderComponent} from '../common/header/header.component';

import {headerActions} from '../common/header/_store/actions';

// Guards
import {DashboardCanActivate} from "./_guards/dashboard.canactivate";
import {DashboardDataResolver} from './_guards/dashboard.data.resolver';

import {DashboardActions} from '../dashboard/_store/actions';
import {DashboardServices} from '../dashboard/_services/dashboard.services';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(CompnayDashboardRoutes)
    ],
    declarations: [HeaderComponent, DashboardComponent, SpinnerComponent],
    providers: [headerActions, DashboardCanActivate, DashboardDataResolver, DashboardActions, DashboardServices]
})
export class DashboardModule {}