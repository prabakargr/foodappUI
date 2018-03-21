import { Component } from '@angular/core';import { IonicPage, NavController, ModalController, Platform, NavParams, ViewController} from 'ionic-angular';
import { ModalContentPage } from '../modal-content/modal-content';
/**
 * Generated class for the CustomerlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customerlocation',
  templateUrl: 'customerlocation.html',
})
export class CustomerlocationPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }
  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerlocationPage');
  }
  
  

}
