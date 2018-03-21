import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ CookdetailsPage } from '../cookdetails/cookdetails';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutYouPage');
  }
  details(){
    this.navCtrl.push(CookdetailsPage);
  }
}
