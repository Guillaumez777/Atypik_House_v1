import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomePPage } from './welcome-p';

@NgModule({
  declarations: [
    WelcomePPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomePPage),
  ],
})
export class WelcomePPageModule {}
