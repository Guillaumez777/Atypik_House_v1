
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { MesAlertesPage } from '../mes-alertes/mes-alertes';
import { MesAvisPage } from '../mes-avis/mes-avis';
import { MesCommandesPage } from '../mes-commandes/mes-commandes';

import { AtypikhouseApiGlobal } from './../../models/atypikhouseapi-global.model';
import { AtypikhouseApiService } from './../../services/atypikhouseapi.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  news: AtypikhouseApiGlobal = new AtypikhouseApiGlobal();

  constructor(public navCtrl: NavController, public app: App, private atypikhouseApiService: AtypikhouseApiService) {

    this.atypikhouseApiService.getHome()
    .then(newsFetched => {
      this.news = newsFetched;
      console.log('Cette valeur est : ' + this.news)
    })
    .catch(error => console.log('Erreur dans la Home : ' + this.news));
   
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
