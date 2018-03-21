import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutYouPage } from './about-you';

@NgModule({
  declarations: [
    AboutYouPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutYouPage),
  ],
})
export class AboutYouPageModule {}
