import {Component, OnInit, OnChanges,  Output} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';

//service
import {AccountRegisterService} from '../_services/account.register.wizard.state.service';

import {registerStore} from '../_store/store';
import {registerActions} from '../_store/actions';
import {CompanyRegister} from '../_entities/companyRegister';
import {CompanyAddress} from '../_entities/companyAddress';
// registerStore
@Component({
    selector: 'pt-register-wizard-user-details',
    moduleId: module.id,
    templateUrl: '../_templates/account.register.wizard.companyAddress.component.html',
    styleUrls: ['../_styles/account.register.wizard.companyAddress.component.scss']
})
export class AccountRegisterWizardCompanyAddressComponent implements OnInit, OnChanges {
    companyAddressForm: FormGroup;
    companyAddress: CompanyAddress;
    registerEntity: CompanyRegister;

    addressLineControl: AbstractControl;
    postalCodeControl: AbstractControl;
    cityControl: AbstractControl;
    countryControl: AbstractControl;

    addressLineErrorMessage: string;
    cityErrorMessage: string;
    countryErrorMessage: string;
    postalCodeErrorMessage: string;

    private validationMessages = {
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

    constructor(private _formBuilder: FormBuilder, 
        private AccountRegisterService: AccountRegisterService,
        private actionDispatcher: registerActions) {
        }    
    
    ngOnInit(): void {
        var state = registerStore.getState();
        this.registerEntity = registerStore.getState().registerEntity;

        this.companyAddress = this.registerEntity.companyAddress;

        this.companyAddressForm = this._formBuilder.group({
            addressLine: [this.companyAddress.addressLine, [Validators.required]],
            postalCode: [this.companyAddress.postalCode, [Validators.required]],
            city: [this.companyAddress.city, [Validators.required]],
            country: [this.companyAddress.country, [Validators.required]],
        });

        this.addressLineControl = this.companyAddressForm.get('addressLine');
        this.cityControl = this.companyAddressForm.get('city');
        this.postalCodeControl = this.companyAddressForm.get('postalCode');
        this.countryControl = this.companyAddressForm.get('country');
        

        this.addressLineControl.valueChanges.subscribe((value: any) => {
            this.setValidationForAddressLine(this.addressLineControl);
            this.setCompanyAddressState();
        });

        this.cityControl.valueChanges.subscribe((value: any) => {
            this.setValidationForCity(this.cityControl);           
            this.setCompanyAddressState();
        });   

        this.countryControl.valueChanges.subscribe((value: any) => {
            this.setValidationForCountry(this.countryControl);           
            this.setCompanyAddressState();
        });     

        this.postalCodeControl.valueChanges.subscribe((value: any) => {
            this.setValidationForpostalCode(this.postalCodeControl);           
            this.setCompanyAddressState();
        }); 
    }

    setCompanyAddressState(): void {
            this.AccountRegisterService.setCompanyAddressStepSatate(this.addressLineControl.valid 
                && this.cityControl.valid
                && this.countryControl.valid
                && this.postalCodeControl.valid);
    }
    ngOnChanges(changes: any) {
        this.registerEntity.companyAddress = this.companyAddress;     
        this.actionDispatcher.userDetailsStateChanged(this.registerEntity);
    }

    setValidationForAddressLine(control: AbstractControl) : void {
        this.addressLineErrorMessage = '';

        if((control.touched || control.dirty) && control.errors) {
            this.addressLineErrorMessage = Object.keys(control.errors)
                .map(key => this.validationMessages.addressLine[key]).join(' ');
        }
    }

    setValidationForCity(control: AbstractControl) : void {
        this.cityErrorMessage = '';

        if((control.touched || control.dirty) && control.errors) {
            this.cityErrorMessage = Object.keys(control.errors)
                .map(key => this.validationMessages.city[key]).join(' ');
        }
    }    

    setValidationForCountry(control: AbstractControl) : void {
        this.countryErrorMessage = '';

        if((control.touched || control.dirty) && control.errors) {
            this.countryErrorMessage = Object.keys(control.errors)
                .map(key => this.validationMessages.country[key]).join(' ');
        }
    }    

    setValidationForpostalCode(control: AbstractControl) : void {
        this.postalCodeErrorMessage = '';

        if((control.touched || control.dirty) && control.errors) {
            this.postalCodeErrorMessage = Object.keys(control.errors)
                .map(key => this.validationMessages.postalCode[key]).join(' ');
        }
    }  
}