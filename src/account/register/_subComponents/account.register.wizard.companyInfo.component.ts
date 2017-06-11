import {Component, OnInit, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators,AbstractControl} from '@angular/forms';

//service
import {AccountRegisterService} from '../_services/account.register.wizard.state.service';

// store
import {registerStore} from '../_store/store';
import {registerActions} from '../_store/actions';
import {CompanyRegister} from '../_entities/companyRegister';
import {CompanyInfo} from '../_entities/companyInfo';

@Component({
    selector: 'pt-register-wizard-company-details',
    moduleId: module.id,
    templateUrl: '../_templates/account.register.wizard.companyInfo.component.html',
    styleUrls: ['../_styles/account.register.wizard.companyInfo.component.css']
})
export class AccountRegisterWizardCompanyInfoComponent implements OnInit, OnChanges {
    companyInfoForm: FormGroup;
    registerEntity: CompanyRegister;
    companyInfo: CompanyInfo;

    companyNameFormControl: AbstractControl;
    websiteFormControl: AbstractControl;
    phoneNumberControl: AbstractControl;

    companyNameErrorMessage: string;
    companyPhoneNumberError: string;

    private validationMessages = {
        companyName: {
            required: 'Please enter your company name.',
            minlength: 'min length is 3 characters.'
        },
        phoneNumber: {
            required: 'Please enter your phone number.',           
        }
    };
    constructor(private _formBuilder: FormBuilder, 
        private AccountRegisterService: AccountRegisterService,
        private actionDispatcher: registerActions) {
        }

    ngOnInit(): void {
        var state = registerStore.getState();
        this.registerEntity = registerStore.getState().registerEntity;

        this.companyInfo = this.registerEntity.companyInfo;

        this.companyInfoForm = this._formBuilder.group({
            name: [this.companyInfo.name, Validators.required],
            phoneNumber: [this.companyInfo.phoneNumber, [Validators.required]],
            website: this.companyInfo.webSite
        });

        this.companyNameFormControl = this.companyInfoForm.get('name');
        this.websiteFormControl =  this.companyInfoForm.get('website');
        this.phoneNumberControl = this.companyInfoForm.get('phoneNumber');

        this.companyNameFormControl.valueChanges.subscribe((value: any) => {
            this.setValidationForCompanyName(this.companyNameFormControl);

            this.AccountRegisterService.setCompanyInfoStepState(this.phoneNumberControl.valid  && this.companyNameFormControl.valid);
        });
        
        this.phoneNumberControl.valueChanges.subscribe((value: any) => {
            this.setValidationForPhoneNumber(this.phoneNumberControl);

            this.AccountRegisterService.setCompanyInfoStepState(this.phoneNumberControl.valid && this.companyNameFormControl.valid);
        });
    }

    ngOnChanges(changes: any) {
        this.registerEntity.companyInfo = this.companyInfo;
        this.actionDispatcher.companyDetailsStateChanged(this.registerEntity); 
    }

    setValidationForPhoneNumber(control: AbstractControl) : void {
        this.companyPhoneNumberError = '';

        if((control.touched || control.dirty) && control.errors) {
            this.companyPhoneNumberError = Object.keys(control.errors)
                .map(key => this.validationMessages.phoneNumber[key]).join(' ');
        }
    }

    setValidationForCompanyName(control: AbstractControl) : void {
        this.companyNameErrorMessage = '';

        if((control.touched || control.dirty) && control.errors) {
            this.companyNameErrorMessage = Object.keys(control.errors)
                .map(key => this.validationMessages.companyName[key]).join(' ');
        }
    }
}