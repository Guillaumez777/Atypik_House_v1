import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { MesAlertesPage } from '../mes-alertes/mes-alertes';
import { MesAvisPage } from '../mes-avis/mes-avis';
import { MesCommandesPage } from '../mes-commandes/mes-commandes';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

  }

 logout(){
  //api connections

  	const root = this.app.getRootNav();
  	root.popToRoot();
}

GoNotifications(){
	this.navCtrl.push(MesAlertesPage);

}

GoCommandes(){
	this.navCtrl.push(MesCommandesPage);

}

GoAvis(){
	this.navCtrl.push(MesAvisPage);

}

}
