import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from './../../sharedservices/user.services';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})

export class LandingPage {

  constructor(public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {

  }
  asap(){
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  slides = [
    {
      image: "assets/imgs/slides2.jpg",
    },
    {
      image: "assets/imgs/slides3.jpg",
    },
    {
      image: "assets/imgs/slides4.jpg",
    },
    {
      image: "assets/imgs/slides5.jpg",
    },
    {
      image: "assets/imgs/slides6.jpg",
    },
    {
      image: "assets/imgs/slides7.jpg",
    },
    {
      image: "assets/imgs/slides8.jpg",
    }
  ];
  slidess = [
    {
      image: "assets/imgs/popular1.jpg",
      title:"Super Fast Delivery",
      description: "7 Options"
    },
    {
      image: "assets/imgs/popular2.jpg",
      title: "Offers Near You",
      description: "71 Options"
    },
    {
      image: "assets/imgs/popular.jpg",
      title:"popular",
      description: "20 options"
    },
    {
      image: "assets/imgs/popular5.jpg",
      title:"Pocket Friendly",
      description: "10 options"
    },
    {
      image: "assets/imgs/popular6.jpg",
      title:"vegiterian offers",
      description: "8 options"
    },
    {
      image: "assets/imgs/popular.jpg",
      title:"All offers",
      description: "48 options"
    }
  ];
  near_you = [
    {
      image: "assets/imgs/food1.jpg",
      title:"Food Name",
      description: "Details about food"
    },
    {
      image: "assets/imgs/food2.jpg",
      title: "Food Name",
      description: "Details about food"
    },
    {
      image: "assets/imgs/food3.jpg",
      title:"Food Name",
      description: "Details about food"
    },
    {
      image: "assets/imgs/food4.jpg",
      title:"Food Name",
      description: "Details about food"
    },
    {
      image: "assets/imgs/food5.jpg",
      title:"Food Name",
      description: "Details about food"
    },
    {
      image: "assets/imgs/food6.jpg",
      title:"Food Name",
      description: "Details about food"
    }
  ];
  


}
