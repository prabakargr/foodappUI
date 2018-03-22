import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ CookdetailsPage } from '../cookdetails/cookdetails';
import {  OnInit } from '@angular/core';
import{ CustomerfoodPage } from '../customerfood/customerfood';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl, FormBuilder } from '@angular/forms';
/**
 * Generated class for the AboutYouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-you',
  templateUrl: 'about-you.html',
})
export class AboutYouPage {
  about: FormGroup;
  role: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutYouPage');
  }
  ngOnInit() {
    this.about = this.fb.group({
      Role: ''
      
    });

  }
  on
  aboutYou(){
    console.log(this.about.value);
    this.role=this.about.value;
    console.log(this.role.Role);
    if(this.role.Role=="cook"){
      this.navCtrl.push(CookdetailsPage);
    }
    else if(this.role.Role=="customer"){
      this.navCtrl.push(CustomerfoodPage);
    } 
    else{
      this.navCtrl.push(AboutYouPage);
    } 
  }

}
