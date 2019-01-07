

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
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { PrezavisPage } from '../pages/prezavis/prezavis';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Mes imports 
import { NewsApiService } from './../services/newsapi.service';
import { AtypikhouseApiService } from './../services/atypikhouseapi.service';
import { HttpModule } from '@angular/http';

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
    MesAlertesPage,
    ResetPasswordPage,
    PrezavisPage
  ],
  imports: [
    HttpModule,
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
    MesAlertesPage,
    ResetPasswordPage,
    PrezavisPage
  ],
  providers: [
    NewsApiService,
    AtypikhouseApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
