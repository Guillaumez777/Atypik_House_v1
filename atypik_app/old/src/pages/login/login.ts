import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { WelcomePPage } from '../welcome-p/welcome-p';
import { ResetPasswordPage } from '../reset-password/reset-password';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
  //api connections
  
  	this.navCtrl.push(TabsPage);

  } 

  retour(){
  //api connections
  
    this.navCtrl.push(WelcomePPage);

  }

  resetMdp(){
  //api connections
  
    this.navCtrl.push(ResetPasswordPage);

  }

}
