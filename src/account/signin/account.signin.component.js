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
var router_1 = require("@angular/router");
var account_signin_service_1 = require("./_services/account.signin.service");
var actions_1 = require("./_store/actions");
var store_1 = require("./_store/store");
var AccountSigninComponent = (function () {
    function AccountSigninComponent(_accountSigninService, _formBuilder, _signinAction, _router) {
        this._accountSigninService = _accountSigninService;
        this._formBuilder = _formBuilder;
        this._signinAction = _signinAction;
        this._router = _router;
        this.loginErrorMessage = '';
        this.passwordErrorMessage = '';
        this.signInResponse = {};
        this.validationMessages = {
            login: {
                required: 'Please enter you email address.',
                email: 'Please enter a valid email address.'
            },
            password: {
                required: 'Please enter your password.'
            }
        };
    }
    AccountSigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signinFormGroup = this._formBuilder.group({
            login: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required]]
        });
        this.loginFormControl = this.signinFormGroup.get('login');
        this.passwordFormControl = this.signinFormGroup.get('password');
        this.loginFormControl.valueChanges.subscribe(function (value) {
            _this.setValidationForLogin(_this.loginFormControl);
        });
        this.passwordFormControl.valueChanges.subscribe(function (value) {
            _this.setValidationForPassword(_this.passwordFormControl);
        });
        store_1.signinStore.subscribe(function () {
            _this.signInResponse = store_1.signinStore.getState();
            if (_this.signInResponse.ok) {
                _this._router.navigate(['/account/register']);
            }
            else {
                _this.backendError = _this.signInResponse.signinEntity.error;
            }
        });
    };
    AccountSigninComponent.prototype.setValidationForLogin = function (control) {
        var _this = this;
        this.loginErrorMessage = '';
        if ((control.touched || control.dirty) && control.errors) {
            this.loginErrorMessage = Object.keys(control.errors)
                .map(function (key) { return _this.validationMessages.login[key]; }).join(' ');
        }
    };
    AccountSigninComponent.prototype.setValidationForPassword = function (control) {
        var _this = this;
        this.passwordErrorMessage = '';
        if ((control.touched || control.dirty) && control.errors) {
            this.passwordErrorMessage = Object.keys(control.errors)
                .map(function (key) { return _this.validationMessages.password[key]; }).join(' ');
        }
    };
    AccountSigninComponent.prototype.signIn = function () {
        var signinModel = {
            signinEntity: {
                login: this.login,
                password: this.password
            }
        };
        this.backendError = '';
        this._signinAction.signin(signinModel);
    };
    return AccountSigninComponent;
}());
AccountSigninComponent = __decorate([
    core_1.Component({
        selector: '',
        moduleId: module.id,
        templateUrl: '_templates/account.signin.component.html',
        styleUrls: ['_styles/account.signin.component.css']
    }),
    __metadata("design:paramtypes", [account_signin_service_1.AccountSigninService,
        forms_1.FormBuilder,
        actions_1.signinActions,
        router_1.Router])
], AccountSigninComponent);
exports.AccountSigninComponent = AccountSigninComponent;
//# sourceMappingURL=account.signin.component.js.map