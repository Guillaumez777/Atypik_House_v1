import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PrezavisPage } from '../prezavis/prezavis';

/**
 * Generated class for the AjoutsAvisModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouts-avis-modal',
  templateUrl: 'ajouts-avis-modal.html',
})
export class AjoutsAvisModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutsAvisModalPage');
  }

  addavistoavis() {
  	this.navCtrl.push(PrezavisPage);
  }

}