"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
//registerStore
var store_1 = require("../../../stores/register-store/store");
var actions_1 = require("../../../stores/register-store/actions");
//service
var account_register_wizard_state_service_1 = require("../_services/account.register.wizard.state.service");
function PasswordsMatcher(control) {
    var password = control.get('password');
    var confirmPassword = control.get('confirmPassword');
    if (password.pristine || confirmPassword.pristine) {
        return null;
    }
    if (password.value === confirmPassword.value) {
        return null;
    }
    return { 'mismatch': true };
}
;
var AccountRegisterWizardAccountDetailsComponent = (function () {
    function AccountRegisterWizardAccountDetailsComponent(_formBuilder, accountRegisterWizardStateService) {
        this._formBuilder = _formBuilder;
        this.accountRegisterWizardStateService = accountRegisterWizardStateService;
        this.registerEntity = {
            userDetails: null,
            accountDetails: null,
            companyDetails: null
        };
        this.validationMessages = {
            login: {
                required: 'Please enter your login.',
                pattern: 'Please enter a valid email address.'
            },
            password: {
                required: 'Please enter your password.'
            },
            confirmPassword: {
                required: 'Please confirm your password.',
                mismatch: 'Passwords do not match.'
            },
            companyCode: {
                required: 'Please enter your company code.',
                minlength: 'company code length must be 8.',
                maxlength: 'company code length must be 8.'
            }
        };
        this.actionDispatcher = new actions_1.registerActions();
    }
    AccountRegisterWizardAccountDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var state = store_1.registerStore.getState();
        this.registerEntity = state.registerEntity;
        this.accountDetails = this.registerEntity.accountDetails;
        this.accountDetails.companyCode = this.registerEntity.companyDetails.companyCode;
        this.accountDetailsForm = this._formBuilder.group({
            login: [this.accountDetails.login, [forms_1.Validators.required, forms_1.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            passwordGroup: this._formBuilder.group({
                password: [this.accountDetails.password, forms_1.Validators.required],
                confirmPassword: [this.accountDetails.confirmPassword, [forms_1.Validators.required]]
            }, { validator: PasswordsMatcher })
        });
        // get form controls
        this.loginFormControl = this.accountDetailsForm.get('login');
        this.passwordFormControl = this.accountDetailsForm.get('passwordGroup').get('password');
        this.confirmPasswordFormControl = this.accountDetailsForm.get('passwordGroup').get('confirmPassword');
        // validation error messages
        this.accountDetailsForm.get('passwordGroup').valueChanges.subscribe(function (value) {
            _this.setValidationMessages(false, _this.accountDetailsForm.get('passwordGroup'), 'confirmPassword');
            _this.setAccountFormState();
        });
        this.loginFormControl.valueChanges.subscribe(function (value) {
            _this.setValidationMessages(false, _this.loginFormControl, 'login');
            _this.setAccountFormState();
        });
        this.passwordFormControl.valueChanges.subscribe(function (value) {
            _this.setValidationMessages(false, _this.passwordFormControl, 'password');
            _this.setAccountFormState();
        });
        this.confirmPasswordFormControl.valueChanges.subscribe(function (value) {
            _this.setValidationMessages(false, _this.confirmPasswordFormControl, 'confirmPassword');
            _this.setAccountFormState();
        });
    };
    AccountRegisterWizardAccountDetailsComponent.prototype.ngOnChanges = function (changes) {
        // var state = registerStore.getState();
        // this.registerEntity = state.registerEntity;
        this.registerEntity.accountDetails = this.accountDetails;
        this.actionDispatcher.accountDetailsStateChanged(this.registerEntity);
    };
    AccountRegisterWizardAccountDetailsComponent.prototype.initializeFormValidation = function () {
        if (this.accountDetails && this.accountDetails.login) {
            this.setValidationMessages(true, this.loginFormControl, 'login');
        }
        if (this.accountDetails && this.accountDetails.password) {
            this.setValidationMessages(true, this.passwordFormControl, 'password');
        }
        if (this.accountDetails && this.accountDetails.confirmPassword) {
            this.setValidationMessages(true, this.confirmPasswordFormControl, 'confirmPassword');
        }
        this.setValidationMessages(true, this.accountDetailsForm.get('passwordGroup'), 'confirmPassword');
    };
    AccountRegisterWizardAccountDetailsComponent.prototype.setValidationMessages = function (forceValidation, control, formControlName) {
        switch (formControlName) {
            case 'login':
                this.loginErrorMessage = this.getErrorMessage(forceValidation, control, this.validationMessages.login);
                break;
            case 'password':
                this.passwordErrorMessage = this.getErrorMessage(forceValidation, control, this.validationMessages.password);
                break;
            case 'confirmPassword':
                this.confirmPasswordErrorMessage = this.getErrorMessage(forceValidation, control, this.validationMessages.confirmPassword);
                break;
        }
    };
    AccountRegisterWizardAccountDetailsComponent.prototype.getErrorMessage = function (forceValidation, control, model) {
        var errorMessage = '';
        if ((control.touched || control.dirty || forceValidation) && control.errors) {
            errorMessage = Object.keys(control.errors)
                .map(function (key) { return model[key]; }).join(' ');
        }
        return errorMessage;
    };
    AccountRegisterWizardAccountDetailsComponent.prototype.setAccountFormState = function () {
        this.accountRegisterWizardStateService.setAccountDetailsStepState(this.loginFormControl.valid &&
            this.passwordFormControl.valid &&
            this.confirmPasswordFormControl.valid &&
            this.accountDetailsForm.get('passwordGroup').valid);
    };
    return AccountRegisterWizardAccountDetailsComponent;
}());
AccountRegisterWizardAccountDetailsComponent = __decorate([
    core_1.Component({
        selector: 'pt-register-wizard-account-details',
        moduleId: module.id,
        templateUrl: '../_templates/account.register.wizard.accountDetails.component.html',
        styleUrls: ['../_styles/account.register.wizard.accountDetails.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, account_register_wizard_state_service_1.AccountRegisterWizardStateService])
], AccountRegisterWizardAccountDetailsComponent);
exports.AccountRegisterWizardAccountDetailsComponent = AccountRegisterWizardAccountDetailsComponent;
//# sourceMappingURL=account.register.wizard.accountDetails.component.js.map