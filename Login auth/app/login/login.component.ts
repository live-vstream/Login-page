import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {AuthService} from '../services/authservice';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

@Component({
    templateUrl: '../app/login/login.html',
    providers: [AuthService]
})

export class LoginComponent {
    localUser = {
        username: '',
        password: '',
        email:''
    }
    
    constructor(private _service:AuthService, private _router: Router) {
        
    }
    
    login() {
        this._service.loginfn(this.localUser).then((res) => {
            if(res)
            this._router.navigate(['Dashboard']);
            else
            console.log(res);
        })
    }
    
    clearfields() {
        this.localUser.username = '';
        this.localUser.password = '';
    }
    
    
}
