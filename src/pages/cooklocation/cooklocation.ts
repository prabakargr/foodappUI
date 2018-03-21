import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ CustomerfoodPage } from '../customerfood/customerfood';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl, FormBuilder } from '@angular/forms';
import{ CookdetailsPage } from '../../pages/cookdetails/cookdetails';
import{ CookdishPage } from '../../pages/cookdish/cookdish';
import{ShareService} from '../../sharedservices/shareservice';

/**
 * Generated class for the CooklocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cooklocation',
  templateUrl: 'cooklocation.html',
})
export class CooklocationPage {
  cookdetails:any;
  loacatedetails:any;
  fulldetails:any;
  cooklocation: FormGroup;
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private fb: FormBuilder, private shareservice:ShareService) {
    //this.exp.data = navParams.get('data');
  }

  
  loactiondetails(){
    this.navCtrl.push(CustomerfoodPage);
    this.loacatedetails=this.cooklocation.value;
    console.log(this.loacatedetails);
    this.cookdetails=this.shareservice.getvalue();
    console.log(this.cookdetails);
    let alldatas = Object.assign({}, this.cookdetails,this.loacatedetails);
    console.log(alldatas);
    this.shareservice.setvalue(alldatas);
    

  }
  ngOnInit() {
    this.cooklocation = this.fb.group({
      location: ''
    });

  }
}
