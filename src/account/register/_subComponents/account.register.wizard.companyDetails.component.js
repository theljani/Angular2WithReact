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
// store
var store_1 = require("../_store/store");
var actions_1 = require("../_store/actions");
var AccountRegisterWizardCompanyDetailsComponent = (function () {
    function AccountRegisterWizardCompanyDetailsComponent(_formBuilder, AccountRegisterService, actionDispatcher) {
        this._formBuilder = _formBuilder;
        this.AccountRegisterService = AccountRegisterService;
        this.actionDispatcher = actionDispatcher;
        this.validationMessages = {
            companyName: {
                required: 'Please enter your company name.',
                minlength: 'min length is 3 characters.'
            },
            companyCode: {
                required: 'Please enter your company code.',
                minlength: 'company code length must be 8.',
                maxlength: 'company code length must be 8.'
            }
        };
    }
    AccountRegisterWizardCompanyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var state = store_1.registerStore.getState();
        this.registerEntity = store_1.registerStore.getState().registerEntity;
        this.companyDetails = this.registerEntity.companyDetails;
        this.companyDetailsForm = this._formBuilder.group({
            name: [this.companyDetails.name, forms_1.Validators.required],
            companyCode: [this.companyDetails.companyCode, [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(8)]],
            position: this.companyDetails.position,
            website: this.companyDetails.website
        });
        this.companyNameFormControl = this.companyDetailsForm.get('name');
        this.companyCodeFormControl = this.companyDetailsForm.get('companyCode');
        this.positionFormControl = this.companyDetailsForm.get('position');
        this.websiteFormControl = this.companyDetailsForm.get('website');
        this.companyNameFormControl.valueChanges.subscribe(function (value) {
            _this.setValidationForCompanyName(_this.companyNameFormControl);
            _this.AccountRegisterService.setCompanyDetailsStepState(_this.companyNameFormControl.valid && _this.companyCodeFormControl.valid);
        });
        this.companyCodeFormControl.valueChanges.subscribe(function (value) {
            _this.setValidationForCompanyCode(_this.companyCodeFormControl);
            _this.AccountRegisterService.setCompanyDetailsStepState(_this.companyNameFormControl.valid && _this.companyCodeFormControl.valid);
        });
    };
    AccountRegisterWizardCompanyDetailsComponent.prototype.ngOnChanges = function (changes) {
        this.registerEntity.companyDetails = this.companyDetails;
        this.actionDispatcher.companyDetailsStateChanged(this.registerEntity);
    };
    AccountRegisterWizardCompanyDetailsComponent.prototype.setValidationForCompanyName = function (control) {
        var _this = this;
        this.companyNameErrorMessage = '';
        if ((control.touched || control.dirty) && control.errors) {
            this.companyNameErrorMessage = Object.keys(control.errors)
                .map(function (key) { return _this.validationMessages.companyName[key]; }).join(' ');
        }
    };
    AccountRegisterWizardCompanyDetailsComponent.prototype.setValidationForCompanyCode = function (control) {
        var _this = this;
        this.companyCodeErrorMessage = '';
        if ((control.touched || control.dirty) && control.errors) {
            this.companyCodeErrorMessage = Object.keys(control.errors)
                .map(function (key) { return _this.validationMessages.companyCode[key]; }).join(' ');
        }
    };
    return AccountRegisterWizardCompanyDetailsComponent;
}());
AccountRegisterWizardCompanyDetailsComponent = __decorate([
    core_1.Component({
        selector: 'pt-register-wizard-company-details',
        moduleId: module.id,
        templateUrl: '../_templates/account.register.wizard.companyDetails.component.html',
        styleUrls: ['../_styles/account.register.wizard.companyDetails.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        account_register_wizard_state_service_1.AccountRegisterService,
        actions_1.registerActions])
], AccountRegisterWizardCompanyDetailsComponent);
exports.AccountRegisterWizardCompanyDetailsComponent = AccountRegisterWizardCompanyDetailsComponent;
//# sourceMappingURL=account.register.wizard.companyDetails.component.js.map