"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Angular modules
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
// Import Components
var account_signin_component_1 = require("./signin/account.signin.component");
var account_register_component_1 = require("./register/account.register.component");
var account_register_wizard_component_1 = require("./register/_subComponents/account.register.wizard.component");
var wizard_stepper_component_1 = require("../common/wizard-stepper/wizard.stepper.component");
// Import Services
var account_signin_service_1 = require("./signin/_services/account.signin.service");
var AccountModule = (function () {
    function AccountModule() {
    }
    return AccountModule;
}());
AccountModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'account/signin', component: account_signin_component_1.AccountSigninComponent
                },
                {
                    path: 'account/register', component: account_register_component_1.AccountRegisterComponent,
                    children: [
                        { path: 'userInformation', component: account_register_wizard_component_1.AccountRegisterWizardComponent },
                        { path: 'account', component: account_signin_component_1.AccountSigninComponent }
                    ]
                },
                {
                    path: '**', redirectTo: '', pathMatch: 'full'
                }
            ])
        ],
        declarations: [
            account_signin_component_1.AccountSigninComponent,
            account_register_component_1.AccountRegisterComponent,
            account_register_wizard_component_1.AccountRegisterWizardComponent,
            wizard_stepper_component_1.WizardStepperComponent
        ],
        providers: [account_signin_service_1.AccountSigninService]
    })
], AccountModule);
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map