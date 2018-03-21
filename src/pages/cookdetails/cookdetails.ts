import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CookdishPage } from '../cookdish/cookdish';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl, FormBuilder } from '@angular/forms';
import{ CooklocationPage } from '../../pages/cooklocation/cooklocation';
import{ShareService} from '../../sharedservices/shareservice';

/**
 * Generated class for the CookdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cookdetails',
  templateUrl: 'cookdetails.html',
})
export class CookdetailsPage {
  user: FormGroup;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,private shareservice:ShareService,
      private fb: FormBuilder) {
  }
  cookdetails(){
    this.navCtrl.push(CookdishPage);

      console.log(this.user.value);

      this.shareservice.setvalue(this.user.value);
  
  }
  // details(){
  //   this.navCtrl.push(CooklocationPage);
  // }
  ngOnInit() {
    this.user = this.fb.group({
      experience: '',
      dayJob: '',
      offtenPost:'',
      phone:''
    });

  }
  

}
