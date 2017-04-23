import {Injectable} from '@angular/core';
import {ISigninEntity} from '../_iEntities/signinEntity';


@Injectable()
export class AccountSigninService {

    signIn(signinModel: ISigninEntity) : boolean {
        if(signinModel && signinModel.login && signinModel.password)
            return true;
        
        return false;
    }
}