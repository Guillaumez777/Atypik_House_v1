import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoriquesPage } from './historiques';

@NgModule({
  declarations: [
    HistoriquesPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoriquesPage),
  ],
})
export class HistoriquesPageModule {}
