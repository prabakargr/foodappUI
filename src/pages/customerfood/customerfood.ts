import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ CustomerlocationPage } from '../customerlocation/customerlocation';

/**
 * Generated class for the CustomerfoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customerfood',
  templateUrl: 'customerfood.html',
})
export class CustomerfoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerfoodPage');
  }
  details(){
    this.navCtrl.push(CustomerlocationPage);
  }

}
