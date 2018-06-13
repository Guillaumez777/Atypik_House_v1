import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { WelcomePPage } from '../welcome-p/welcome-p';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

 /* presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }*/

    retour(){
  //api connections
  
    this.navCtrl.push(WelcomePPage);

  }


  /* showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }*/

  ResetPassword(){

    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });

     const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Entrer votre nouveau mot de passe",
      inputs: [
        {
          name: 'password',
          placeholder: 'Mot de passe',
          type: 'password'
        },
        {
          name: 'passwordverif ',
          placeholder: 'Verification Mot de passe',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
            this.navCtrl.push(WelcomePPage);
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            this.navCtrl.push(WelcomePPage);
          }
        }
      ]
    });

    loader.present().then(() => {setTimeout(()=> prompt.present(),3000); });
    

  }

}
