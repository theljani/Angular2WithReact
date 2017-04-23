import {Component, OnInit, OnChanges,  Output} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';

//service
import {AccountRegisterWizardStateService} from '../_services/account.register.wizard.state.service';

import {registerStore} from '../../../stores/main.store';
import {registerActions} from '../../../stores/register-store/actions';
import {RegisterEntity} from '../_entities/register';
import {UserDetails} from '../_entities/userDetails';
// registerStore
@Component({
    selector: 'pt-register-wizard-user-details',
    moduleId: module.id,
    templateUrl: '../_templates/account.register.wizard.userDetails.component.html',
    styleUrls: ['../_styles/account.register.wizard.userDetails.component.css']
})

export class AccountRegisterWizardUserDetailsComponent implements OnInit, OnChanges {
    userDetailsForm: FormGroup;
    userDetails: UserDetails;
    actionDispatcher: registerActions;

    registerEntity: RegisterEntity = {
        userDetails: {
            fullName: null,
            phoneNumber: null,
            address: null
        },
        accountDetails: null,
        companyDetails: null
    };

    fullNameControl: AbstractControl;
    phoneNumberControl: AbstractControl;
    addressLineControl: AbstractControl;
    zipCodeControl: AbstractControl;
    cityControl: AbstractControl;
    countryControl: AbstractControl;

    fullNameErrorMessage = '';
    phoneNumberErrorMessage = '';

    private validationMessages = {
        fullName: {
            required: 'Please enter your full name',
            minlength: 'min length is 4 characters'
        },

        phoneNumber: {
            required: 'Please enter your phone number'
        }
    };

    constructor(private _formBuilder: FormBuilder, 
        private accountRegisterWizardStateService: AccountRegisterWizardStateService) {
            this.actionDispatcher = new registerActions();
        }    
    
    ngOnInit(): void {
        var state = registerStore.getState();
        this.registerEntity = registerStore.getState().registerEntity;

        this.userDetails = this.registerEntity.userDetails;

        this.userDetailsForm = this._formBuilder.group({
            fullName: [this.userDetails ? this.userDetails.fullName : '', [Validators.required, Validators.minLength(4)]],
            phoneNumber: [this.userDetails ? this.userDetails.phoneNumber : '', Validators.required],
            addressLine: this.userDetails ? (this.userDetails.address ? this.userDetails.address.addressLine: '') : '',
            zipCode: this.userDetails ? (this.userDetails.address ? this.userDetails.address.zipCode: '') : '',
            city: this.userDetails ? (this.userDetails.address ? this.userDetails.address.city: '') : '',
            country: this.userDetails ? (this.userDetails.address ? this.userDetails.address.country: '') : ''
        });

        this.fullNameControl = this.userDetailsForm.get('fullName');
        this.phoneNumberControl = this.userDetailsForm.get('phoneNumber');
        this.addressLineControl = this.userDetailsForm.get('addressLine');
        this.cityControl = this.userDetailsForm.get('zipCode');
        this.zipCodeControl = this.userDetailsForm.get('city');
        this.countryControl = this.userDetailsForm.get('country');
        

        this.fullNameControl.valueChanges.subscribe((value: any) => {
            this.setValidationForFullname(this.fullNameControl);
            
            this.accountRegisterWizardStateService.setUserDetailsStepSatate(this.fullNameControl.valid && this.phoneNumberControl.valid);
       });

        this.phoneNumberControl.valueChanges.subscribe((value: any) => {
            this.setValidationForphoneNumber(this.phoneNumberControl);
            
            this.accountRegisterWizardStateService.setUserDetailsStepSatate(this.fullNameControl.valid && this.phoneNumberControl.valid);
        });       
    }

    ngOnChanges(changes: any) {
        this.registerEntity.userDetails = this.userDetails;     
        this.actionDispatcher.userDetailsStateChanged(this.registerEntity);
    }

    setValidationForFullname(control: AbstractControl) : void {
        this.fullNameErrorMessage = '';

        if((control.touched || control.dirty) && control.errors) {
            this.fullNameErrorMessage = Object.keys(control.errors)
                .map(key => this.validationMessages.fullName[key]).join(' ');
        }
    }

    setValidationForphoneNumber(control: AbstractControl) : void {
        this.phoneNumberErrorMessage = '';

        if((control.touched || control.dirty) && control.errors) {
            this.phoneNumberErrorMessage = Object.keys(control.errors)
                .map(key => this.validationMessages.phoneNumber[key]).join(' ');
        }
    }    
    
}