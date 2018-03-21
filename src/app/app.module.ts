import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { httpFactory } from './../config/index';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing'
import { UserService } from './../sharedservices/user.services';
import{ LoginPage } from '../pages/login/login';
import{ RegisterPage } from '../pages/register/register';
import{ LandingpagePage } from '../pages/landingpage/landingpage';
import{ ProfilePage } from '../pages/profile/profile';
import{ OrdersPage } from '../pages/orders/orders';
import{ InboxPage } from '../pages/inbox/inbox';
import{ TabPage } from '../pages/tab/tab';
import { AboutYouPage } from '../pages/about-you/about-you';
import{ CookdetailsPage } from '../pages/cookdetails/cookdetails';
import { CookdishPage } from '../pages/cookdish/cookdish';
import{ CooklocationPage } from '../pages/cooklocation/cooklocation';
import{ CustomerfoodPage } from '../pages/customerfood/customerfood';
import{ CustomerlocationPage } from '../pages/customerlocation/customerlocation';
import{ ModalContentPage } from '../pages/modal-content/modal-content';
import{ ShareService} from '../sharedservices/shareservice';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    LoginPage,
    RegisterPage,
    LandingpagePage,
    ProfilePage,
    OrdersPage,
    InboxPage,
    TabPage,
    ModalContentPage,
    AboutYouPage,
    CookdetailsPage,
    CookdishPage,
    CooklocationPage,
    CustomerfoodPage,
    CustomerlocationPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ' '
     }),
    IonicStorageModule.forRoot({
      name: '__alaidb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    LoginPage,
    RegisterPage,
    LandingpagePage,
    ProfilePage,
    OrdersPage,
    InboxPage,
    TabPage,
    AboutYouPage,
    CookdetailsPage,
    CookdishPage,
    CooklocationPage,
    CustomerfoodPage,
    CustomerlocationPage,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    UserService,
    ShareService,
    SplashScreen,
    {
        provide: Http,
        useFactory: httpFactory,
        deps: [XHRBackend, RequestOptions]
    },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
