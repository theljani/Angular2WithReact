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
//service
var account_register_wizard_state_service_1 = require("../_services/account.register.wizard.state.service");
var store_1 = require("../_store/store");
var actions_1 = require("../_store/actions");
// registerStore
var AccountRegisterWizardCompanyAddressComponent = (function () {
    function AccountRegisterWizardCompanyAddressComponent(_formBuilder, AccountRegisterService, actionDispatcher) {
        this._formBuilder = _formBuilder;
        this.AccountRegisterService = AccountRegisterService;
        this.actionDispatcher = actionDispatcher;
        this.validationMessages = {
            addressLine: {
                required: 'Please enter your address line',
            },
            city: {
                required: 'Please enter your city'
            },
            country: {
                required: 'Please enter your country'
            },
            postalCode: {
                required: 'Please enter your zip code'
            }
        };
    }
    AccountRegisterWizardCompanyAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        var state = store_1.registerStore.getState();
        this.registerEntity = store_1.registerStore.getState().registerEntity;
        this.companyAddress = this.registerEntity.companyAddress;
        this.companyAddressForm = this._formBuilder.group({
            addressLine: [this.companyAddress.addressLine, [forms_1.Validators.required]],
            postalCode: [this.companyAddress.postalCode, [forms_1.Validators.required]],
            city: [this.companyAddress.city, [forms_1.Validators.required]],
            country: [this.companyAddress.country, [forms_1.Validators.required]],
        });
        this.addressLineControl = this.companyAddressForm.get('addressLine');
        this.cityControl = this.companyAddressForm.get('city');
        this.postalCodeControl = this.companyAddressForm.get('postalCode');
        this.countryControl = this.companyAddressForm.get('country');
        this.addressLineControl.valueChanges.subscribe(function (value) {
            _this.setValidationForAddressLine(_this.addressLineControl);
            _this.setCompanyAddressState();
        });
        this.cityControl.valueChanges.subscribe(function (value) {
            _this.setValidationForCity(_this.cityControl);
            _this.setCompanyAddressState();
        });
        this.countryControl.valueChanges.subscribe(function (value) {
            _this.setValidationForCountry(_this.countryControl);
            _this.setCompanyAddressState();
        });
        this.postalCodeControl.valueChanges.subscribe(function (value) {
            _this.setValidationForpostalCode(_this.postalCodeControl);
            _this.setCompanyAddressState();
        });
    };
    AccountRegisterWizardCompanyAddressComponent.prototype.setCompanyAddressState = function () {
        this.AccountRegisterService.setCompanyAddressStepSatate(this.addressLineControl.valid
            && this.cityControl.valid
            && this.countryControl.valid
            && this.postalCodeControl.valid);
    };
    AccountRegisterWizardCompanyAddressComponent.prototype.ngOnChanges = function (changes) {
        this.registerEntity.companyAddress = this.companyAddress;
        this.actionDispatcher.userDetailsStateChanged(this.registerEntity);
    };
    AccountRegisterWizardCompanyAddressComponent.prototype.setValidationForAddressLine = function (control) {
        var _this = this;
        this.addressLineErrorMessage = '';
        if ((control.touched || control.dirty) && control.errors) {
            this.addressLineErrorMessage = Object.keys(control.errors)
                .map(function (key) { return _this.validationMessages.addressLine[key]; }).join(' ');
        }
    };
    AccountRegisterWizardCompanyAddressComponent.prototype.setValidationForCity = function (control) {
        var _this = this;
        this.cityErrorMessage = '';
        if ((control.touched || control.dirty) && control.errors) {
            this.cityErrorMessage = Object.keys(control.errors)
                .map(function (key) { return _this.validationMessages.city[key]; }).join(' ');
        }
    };
    AccountRegisterWizardCompanyAddressComponent.prototype.setValidationForCountry = function (control) {
        var _this = this;
        this.countryErrorMessage = '';
        if ((control.touched || control.dirty) && control.errors) {
            this.countryErrorMessage = Object.keys(control.errors)
                .map(function (key) { return _this.validationMessages.country[key]; }).join(' ');
        }
    };
    AccountRegisterWizardCompanyAddressComponent.prototype.setValidationForpostalCode = function (control) {
        var _this = this;
        this.postalCodeErrorMessage = '';
        if ((control.touched || control.dirty) && control.errors) {
            this.postalCodeErrorMessage = Object.keys(control.errors)
                .map(function (key) { return _this.validationMessages.postalCode[key]; }).join(' ');
        }
    };
    return AccountRegisterWizardCompanyAddressComponent;
}());
AccountRegisterWizardCompanyAddressComponent = __decorate([
    core_1.Component({
        selector: 'pt-register-wizard-user-details',
        moduleId: module.id,
        templateUrl: '../_templates/account.register.wizard.companyAddress.component.html',
        styleUrls: ['../_styles/account.register.wizard.companyAddress.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        account_register_wizard_state_service_1.AccountRegisterService,
        actions_1.registerActions])
], AccountRegisterWizardCompanyAddressComponent);
exports.AccountRegisterWizardCompanyAddressComponent = AccountRegisterWizardCompanyAddressComponent;
//# sourceMappingURL=account.register.wizard.companyAddress.component.js.map