// Import Angular modules
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';

// Import Components
import {AccountSigninComponent} from './signin/account.signin.component';
import {AccountRegisterComponent} from './register/account.register.component';
import {WizardStepperComponent} from '../common/wizard-stepper/wizard.stepper.component';

import {AccountRegisterWizardCompanyAddressComponent} from './register/_subComponents/account.register.wizard.companyAddress.component';
import {AccountRegisterWizardCompanyInfoComponent} from './register/_subComponents/account.register.wizard.companyInfo.component';
import {AccountRegisterWizardAccountDetailsComponent} from './register/_subComponents/account.register.wizard.accountDetails.component';

// Import Services
import {AccountSigninService} from './signin/_services/account.signin.service';
import {AccountRegisterService} from './register/_services/account.register.wizard.state.service';
import {registerActions} from './register/_store/actions';
import {signinActions} from './signin/_store/actions';

@NgModule({
    imports: [
        CommonModule,  
        ReactiveFormsModule,     
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path:'account/signin', component: AccountSigninComponent
            },
            {
                path:'account/register', component: AccountRegisterComponent,
                children: [
                    { path: '',  component: AccountRegisterWizardCompanyInfoComponent},
                    { path: 'companyInfo',  component: AccountRegisterWizardCompanyInfoComponent},
                    { path: 'companyAddress',  component: AccountRegisterWizardCompanyAddressComponent},
                    { path: 'accountDetails',  component: AccountRegisterWizardAccountDetailsComponent}
                ]
            },
            {
                path:'', component: AccountSigninComponent
            }
        ])
    ],
    declarations: [
        AccountSigninComponent,
        AccountRegisterComponent,
        AccountRegisterWizardCompanyAddressComponent,
        AccountRegisterWizardCompanyInfoComponent,
        AccountRegisterWizardAccountDetailsComponent,
        WizardStepperComponent
    ],
    providers: [AccountSigninService, 
                AccountRegisterService, 
                registerActions,
                signinActions]
})
export class AccountModule {}