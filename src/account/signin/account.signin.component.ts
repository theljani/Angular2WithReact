import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, AbstractControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { CookieService } from 'ng2-cookies';

import {AccountSigninService} from './_services/account.signin.service'
import {ISigninEntity} from './_entities/signinEntity';
import {signinActions} from './_store/actions';
import {ISigninState} from './_store/signinState';
import {signinStore} from './_store/store';

@Component({
    selector: '',
    moduleId:module.id,
    templateUrl: '_templates/account.signin.component.html',
    styleUrls: ['_styles/account.signin.component.css']
})
export class AccountSigninComponent implements OnInit {
    login: string;
    password: string;

    signinFormGroup: FormGroup;
    loginFormControl: AbstractControl;
    passwordFormControl: AbstractControl;

    loginErrorMessage = '';
    passwordErrorMessage = '';

    signInResponse:any = {};
    backendError: string;

    private validationMessages = {
        login: {
            required: 'Please enter you email address.',
            email: 'Please enter a valid email address.'
        },
        password: {
            required: 'Please enter your password.'
        }
    };

    constructor(private _accountSigninService: AccountSigninService, 
        private _formBuilder: FormBuilder,
        private _signinAction: signinActions,
        private _router: Router,
        private _cookiesService: CookieService){}


    ngOnInit(): void {
        this.signinFormGroup = this._formBuilder.group({
            login: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });

        this.loginFormControl = this.signinFormGroup.get('login');
        this.passwordFormControl = this.signinFormGroup.get('password');

        this.loginFormControl.valueChanges.subscribe((value) => {
            this.setValidationForLogin(this.loginFormControl);
        });

        this.passwordFormControl.valueChanges.subscribe((value) => {
            this.setValidationForPassword(this.passwordFormControl);
        });

        signinStore.subscribe(() => {
            this.signInResponse = signinStore.getState();

            if(this.signInResponse.ok) {
                this._cookiesService.set("Login", this.login, 15);       
                this._cookiesService.set("Password", this.password, 15);
                this._router.navigate(['/company', 1, "dashboard"]);
            } else {
                this.backendError = this.signInResponse.signinEntity.error;
            }
        })
    }

    setValidationForLogin(control: AbstractControl) : void {
        this.loginErrorMessage = '';

        if((control.touched || control.dirty) && control.errors) {
            this.loginErrorMessage = Object.keys(control.errors)
                .map(key => this.validationMessages.login[key]).join(' ');
        }
    }

    setValidationForPassword(control: AbstractControl) : void {
        this.passwordErrorMessage = '';

        if((control.touched || control.dirty) && control.errors) {
            this.passwordErrorMessage = Object.keys(control.errors)
                .map(key => this.validationMessages.password[key]).join(' ');
        }
    }

    signIn(): void {
        this.backendError = '';

        let signinModel: ISigninState = {
            signinEntity: {
                login: this.login,
                password: this.password
            }
        };

        var result = this._signinAction.signin(signinModel);
    }
}