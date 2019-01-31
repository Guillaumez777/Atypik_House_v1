import { Component, ViewChild, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { WelcomePPage } from '../welcome-p/welcome-p';
import { ResetPasswordPage } from '../reset-password/reset-password';

import { HttpClient, HttpHeaders } from '@angular/common/http';


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

  @ViewChild('emailU') userMail;
  @ViewChild('passwordU') userPassword;

/******************************************/
//responseData : any;
//userData = {"name": "","password": ""};

//public http: Http

/***************************************/
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

    /*******************************/
    /* test with ng.name          */
    /*this.data.email = '';     */
    /*this.data.Password = '';*/
  }

 /********************************/
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
/*********************************/

  headers : HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  login(){

  //api connections

  //headers : HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  var url = 'http://127.0.0.1:8000/login';
  var myData = JSON.stringify({email: this.userMail.value, password: 
    this.userPassword.value});

    /************************************************/
  // test de recuperation d'info login
  //var myData = JSON.stringify({username: this.data.email, password: this.data.Password});

  // requete post de login
  //this.http.post(url, userData)
  //  .then((result) => {
  //    this.navCtrl.push(TabsPage);
  //})
  //.catch(error => {
  //
  //  console.log("error login");
  //});
/******************************************************/

  this.httpClient.post(url, myData, {headers: this.header}).then(result => {
    console.log('user connecte', this.userMail.value, this.userPassword.value);
    this.alert('success');
    this.navCtrl.push(TabsPage);
  }) .catch( error => {
    console.log('error');
  })
  console.log('logintest');

  }





/*********************************/
  retour(){
  //api connections
  
    this.navCtrl.push(WelcomePPage);

  }





/*********************************/
  resetMdp(){
  //api connections
  
    this.navCtrl.push(ResetPasswordPage);

  }

}
