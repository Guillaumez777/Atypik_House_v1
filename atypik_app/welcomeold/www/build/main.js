webpackJsonp([9],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_p_welcome_p__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        //api connections
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.retour = function () {
        //api connections
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_p_welcome_p__["a" /* WelcomePPage */]);
    };
    LoginPage.prototype.resetMdp = function () {
        //api connections
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\login\login.html"*/'\n\n<ion-content padding>\n\n<img src="assets/imgs/AHlog.png" class="logo"/>\n\n\n\n	<ion-list>\n\n\n\n  		<ion-item>\n\n    		<ion-label floating>Mail</ion-label>\n\n    		<ion-input type="email"></ion-input>\n\n  		</ion-item>\n\n\n\n  		<ion-item>\n\n    		<ion-label floating>Password</ion-label>\n\n    		<ion-input type="password"></ion-input>\n\n  		</ion-item>\n\n      <p id = "restMdp"> Mot de passe oublié ? cliquez </p>\n\n\n\n      <button id = "buttonrez" ion-button color="primary"  (click)="resetMdp()" clear>ici</button>\n\n      <button ion-button block id = "loginbutton"(click)="login()">Login</button>\n\n      <button ion-button block id = "loginbutton"(click)="retour()">Retour</button>\n\n\n\n	</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesAlertesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MesAlertesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MesAlertesPage = (function () {
    function MesAlertesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MesAlertesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesAlertesPage');
    };
    MesAlertesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mes-alertes',template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\mes-alertes\mes-alertes.html"*/'<!--\n\n  Generated template for the MesAlertesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>mesAlertes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\mes-alertes\mes-alertes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MesAlertesPage);
    return MesAlertesPage;
}());

//# sourceMappingURL=mes-alertes.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesAvisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MesAvisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MesAvisPage = (function () {
    function MesAvisPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    MesAvisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesAvisPage');
    };
    MesAvisPage.prototype.ajoutAvis = function () {
        var modal = this.modalCtrl.create('AjoutsAvisModalPage');
        modal.present();
    };
    MesAvisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mes-avis',template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\mes-avis\mes-avis.html"*/'<!--\n\n  Generated template for the MesAvisPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>mesAvis</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<button ion-button block (click)="ajoutAvis()">Ajouter un avis</button>\n\n	<button ion-button block (click)="ajoutAvis()">Voir mes avis</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\mes-avis\mes-avis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MesAvisPage);
    return MesAvisPage;
}());

//# sourceMappingURL=mes-avis.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesCommandesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MesCommandesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MesCommandesPage = (function () {
    function MesCommandesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MesCommandesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesCommandesPage');
    };
    MesCommandesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mes-commandes',template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\mes-commandes\mes-commandes.html"*/'<!--\n\n  Generated template for the MesCommandesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>mesCommandes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-card>\n\n    	<ion-card-content>\n\n      		<img src="assets/imgs/j.jpg" />\n\n    	</ion-card-content>\n\n\n\n    	<ion-item>\n\n      		<button ion-button clear item-start>Like</button>\n\n      		<button ion-button clear item-end>Comment</button>\n\n    	</ion-item>\n\n  	</ion-card>\n\n  	<ion-card>\n\n    	<ion-card-content>\n\n      		<img src="assets/imgs/c.jpg" />\n\n    	</ion-card-content>\n\n\n\n    	<ion-item>\n\n      		<button ion-button clear item-start>Like</button>\n\n      		<button ion-button clear item-end>Comment</button>\n\n    	</ion-item>\n\n  	</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\mes-commandes\mes-commandes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MesCommandesPage);
    return MesCommandesPage;
}());

//# sourceMappingURL=mes-commandes.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_p_welcome_p__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
        //api connections
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    SignupPage.prototype.retour = function () {
        //api connections
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_p_welcome_p__["a" /* WelcomePPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\signup\signup.html"*/'<ion-content padding>\n\n	<ion-list>\n\n\n\n  		<ion-item>\n\n    		<ion-label stacked>First Name</ion-label>\n\n    		<ion-input type="text"></ion-input>\n\n  		</ion-item>\n\n\n\n  		<ion-item>\n\n    		<ion-label stacked>Last Name</ion-label>\n\n    		<ion-input type="text"></ion-input>\n\n  		</ion-item>\n\n\n\n  		<ion-item>\n\n    		<ion-label stacked>Username</ion-label>\n\n    		<ion-input type="text"></ion-input>\n\n  		</ion-item>\n\n\n\n  		<ion-item>\n\n    		<ion-label stacked>EMail</ion-label>\n\n    		<ion-input type="email"></ion-input>\n\n  		</ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Phone Number</ion-label>\n\n        <ion-input type="tel"></ion-input>\n\n      </ion-item>\n\n\n\n  		<ion-item>\n\n    		<ion-label stacked>Password</ion-label>\n\n    		<ion-input type="password"></ion-input>\n\n  		</ion-item>\n\n  		<button ion-button block (click)="signup()">Signup</button>\n\n      <button ion-button block (click)="retour()">Retour</button>\n\n\n\n	</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_p_welcome_p__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPasswordPage = (function () {
    function ResetPasswordPage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPasswordPage');
    };
    /* presentLoading() {
       const loader = this.loadingCtrl.create({
         content: "Please wait...",
         duration: 3000
       });
       loader.present();
     }*/
    ResetPasswordPage.prototype.retour = function () {
        //api connections
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__welcome_p_welcome_p__["a" /* WelcomePPage */]);
    };
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
    ResetPasswordPage.prototype.ResetPassword = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__welcome_p_welcome_p__["a" /* WelcomePPage */]);
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__welcome_p_welcome_p__["a" /* WelcomePPage */]);
                    }
                }
            ]
        });
        loader.present().then(function () { setTimeout(function () { return prompt.present(); }, 3000); });
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\reset-password\reset-password.html"*/'<!--\n\n  Generated template for the ResetPasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n<img src="assets/imgs/AHlog.png" class="logo"/>\n\n<p> Binevenue sur la page de récupération de votre mot de passe, veuillez remplire le formulaire.</p>\n\n\n\n\n\n	<ion-list>\n\n\n\n  		<ion-item>\n\n    		<ion-label floating>Nom</ion-label>\n\n    		<ion-input type="text"></ion-input>\n\n  		</ion-item>\n\n  		<ion-item>\n\n    		<ion-label floating>Mail</ion-label>\n\n    		<ion-input type="email"></ion-input>\n\n  		</ion-item>\n\n  		<ion-item>\n\n    		<ion-label floating>Telephone</ion-label>\n\n    		<ion-input type="tel"></ion-input>\n\n  		</ion-item>\n\n\n\n      <button id = "sendInfoResetBT" ion-button (click)="ResetPassword()">Envoyer</button>\n\n      <button id = "retourButton" ion-button (click)="retour()">Retour</button>\n\n\n\n	</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\reset-password\reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajouts-avis-modal/ajouts-avis-modal.module": [
		282,
		0
	],
	"../pages/login/login.module": [
		283,
		8
	],
	"../pages/mes-alertes/mes-alertes.module": [
		284,
		1
	],
	"../pages/mes-avis/mes-avis.module": [
		285,
		7
	],
	"../pages/mes-commandes/mes-commandes.module": [
		286,
		6
	],
	"../pages/prezavis/prezavis.module": [
		287,
		5
	],
	"../pages/reset-password/reset-password.module": [
		288,
		4
	],
	"../pages/signup/signup.module": [
		289,
		3
	],
	"../pages/welcome-p/welcome-p.module": [
		290,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img src="assets/imgs/AHlog.png" class="navbarlogo"/><ion-title>About</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n	<div>\n\n	\n\n\n\n  		<ion-card>\n\n    		<h1>Qui sommes nous ?</h1>\n\n    		<p>Nous sommes une société à résponsabilité limité basée dans la localité de Pierrefonds, dans le département de l’Oise.<br />\n\n\n\n			Composée de trois associés partageant les mêmes passions pour le voyage, l’habitat alternatif et la vie en harmonie avec la nature,<br /> nous avons pour objectif de devenir le numéro un de la location d’habitats singuliers (location, réservation, évaluation) tels que des cabanes perchées dans les arbres ou flottantes, des yourtes, etc et ceux en france mais aussi en europe <br />\n\n			</p>\n\n  		</ion-card>\n\n  		<ion-card>\n\n    		<h1>Foire Aux Questions</h1>\n\n    		<p><strong>Comment fonctionne notre application ?</strong><br />\n\n    		l\'application Atypikhouse est une application de gestion de location.\n\n    			il s\'agit d\'un outil complémentaire vous permettant d\'ajouter un avis a une location, de gerer vos achat ou d\'obtenir des information en temps reel concernant vos locations.<br />\n\n    		<strong>mes avis:</strong><br />\n\n    			l\'espace mes avis vous permet de consulter ou de creer des avis , poster des photos et de noté les locations de notre réseau.<br />\n\n    		<strong>mes commandes:</strong> <br />\n\n    			l\'espace mes commandes vous êrmet d\'avoir un apercu de toutes les réservation passés sur notre réseau; \n\n    			vous y trouverez vos information d\'achat tels que le prix, le logement loué etc...<br />\n\n    		<strong>mes notifications:</strong><br />\n\n    			vous trouverez dans cette espace toutes les mise a jour concernant le site n l\'application ou toutes modification lier aux location. vous serez informer en temps rééle de toutes  modification réaliser sur une location par son proprietaire.<br /></p>\n\n\n\n    		<p><strong>Comment effectuer une recherche ?</strong><br />\n\n    		l\'application atypikhouse ne permet pas d\'éffectuer de recher. elle sert uniquement d\'outils de gestion pour pouvoir organiser vos location , noté un logement et gérer vos achat. pour pouvoir acceder a notre catalog de logement insolite vous devez vous rende sur notre site internet a cete adresse:\n\n    			https://wwww.atypikhouse.com/noslocations<br /></p>\n\n\n\n    		<p><strong>Comment effectuer une réservation ?</strong><br />\n\n    		pour effectuer une reservation il vous faut vous rendre sur notre site internet a la page \n\n    			https://www.atypikhous.com/noslocations, séléctionner un un logement qui vous plait, remplissez le formulaire et le tour est jouer. vous recevrez une notification sur votre application ainsi qu\'un mail pour vos informer de la réussite de votre reservation<br /></p>\n\n\n\n    		<p><strong>Je souhaite offrir un séjour à une tierce personne</strong><br />\n\n    		pour offrie un séjour, il vous siffira de cocher la case "pour offrire" et entrer les informations demandées.<br /></p>\n\n\n\n    		<p><strong>Jusqu\'à quand puis-je annuler ou modifier ma réservation ?</strong><br />\n\n    		pour des raisons de logistique entre atypikhouse et les proprietaire nos laissons une marge d\'une semaine avant la date butoire pour annuler une reservation et dix jours pour modifier votre reservation. toutes fois les proprietaire se reserve le droit de refuser une modifications si leurs ratio demande/temps se trouve élevé (vacances scolaire, hotes saisons, etc...) l\'annulation quant a elle reste toujours valable. une contion peut etre récupérer par le proprietaire si l\'annulation ce fait apres la date limite de 7 jours avant la date butoire.<br /></p>\n\n\n\n    		<p><strong>Je suis propriétaire d’un hébergement insolite, comment intégrer votre réseau ?</strong><br />\n\n    		Pour pouvoir integrer notre reseau il vous faut vous inscrire en tant que propriétaire sur notre site internet et remplir les informations demandées.<br /> \n\n            Une fois les vérifications terminées nous vous informerons par mail de la validation de votre compte et vous pourrez ainsi poster vos locations en ligne sur notre site.<br /></p>\n\n\n\n            <p><strong>Comment etre sur de la qualité d\'une location ?</strong><br />\n\n            En tant que fournisseur d\'un produit, nous nous devons de fournir des services de qualtés.<br />\n\n            C\'est pourquoi nous prenons soin de vérifier chacune des locations enregistrées dans nos données.<br />\n\n            Chaque propriétaires doit répondre à des critères défini par les régles de l\'union européenne ainsi qu\'à des regles imposées par notre service.<br />\n\n            Nous refusons toutes locations ne correspondant pas à nos critères de qualités.<br /> \n\n            Nous avons également un systeme d\'avis permettant de donner son avis, de noter et enregistrer des photos du logement.<br /> \n\n            Vous pourrez donc vous faire un premier avis sur les locations qui vous interessent en observant les avis d\'autres utilisateurs.<br /> De plus, si une location obtient trop de mauvaises notes,nous retirerons celui-ci de notre catalogue.</p>\n\n\n\n            <p><strong>Comment etre sur que le service est sécurisé ?</strong><br />\n\n            Comme cité plus haut, nous mettons un point d\'honneur à vous fournir des services de qualités.<br />\n\n            C\'est pourquoi nous demandons à toutes personnes souhaitant mettre un logement en location, de repondre à un questionnaire et de nous fournir certaines informations afin de nous assurer de la qualité du dit logement.<br /> \n\n            Si vous rencontrez des problèmes avec le systeme de paiment, avec une location ou un propriétaire, vous pouvez nous contacter directement, un assistant interviendra au plus vite pour résoudre vos problèmes.\n\n            </p>\n\n\n\n    		<p><strong>Malgré tous nos efforts, vous n’avez pas trouvé l’information que vous recherchez ?</strong><br />\n\n    		Vous trouverez dans la partie contact de l\'application toutes les coordonées disponible pour nous contacter.<br /> Nous répondrons à toutes vos questions le plus vite possible.</p>\n\n    		\n\n    		\n\n			\n\n  		</ion-card>\n\n\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img src="assets/imgs/AHlog.png" class="navbarlogo"/><ion-title>Contact</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @AtypikHouse\n\n    </ion-item>\n\n    <ion-list-header>Follow us on facebook</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      AtypikHouse\n\n    </ion-item>\n\n    <ion-list-header>Nous contacter par mail</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      AtypikHouse.service@gmail.com\n\n    </ion-item>\n\n    <ion-list-header>nous contacter par telephone</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      0855565656\n\n    </ion-item>\n\n    <ion-list-header>notre adresse </ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      21 rue du capitaine crochet 35240\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mes_alertes_mes_alertes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mes_avis_mes_avis__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mes_commandes_mes_commandes__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
    }
    HomePage.prototype.logout = function () {
        //api connections
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    HomePage.prototype.GoNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mes_alertes_mes_alertes__["a" /* MesAlertesPage */]);
    };
    HomePage.prototype.GoCommandes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mes_commandes_mes_commandes__["a" /* MesCommandesPage */]);
    };
    HomePage.prototype.GoAvis = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mes_avis_mes_avis__["a" /* MesAvisPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img src="assets/imgs/AHlog.png" class="navbarlogo"/><ion-title>Home</ion-title>\n\n     <button ion-button (click)="logout()" id ="logoutbutton">Logout</button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="homefront">\n\n  <h2 id="titlehome">Welcome to AtypikHouse Gestion app!</h2>\n\n<div class="boutonhome">\n\n  <button ion-button block (click)="GoNotifications()">Mes Notifications</button>\n\n  <button ion-button block (click)="GoCommandes()">Mes Commandes</button>\n\n  <button ion-button block (click)="GoAvis()">Mes Avis</button>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrezavisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrezavisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrezavisPage = (function () {
    function PrezavisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrezavisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrezavisPage');
    };
    PrezavisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prezavis',template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\prezavis\prezavis.html"*/'<!--\n\n  Generated template for the PrezavisPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>prezavis</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\prezavis\prezavis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PrezavisPage);
    return PrezavisPage;
}());

//# sourceMappingURL=prezavis.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_p_welcome_p__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mes_commandes_mes_commandes__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mes_avis_mes_avis__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mes_alertes_mes_alertes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_reset_password_reset_password__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_prezavis_prezavis__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_p_welcome_p__["a" /* WelcomePPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mes_commandes_mes_commandes__["a" /* MesCommandesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mes_avis_mes_avis__["a" /* MesAvisPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mes_alertes_mes_alertes__["a" /* MesAlertesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_prezavis_prezavis__["a" /* PrezavisPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajouts-avis-modal/ajouts-avis-modal.module#AjoutsAvisModalPageModule', name: 'AjoutsAvisModalPage', segment: 'ajouts-avis-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mes-alertes/mes-alertes.module#MesAlertesPageModule', name: 'MesAlertesPage', segment: 'mes-alertes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mes-avis/mes-avis.module#MesAvisPageModule', name: 'MesAvisPage', segment: 'mes-avis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mes-commandes/mes-commandes.module#MesCommandesPageModule', name: 'MesCommandesPage', segment: 'mes-commandes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prezavis/prezavis.module#PrezavisPageModule', name: 'PrezavisPage', segment: 'prezavis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome-p/welcome-p.module#WelcomePPageModule', name: 'WelcomePPage', segment: 'welcome-p', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_p_welcome_p__["a" /* WelcomePPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mes_commandes_mes_commandes__["a" /* MesCommandesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mes_avis_mes_avis__["a" /* MesAvisPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mes_alertes_mes_alertes__["a" /* MesAlertesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_prezavis_prezavis__["a" /* PrezavisPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_p_welcome_p__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_p_welcome_p__["a" /* WelcomePPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WelcomePPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePPage = (function () {
    function WelcomePPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePPage');
    };
    WelcomePPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome-p',template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\welcome-p\welcome-p.html"*/'\n\n\n\n\n\n<ion-content padding id="welcome">\n\n\n\n<img src="assets/imgs/AHlog.png" class="logo"/>\n\n<div id="intro">\n\n	<h1> Welcome to AtypikHouse Gestion app </h1>\n\n	<p>Here you can manage your rent, find notification and post your tought about any location rented</p>\n\n</div>\n\n\n\n<button ion-button block class="signup" (click)="signup()">Signup</button>\n\n<button ion-button block class="login"(click)="login()">Login</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\welcome-p\welcome-p.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], WelcomePPage);
    return WelcomePPage;
}());

//# sourceMappingURL=welcome-p.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\app\Atypik_House_v1\atypik_app\welcome\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map