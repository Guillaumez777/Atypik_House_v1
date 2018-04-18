import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesAlertesPage } from './mes-alertes';

@NgModule({
  declarations: [
    MesAlertesPage,
  ],
  imports: [
    IonicPageModule.forChild(MesAlertesPage),
  ],
})
export class MesAlertesPageModule {}
