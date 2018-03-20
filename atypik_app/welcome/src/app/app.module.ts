import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WelcomePPage } from '../pages/welcome-p/welcome-p';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MesCommandesPage } from '../pages/mes-commandes/mes-commandes';
import { MesAvisPage } from '../pages/mes-avis/mes-avis';
import { MesAlertesPage } from '../pages/mes-alertes/mes-alertes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WelcomePPage,
    LoginPage,
    SignupPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MesCommandesPage,
    MesAvisPage,
    MesAlertesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePPage,
    LoginPage,
    SignupPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MesCommandesPage,
    MesAvisPage,
    MesAlertesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
