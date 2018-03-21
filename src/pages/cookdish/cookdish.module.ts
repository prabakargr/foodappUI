import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookdishPage } from './cookdish';

@NgModule({
  declarations: [
    CookdishPage,
  ],
  imports: [
    IonicPageModule.forChild(CookdishPage),
  ],
})
export class CookdishPageModule {}
