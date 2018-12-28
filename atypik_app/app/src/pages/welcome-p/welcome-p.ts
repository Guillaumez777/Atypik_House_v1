import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

import { NewsApiGlobal } from './../../models/newsapi-global.model';
import { NewsApiService } from './../../services/newsapi.service';

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

  news: NewsApiGlobal = new NewsApiGlobal();

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private newsApiService: NewsApiService) {
    this.newsApiService.getArticles()
    .then(newsFetched => {
      this.news = newsFetched;
      console.log(this.news)
    })
    .catch(error => console.log('Erreur dans la Home : ' + this.news));

  }

  alert() {
    const alert = this.alertCtrl.create({
      title: 'Texte',
      subTitle: 'Du texte à changer',
      buttons: ['OK']
    });
    alert.present();
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
