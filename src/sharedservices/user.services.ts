import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstants } from '../config/config.constants';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserService {
  userdetails:any;
  public serviceUrl: any = { };
  constructor(private http: Http,
    public storage: Storage) {
      this.serviceUrl = AppConstants.CONSTANTS.loginServices;

  }
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password'));
  }
  login(value) {
    return this.http.post(this.serviceUrl.verifylogin, JSON.stringify(value))
    .map((response: Response) => {
        return response.json();
    });
  }
}
