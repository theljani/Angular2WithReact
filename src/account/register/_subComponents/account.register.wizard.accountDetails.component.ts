import {Component, OnInit, OnChanges} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

// entities
import {RegisterEntity} from '../../register/_entities/register';
import {AccountDetails} from '../../register/_entities/accountDetails';

//registerStore
import {registerStore} from '../../../stores/register-store/store';
import {registerActions} from '../../../stores/register-store/actions'

//service
import {AccountRegisterWizardStateService} from '../_services/account.register.wizard.state.service';

function PasswordsMatcher(control: AbstractControl): {[key: string] : boolean } | null {
    let password = control.get('password');
    let confirmPassword = control.get('confirmPassword');

    if(password.pristine || confirmPassword.pristine) {
        return null;
    }

    if(password.value === confirmPassword.value) {
        return null;
    }

    return {'mismatch': true};
};

@Component({
    selector: 'pt-register-wizard-account-details',
    moduleId: module.id,
    templateUrl: '../_templates/account.register.wizard.accountDetails.component.html',
    styleUrls: ['../_styles/account.register.wizard.accountDetails.component.css']
})
export class AccountRegisterWizardAccountDetailsComponent implements OnInit, OnChanges {
    accountDetailsForm: FormGroup;
    actionDispatcher: registerActions;
    accountDetails: AccountDetails;
    registerEntity: RegisterEntity = {
        userDetails: null,
        accountDetails: null,
        companyDetails: null
    };

    // Form controls
    loginFormControl: AbstractControl;
    passwordFormControl: AbstractControl;
    confirmPasswordFormControl: AbstractControl;

    // Error messages
    loginErrorMessage: string;
    passwordErrorMessage: string;
    confirmPasswordErrorMessage: string;

    private validationMessages = {
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

    constructor(private _formBuilder: FormBuilder, private accountRegisterWizardStateService: AccountRegisterWizardStateService) {
        this.actionDispatcher = new registerActions();
    }

    ngOnInit(): void {
        var state = registerStore.getState();
        this.registerEntity = state.registerEntity;

        this.accountDetails = this.registerEntity.accountDetails;

        this.accountDetails.companyCode = this.registerEntity.companyDetails.companyCode;

        this.accountDetailsForm = this._formBuilder.group({
            login: [this.accountDetails.login, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            passwordGroup: this._formBuilder.group({
                password: [this.accountDetails.password, Validators.required],
                confirmPassword: [this.accountDetails.confirmPassword, [Validators.required]]
            }, {validator: PasswordsMatcher})
        });

        // get form controls
        this.loginFormControl = this.accountDetailsForm.get('login');
        this.passwordFormControl = this.accountDetailsForm.get('passwordGroup').get('password');
        this.confirmPasswordFormControl = this.accountDetailsForm.get('passwordGroup').get('confirmPassword');

        // validation error messages
        this.accountDetailsForm.get('passwordGroup').valueChanges.subscribe((value: any) => {
            this.setValidationMessages(false, this.accountDetailsForm.get('passwordGroup'), 'confirmPassword');
            this.setAccountFormState();
        });

        this.loginFormControl.valueChanges.subscribe((value: any) => {
            this.setValidationMessages(false, this.loginFormControl, 'login');
            this.setAccountFormState();
        });

        this.passwordFormControl.valueChanges.subscribe((value: any) => {
            this.setValidationMessages(false, this.passwordFormControl, 'password');
            this.setAccountFormState();
        });

        this.confirmPasswordFormControl.valueChanges.subscribe((value: any) => {
            this.setValidationMessages(false, this.confirmPasswordFormControl, 'confirmPassword');
            this.setAccountFormState();
        });
    }

    ngOnChanges(changes: any): void {
        // var state = registerStore.getState();
        // this.registerEntity = state.registerEntity;

        this.registerEntity.accountDetails = this.accountDetails;
        this.actionDispatcher.accountDetailsStateChanged(this.registerEntity);
    }

    initializeFormValidation(): void {
        if(this.accountDetails && this.accountDetails.login) {
            this.setValidationMessages(true, this.loginFormControl, 'login');   
        }

        if(this.accountDetails && this.accountDetails.password) {
            this.setValidationMessages(true, this.passwordFormControl, 'password');   
        }

        if(this.accountDetails && this.accountDetails.confirmPassword) {
            this.setValidationMessages(true, this.confirmPasswordFormControl, 'confirmPassword');   
        }

        this.setValidationMessages(true, this.accountDetailsForm.get('passwordGroup'), 'confirmPassword');
    }

    setValidationMessages(forceValidation:boolean, control: AbstractControl, formControlName: string) : void {

        switch(formControlName) {
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
    }

    getErrorMessage(forceValidation: boolean, control: AbstractControl, model: any): string {
        var errorMessage = '';
        if((control.touched || control.dirty|| forceValidation) && control.errors) {
            errorMessage = Object.keys(control.errors)
                .map(key => model[key]).join(' ');
        }

        return errorMessage;
    }

    setAccountFormState(): void {
        this.accountRegisterWizardStateService.setAccountDetailsStepState(
            this.loginFormControl.valid &&
            this.passwordFormControl.valid &&
            this.confirmPasswordFormControl.valid &&
            this.accountDetailsForm.get('passwordGroup').valid
        )
    }
}