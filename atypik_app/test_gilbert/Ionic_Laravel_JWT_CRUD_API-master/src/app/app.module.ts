import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { CrudProvider } from '../providers/crud/crud';


import { IonicStorageModule } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { TabsloginPage } from '../pages/tabslogin/tabslogin';

import { HttpModule } from '@angular/http'; 
import { HebergementsPage } from '../pages/hebergements/hebergements';
import { ReservationsPage } from '../pages/reservations/reservations';
import { HistoriquesPage } from '../pages/historiques/historiques';
import { AvisPage } from '../pages/avis/avis';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    TabsloginPage,
    HebergementsPage,
    ReservationsPage,
    HistoriquesPage,
    AvisPage,
    // EditPage,
    // InsertPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()  ,
    HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    TabsloginPage,
    HebergementsPage,
    ReservationsPage,
    HistoriquesPage,
    AvisPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    CrudProvider
  ]
})
export class AppModule {}
