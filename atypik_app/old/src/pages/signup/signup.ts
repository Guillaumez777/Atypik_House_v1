import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { WelcomePPage } from '../welcome-p/welcome-p';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

data:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.data.nom = '';
  this.data.prenom = '';
  this.data.email = '';
  this.data.password = '';
  this.data.response = '';
 
  //this.http = http;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
  //api connections
  
  var link = 'http://localhost:8000/create';
  var myData = JSON.stringify({
    nom: this.data.nom,
    prenom: this.data.prenom,
    email: this.data.email,
    password: this.data.password 
  });
 
  /*this.http.post(link, myData)
  .subscribe(data => {
    this.data.response = data["_body"];
  }, error => {
  console.log("Oooops!");
 });*/
  
}


  retour(){
  //api connections

    this.navCtrl.push(WelcomePPage);

  }

}