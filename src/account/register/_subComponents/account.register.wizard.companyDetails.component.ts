import {Component, OnInit, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators,AbstractControl} from '@angular/forms';

//service
import {AccountRegisterWizardStateService} from '../_services/account.register.wizard.state.service';

// store
import {registerStore} from '../../../stores/register-store/store';
import {RegisterEntity} from '../_entities/register';
import {CompanyDetails} from '../_entities/companyDetails';
import {registerActions} from '../../../stores/register-store/actions';

@Component({
    selector: 'pt-register-wizard-company-details',
    moduleId: module.id,
    templateUrl: '../_templates/account.register.wizard.companyDetails.component.html',
    styleUrls: ['../_styles/account.register.wizard.companyDetails.component.css']
})
export class AccountRegisterWizardCompanyDetailsComponent implements OnInit, OnChanges {
    companyDetailsForm: FormGroup;
    registerEntity: RegisterEntity;
    companyDetails: CompanyDetails;
    actionDispatcher: registerActions;

    companyNameFormControl: AbstractControl;
    companyCodeFormControl: AbstractControl;
    positionFormControl: AbstractControl;
    websiteFormControl: AbstractControl;

    companyNameErrorMessage: string;
    companyCodeErrorMessage: string;

    private validationMessages = {
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
    constructor(private _formBuilder: FormBuilder, 
        private accountRegisterWizardStateService: AccountRegisterWizardStateService) {
            this.actionDispatcher = new registerActions();
        }

    ngOnInit(): void {
        var state = registerStore.getState();
        this.registerEntity = registerStore.getState().registerEntity;

        this.companyDetails = this.registerEntity.companyDetails;

        this.companyDetailsForm = this._formBuilder.group({
            name: [this.companyDetails.name, Validators.required],
            companyCode: [this.companyDetails.companyCode, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]] ,
            position: this.companyDetails.position,
            website: this.companyDetails.website
        });

        this.companyNameFormControl = this.companyDetailsForm.get('name');
        this.companyCodeFormControl =  this.companyDetailsForm.get('companyCode');
        this.positionFormControl =  this.companyDetailsForm.get('position');
        this.websiteFormControl =  this.companyDetailsForm.get('website');

        this.companyNameFormControl.valueChanges.subscribe((value: any) => {
            this.setValidationForCompanyName(this.companyNameFormControl);

            this.accountRegisterWizardStateService.setCompanyDetailsStepState(this.companyNameFormControl.valid && this.companyCodeFormControl.valid);
        });

        this.companyCodeFormControl.valueChanges.subscribe((value: any) => {
            this.setValidationForCompanyCode(this.companyCodeFormControl);

            this.accountRegisterWizardStateService.setCompanyDetailsStepState(this.companyNameFormControl.valid && this.companyCodeFormControl.valid);
        });
    }

    ngOnChanges(changes: any) {
        this.registerEntity.companyDetails = this.companyDetails;
        this.actionDispatcher.companyDetailsStateChanged(this.registerEntity); 
    }

    setValidationForCompanyName(control: AbstractControl) : void {
        this.companyNameErrorMessage = '';

        if((control.touched || control.dirty) && control.errors) {
            this.companyNameErrorMessage = Object.keys(control.errors)
                .map(key => this.validationMessages.companyName[key]).join(' ');
        }
    }

    setValidationForCompanyCode(control: AbstractControl) : void {
        this.companyCodeErrorMessage = '';

        if((control.touched || control.dirty) && control.errors) {
            this.companyCodeErrorMessage = Object.keys(control.errors)
                .map(key => this.validationMessages.companyCode[key]).join(' ');
        }
    }
}