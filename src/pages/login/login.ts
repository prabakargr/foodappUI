import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ RegisterPage } from '../register/register';
import { LandingpagePage } from '../landingpage/landingpage';
import{ TabPage } from '../tab/tab';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl, FormBuilder } from '@angular/forms';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    
  }
   
  
  gotoSignUp(){
    this.navCtrl.push(RegisterPage);
  }
  onLogin(){
    this.navCtrl.setRoot(TabPage);
    console.log(this.user.value);
  }
  ngOnInit() {

    this.user = new FormGroup({
    
    email: new FormControl('', [Validators.required,Validators.email,Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  }
}
