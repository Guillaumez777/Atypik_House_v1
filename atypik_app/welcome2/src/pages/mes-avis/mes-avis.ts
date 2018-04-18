import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the MesAvisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mes-avis',
  templateUrl: 'mes-avis.html',
})
export class MesAvisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesAvisPage');
  }

  ajoutAvis(){

  let modal = this.modalCtrl.create('AjoutsAvisModalPage');
    modal.present();
  }

}
