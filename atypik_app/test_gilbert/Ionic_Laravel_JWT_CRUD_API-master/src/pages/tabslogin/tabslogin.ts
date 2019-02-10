import { Component } from '@angular/core';

import { HebergementsPage } from '../hebergements/hebergements';
import { ReservationsPage } from '../reservations/reservations';
import { HistoriquesPage } from '../historiques/historiques';
import { AvisPage } from '../avis/avis';

@Component({
  templateUrl: 'tabslogin.html'
})
export class TabsloginPage {

  tab5Root = HebergementsPage;
  tab6Root = ReservationsPage;
  tab7Root = HistoriquesPage;
  tab8Root = AvisPage;
  constructor() {
  }
  tabsEnabled = true;

  enableTabs(enable: boolean): void {
      this.tabsEnabled = enable;
  }

  
}