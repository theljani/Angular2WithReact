// Import Angular modules
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

// Import Components
import {AccountSigninComponent} from './signin/account.signin.component';
import {AccountRegisterComponent} from './register/account.register.component';
import {WizardStepperComponent} from '../common/wizard-stepper/wizard.stepper.component';

import {AccountRegisterWizardUserDetailsComponent} from './register/_subComponents/account.register.wizard.userDetails.component';
import {AccountRegisterWizardCompanyDetailsComponent} from './register/_subComponents/account.register.wizard.companyDetails.component';
import {AccountRegisterWizardAccountDetailsComponent} from './register/_subComponents/account.register.wizard.accountDetails.component';

// Import Services
import {AccountSigninService} from './signin/_services/account.signin.service';
import {AccountRegisterWizardStateService} from './register/_services/account.register.wizard.state.service';
@NgModule({
    imports: [
        CommonModule,  
        ReactiveFormsModule,     
        FormsModule,
        RouterModule.forRoot([
            {
                path:'account/signin', component: AccountSigninComponent
            },
            {
                path:'account/register', component: AccountRegisterComponent,
                children: [
                    { path: '',  component: AccountRegisterWizardUserDetailsComponent},
                    { path: 'userDetails',  component: AccountRegisterWizardUserDetailsComponent},
                    { path: 'companyDetails',  component: AccountRegisterWizardCompanyDetailsComponent},
                    { path: 'accountDetails',  component: AccountRegisterWizardAccountDetailsComponent}
                ]
            },
            {
                path: '**', redirectTo:'', pathMatch: 'full'
            }
        ])
    ],
    declarations: [
        AccountSigninComponent,
        AccountRegisterComponent,
        AccountRegisterWizardUserDetailsComponent,
        AccountRegisterWizardCompanyDetailsComponent,
        AccountRegisterWizardAccountDetailsComponent,
        WizardStepperComponent
    ],
    providers: [AccountSigninService, AccountRegisterWizardStateService]
})
export class AccountModule {}