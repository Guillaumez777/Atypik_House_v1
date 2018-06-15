import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the WelcomePPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome-p',
  templateUrl: 'welcome-p.html',
})
export class WelcomePPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePPage');
  }

  login(){
  	this.navCtrl.push(LoginPage);

  }

  signup(){
  	this.navCtrl.push(SignupPage);

  }

}
