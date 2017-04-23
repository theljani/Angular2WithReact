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
var main_store_1 = require("../../../stores/main.store");
var actions_1 = require("../../../stores/register-store/actions");
// registerStore
var AccountRegisterWizardUserDetailsComponent = (function () {
    function AccountRegisterWizardUserDetailsComponent(_formBuilder, accountRegisterWizardStateService) {
        this._formBuilder = _formBuilder;
        this.accountRegisterWizardStateService = accountRegisterWizardStateService;
        this.registerEntity = {
            userDetails: {
                fullName: null,
                phoneNumber: null,
                address: null
            },
            accountDetails: null,
            companyDetails: null
        };
        this.fullNameErrorMessage = '';
        this.phoneNumberErrorMessage = '';
        this.validationMessages = {
            fullName: {
                required: 'Please enter your full name',
                minlength: 'min length is 4 characters'
            },
            phoneNumber: {
                required: 'Please enter your phone number'
            }
        };
        this.actionDispatcher = new actions_1.registerActions();
    }
    AccountRegisterWizardUserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var state = main_store_1.registerStore.getState();
        this.registerEntity = main_store_1.registerStore.getState().registerEntity;
        this.userDetails = this.registerEntity.userDetails;
        this.userDetailsForm = this._formBuilder.group({
            fullName: [this.userDetails ? this.userDetails.fullName : '', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            phoneNumber: [this.userDetails ? this.userDetails.phoneNumber : '', forms_1.Validators.required],
            addressLine: this.userDetails ? (this.userDetails.address ? this.userDetails.address.addressLine : '') : '',
            zipCode: this.userDetails ? (this.userDetails.address ? this.userDetails.address.zipCode : '') : '',
            city: this.userDetails ? (this.userDetails.address ? this.userDetails.address.city : '') : '',
            country: this.userDetails ? (this.userDetails.address ? this.userDetails.address.country : '') : ''
        });
        this.fullNameControl = this.userDetailsForm.get('fullName');
        this.phoneNumberControl = this.userDetailsForm.get('phoneNumber');
        this.addressLineControl = this.userDetailsForm.get('addressLine');
        this.cityControl = this.userDetailsForm.get('zipCode');
        this.zipCodeControl = this.userDetailsForm.get('city');
        this.countryControl = this.userDetailsForm.get('country');
        this.fullNameControl.valueChanges.subscribe(function (value) {
            _this.setValidationForFullname(_this.fullNameControl);
            _this.accountRegisterWizardStateService.setUserDetailsStepSatate(_this.fullNameControl.valid && _this.phoneNumberControl.valid);
        });
        this.phoneNumberControl.valueChanges.subscribe(function (value) {
            _this.setValidationForphoneNumber(_this.phoneNumberControl);
            _this.accountRegisterWizardStateService.setUserDetailsStepSatate(_this.fullNameControl.valid && _this.phoneNumberControl.valid);
        });
    };
    AccountRegisterWizardUserDetailsComponent.prototype.ngOnChanges = function (changes) {
        this.registerEntity.userDetails = this.userDetails;
        this.actionDispatcher.userDetailsStateChanged(this.registerEntity);
    };
    AccountRegisterWizardUserDetailsComponent.prototype.setValidationForFullname = function (control) {
        var _this = this;
        this.fullNameErrorMessage = '';
        if ((control.touched || control.dirty) && control.errors) {
            this.fullNameErrorMessage = Object.keys(control.errors)
                .map(function (key) { return _this.validationMessages.fullName[key]; }).join(' ');
        }
    };
    AccountRegisterWizardUserDetailsComponent.prototype.setValidationForphoneNumber = function (control) {
        var _this = this;
        this.phoneNumberErrorMessage = '';
        if ((control.touched || control.dirty) && control.errors) {
            this.phoneNumberErrorMessage = Object.keys(control.errors)
                .map(function (key) { return _this.validationMessages.phoneNumber[key]; }).join(' ');
        }
    };
    return AccountRegisterWizardUserDetailsComponent;
}());
AccountRegisterWizardUserDetailsComponent = __decorate([
    core_1.Component({
        selector: 'pt-register-wizard-user-details',
        moduleId: module.id,
        templateUrl: '../_templates/account.register.wizard.userDetails.component.html',
        styleUrls: ['../_styles/account.register.wizard.userDetails.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        account_register_wizard_state_service_1.AccountRegisterWizardStateService])
], AccountRegisterWizardUserDetailsComponent);
exports.AccountRegisterWizardUserDetailsComponent = AccountRegisterWizardUserDetailsComponent;
//# sourceMappingURL=account.register.wizard.userDetails.component.js.map