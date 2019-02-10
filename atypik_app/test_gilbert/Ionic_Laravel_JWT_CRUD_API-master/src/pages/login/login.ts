import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams  } from 'ionic-angular';


import { AuthProvider } from '../../providers/auth/auth';
import { TabsloginPage } from '../tabslogin/tabslogin';
import { HebergementsPage } from '../hebergements/hebergements';



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


  email:string = '';
  password:string = '';
  errorMsg:string;
  result:string;
  rootPage:any ;
  tabsPage:any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider , public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: "Désolé Il y a une erreur",
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }




  myLogin(){
    if(this.email.trim() == "" && this.password.trim() == ""){
      this. errorFunc("Vous n'avez pas remplis les champs")
    }
    else if (this.email.trim() == "") {
      this. errorFunc("Veuillez saisir une adresse email")
    }
    else if (this.password.trim() == '') {
        this.errorFunc('Veuillez saisir un mot de passe')
    } else {
      let user = {
        email: this.email,
        password: this.password
      };
      console.log(user)
      this.authService.login(user).then((result) => {
        console.log(result);
        console.log("hey");
        console.log(result['token']);
        this.navCtrl.push(HebergementsPage, {
          data : result
        });
        this.navCtrl.setRoot(TabsloginPage);
        
      }, (err) => {
      this. errorFunc('Votre identifiant ou votre mot de passe est incorrect')
      console.log("user: "+JSON.stringify(user))
      });
    }  
  }

  myLogout(){
    this.authService.logout();
    this.rootPage = LoginPage;
    
    // this.navCtrl.setRoot(LoginPage);
  }
}