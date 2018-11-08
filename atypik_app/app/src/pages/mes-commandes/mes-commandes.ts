import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the MesCommandesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mes-commandes',
  templateUrl: 'mes-commandes.html',
})
export class MesCommandesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesCommandesPage');
  }

  comment(){
  	let modal = this.modalCtrl.create('AjoutsAvisModalPage');
    modal.present();

  }

}
