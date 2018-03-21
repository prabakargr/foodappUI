import { Injectable } from '@angular/core';

@Injectable()
export class AppConstants {
    public static CONSTANTS = {
      baseURL:'http://localhost:8080',
      messages: {
        registersuccess: 'Your account has been successfully created',
        failure: 'Something went wrong please try again',
        forgetsuccess: 'Password reset instructions sent to your email id, please check.',
      },
      loginServices: {
        verifylogin:'/login'
      }
    }
  }
