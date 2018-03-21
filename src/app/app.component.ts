import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Storage } from '@ionic/storage';
import { LandingPage } from '../pages/landing/landing';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public loadingCtrl: LoadingController, public storage: Storage) {
    const that = this;
    let loading = this.loadingCtrl.create({spinner:'crescent'});;
    loading.present();
    this.storage.get('userdetails').then((user: any) => {
      if(user) {
        that.rootPage = LandingPage;
        
      } else {
        that.rootPage = HomePage;
      }
      loading.dismiss();
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

