import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HebergementsPage } from './hebergements';

@NgModule({
  declarations: [
    HebergementsPage,
  ],
  imports: [
    IonicPageModule.forChild(HebergementsPage),
  ],
})
export class HebergementsPageModule {}
