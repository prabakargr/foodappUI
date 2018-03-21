import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ CooklocationPage } from '../cooklocation/cooklocation';
import{ CustomerfoodPage } from '../customerfood/customerfood';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl, FormBuilder } from '@angular/forms';
import{ShareService} from '../../sharedservices/shareservice';

/**
 * Generated class for the CookdishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cookdish',
  templateUrl: 'cookdish.html',
})
export class CookdishPage {
  cookdetails:any;
  cookdish:any;
  cookDetailDish:any;
  dish: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb:FormBuilder,private shareservice:ShareService) {
  }
  addImgDetails(){
    this.navCtrl.push(CooklocationPage);
    console.log(this.dish.value);
    this.cookdish=this.dish.value;
    this.cookdetails=this.shareservice.getvalue()
    console.log(this.cookdetails);
    this.cookDetailDish=Object.assign({},this.cookdetails,this.cookdish)
    this.shareservice.setvalue( this.cookDetailDish);
  }
  ngOnInit() {
    this.dish = this.fb.group({
      images: ''
    });

  }
  

}
