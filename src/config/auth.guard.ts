import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard {

    constructor() { }
    canActivate() {
       /* if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }*/
        return true;
    }
}
