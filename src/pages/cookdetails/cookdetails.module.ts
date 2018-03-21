import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookdetailsPage } from './cookdetails';

@NgModule({
  declarations: [
    CookdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CookdetailsPage),
  ],
})
export class CookdetailsPageModule {}
