import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerfoodPage } from './customerfood';

@NgModule({
  declarations: [
    CustomerfoodPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerfoodPage),
  ],
})
export class CustomerfoodPageModule {}
