import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from './../../sharedservices/user.services'
import { LoginPage } from '../login/login';
import{ LandingPage } from '../landing/landing';
import{ AboutYouPage } from '../about-you/about-you';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public userservice : UserService) {

  }
  // started() {
  //   this.userservice.login({}).subscribe(res=>{
  //   });
  // }
  gotologin(){
    this.navCtrl.setRoot(LoginPage);
  }
  gotostarted(){
    this.navCtrl.setRoot(AboutYouPage);
  }
}
