import {Routes} from '@angular/router';

import {AccountSigninComponent} from '../signin/account.signin.component';
import {AccountRegisterComponent} from '../register/account.register.component';
import {WizardStepperComponent} from '../../common/wizard-stepper/wizard.stepper.component';

import {AccountRegisterWizardCompanyAddressComponent} from '../register/_subComponents/account.register.wizard.companyAddress.component';
import {AccountRegisterWizardCompanyInfoComponent} from '../register/_subComponents/account.register.wizard.companyInfo.component';
import {AccountRegisterWizardAccountDetailsComponent} from '../register/_subComponents/account.register.wizard.accountDetails.component';

import {CanActivateSigninGuard} from '../signin/_guards/canActivateGuard';
import {CanActivateRegisterGuard} from '../register/_guards/canActivateGuard';

export const AccountModuleRoutes: Routes = [
    {
        path:'account/signin', component: AccountSigninComponent, canActivate: [CanActivateSigninGuard]
    },
    {
        path:'account/register', component: AccountRegisterComponent, canActivate: [CanActivateRegisterGuard],
        children: [
            { path: '',  component: AccountRegisterWizardCompanyInfoComponent},
            { path: 'companyInfo',  component: AccountRegisterWizardCompanyInfoComponent},
            { path: 'companyAddress',  component: AccountRegisterWizardCompanyAddressComponent},
            { path: 'accountDetails',  component: AccountRegisterWizardAccountDetailsComponent}
        ]
    }
];