import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LandingpagePage } from '../landingpage/landingpage';
import{ ProfilePage } from '../profile/profile';
import{ OrdersPage } from '../orders/orders';
import{ InboxPage } from '../inbox/inbox';

/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  tab1root = LandingpagePage;
  tab2root = OrdersPage;
  tab3root = InboxPage;
  tab4root = ProfilePage;
 constructor(public navCtrl: NavController, public navParams: NavParams){
   
 }
   ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
