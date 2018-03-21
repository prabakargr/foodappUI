import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LandingpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
   selector: 'page-landingpage',
   templateUrl: 'landingpage.html',
 })
 export class LandingpagePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   }
   ionViewDidLoad() {
     console.log('ionViewDidLoad LandingpagePage');
   }
   slides = [
     {
      title: "Some top picks or sponsered one",
       description: "Some description that matches",
       image: "assets/imgs/slide1.png",
     },
     {
       title: "Some top picks or sponsered one",
       description: "Some description that matches",
       image: "assets/imgs/slide2.jpg",
     },
     {
       title: "Some top picks or sponsered one",
       description: "Some description that matches",
       image: "assets/imgs/slide3.jpg",
     }
   ];

}
