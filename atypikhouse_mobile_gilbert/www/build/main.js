webpackJsonp([9],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesAlertesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(16);
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
var MesAlertesPage = /** @class */ (function () {
    function MesAlertesPage(navCtrl, navParams, authService, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.data = [];
        this.alertes = navParams.get('data');
        this.getAlertes();
    }
    MesAlertesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesAlertesPage');
    };
    MesAlertesPage.prototype.getAlertes = function () {
        var _this = this;
        this.storage.get("user").then(function (res) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Credentials', 'true');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__["a" /* apiKey */] + 'user_messages/' + res.id).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // console.log("coco");
                _this.alertes = data;
                console.log(_this.alertes);
                // this.navCtrl.push(MesAlertesPage, {
                //   alertes:data
                // });
            });
        });
    };
    MesAlertesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mes-alertes',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/mes-alertes/mes-alertes.html"*/'<!--\n  Generated template for the MesAlertesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>mesAlertes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card *ngFor="let alerte of alertes">\n    <p class = "nom"> Posté par: {{ alerte.name }}</p>\n    <p class = "avis"> {{ alerte.content }}</p>\n    <button ion-button color="secondary" id="supr" outline>X</button> \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/mes-alertes/mes-alertes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], MesAlertesPage);
    return MesAlertesPage;
}());

//# sourceMappingURL=mes-alertes.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesAvisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__prezavis_prezavis__ = __webpack_require__(109);
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
var MesAvisPage = /** @class */ (function () {
    function MesAvisPage(navCtrl, navParams, modalCtrl, authService, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.data = [];
        this.user = this.storage.get('user');
    }
    MesAvisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesAvisPage');
    };
    MesAvisPage.prototype.ajoutAvis = function () {
        var modal = this.modalCtrl.create('AjoutsAvisModalPage');
        modal.present();
    };
    //  voirAvis(data) {
    //    console.log("goku");
    //    console.log(data);
    //   this.navCtrl.push(PrezavisPage, {
    //     avis:data
    //   });
    // }
    MesAvisPage.prototype.voirAvis = function () {
        var _this = this;
        this.storage.get("user").then(function (res) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Credentials', 'true');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__["a" /* apiKey */] + 'user/comments/' + res.id).map(function (res) { return res.json(); })
                .subscribe(function (comments) {
                _this.avis = comments;
                console.log(comments);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__prezavis_prezavis__["a" /* PrezavisPage */], {
                    comments: comments
                });
            });
        });
    };
    MesAvisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mes-avis',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/mes-avis/mes-avis.html"*/'<!--\n  Generated template for the MesAvisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mesAvis</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="homefront">\n	<div class="boutonhome">\n		<button ion-button block (click)="ajoutAvis()">Ajouter un avis</button>\n		<button ion-button block (click)="voirAvis()">Voir mes avis</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/mes-avis/mes-avis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], MesAvisPage);
    return MesAvisPage;
}());

//# sourceMappingURL=mes-avis.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrezavisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(16);
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
var PrezavisPage = /** @class */ (function () {
    function PrezavisPage(navCtrl, navParams, authService, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.comments = [];
        //this.house = navParams.get('house');
        this.comments = this.navParams.get('comments');
        this.user = this.storage.get('user');
        console.log("fofo");
        console.log(this.comments);
    }
    PrezavisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrezavisPage');
    };
    PrezavisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prezavis',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/prezavis/prezavis.html"*/'<!--\n  Generated template for the PrezavisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>prezavis</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card *ngFor="let comment of comments">\n    	<ion-card-content>\n      		<img class = "imgprez" data-src="http://127.0.0.1:8000/img/houses/{{comment.house.photo}}" />\n    	</ion-card-content>\n			{{comment.house.title}}\n    	<p class = "nom"> Posté par: {{comment.user.nom}} {{comment.user.prenom}}</p>\n    	<p class = "avis"> {{comment.comment}}</p>\n\n    	<ion-item>\n      		<ion-icon class = "notes" item-start style="color: #d03e84"></ion-icon>\n						Notes\n      		<ion-badge item-end>{{comment.note}} / 5</ion-badge>\n    	</ion-item>\n  	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/prezavis/prezavis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], PrezavisPage);
    return PrezavisPage;
}());

//# sourceMappingURL=prezavis.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesAnnoncesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__prezannonces_prezannonces__ = __webpack_require__(111);
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
var MesAnnoncesPage = /** @class */ (function () {
    function MesAnnoncesPage(navCtrl, navParams, authService, modalCtrl, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.http = http;
        this.data = [];
        this.user = this.storage.get('user');
        console.log(this.user);
        this.getHouses();
    }
    MesAnnoncesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesCommandesPage');
    };
    MesAnnoncesPage.prototype.comment = function () {
        var modal = this.modalCtrl.create('AjoutsAvisModalPage');
        modal.present();
    };
    MesAnnoncesPage.prototype.voir = function (house) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__prezannonces_prezannonces__["a" /* PrezannoncesPage */], {
            house: house
        });
    };
    MesAnnoncesPage.prototype.getHouses = function () {
        var _this = this;
        this.storage.get("user").then(function (res) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Credentials', 'true');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__["a" /* apiKey */] + 'mylocations/' + res.id).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.houses = data;
            });
        });
    };
    MesAnnoncesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mes-annonces',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/mes-annonces/mes-annonces.html"*/'<!--\n  Generated template for the MesCommandesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mes annonces</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card *ngFor="let house of houses">\n    	<ion-card-content>\n				<img data-src="http://127.0.0.1:8000/img/houses/{{house.photo}}"/>\n    	</ion-card-content>\n\n    	<ion-item>\n      		<button ion-button clear item-start>Supprimer</button>\n      		<button ion-button clear item-end (click)="voir(house)">Voir</button>\n    	</ion-item>\n  	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/mes-annonces/mes-annonces.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], MesAnnoncesPage);
    return MesAnnoncesPage;
}());

//# sourceMappingURL=mes-annonces.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrezannoncesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {apiKey} from "../../app/apiurls/serverurls.js";



/**
 * Generated class for the PrezannoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrezannoncesPage = /** @class */ (function () {
    function PrezannoncesPage(navCtrl, navParams, authService, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.data = [];
        this.house = navParams.get('house');
        this.user = this.storage.get('user');
        console.log(this.house);
    }
    PrezannoncesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrezannoncesPage');
    };
    PrezannoncesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prezannonces',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/prezannonces/prezannonces.html"*/'<!--\n  Generated template for the PrezavisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Liste de mes annonces</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card>\n    	<ion-card-content>\n      	<img class = "imgprez" data-src="http://127.0.0.1:8000/img/houses/{{house.photo}}" />\n    	</ion-card-content>\n\n			<p class = "nom">{{ house.title }} </p>\n			<p>Type de bien : {{house.category.category}}</p>\n			<p class = "nom">Prix {{ house.price }} €</p>\n			<!-- <div *ngFor="let houseproprietes of house[\'valuecatproprietes\']"><p>{{houseproprietes.proprietes.propriete}}</p></div> -->\n			<p class = "description-annonce">{{ house.description }}</p>\n			<p>Annulation gratuite !</p>\n			<p> Pays: {{house.pays}}</p>\n			<p> Ville: {{house.ville}}</p>\n			<p> Adresse: {{house.adresse}}</p>\n\n    	<!-- <p class = "avis"> Bonne surprise,<br /> cadre de vie saint et apaisant</p> -->\n\n    	<ion-item>\n      		<ion-icon class = "notes" item-start style="color: #d03e84"></ion-icon>\n      			Notes\n      		<ion-badge item-end>9</ion-badge>\n    	</ion-item>\n  	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/prezannonces/prezannonces.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], PrezannoncesPage);
    return PrezannoncesPage;
}());

//# sourceMappingURL=prezannonces.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesCommandesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__prezcommandes_prezcommandes__ = __webpack_require__(113);
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
var MesCommandesPage = /** @class */ (function () {
    function MesCommandesPage(navCtrl, navParams, modalCtrl, authService, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.data = [];
        this.getReservations();
    }
    MesCommandesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesCommandesPage');
    };
    MesCommandesPage.prototype.voir = function (reservation) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__prezcommandes_prezcommandes__["a" /* PrezcommandesPage */], {
            reservation: reservation
        });
    };
    // supprimer(reservation){
    // }
    MesCommandesPage.prototype.getReservations = function () {
        var _this = this;
        this.storage.get("user").then(function (res) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Credentials', 'true');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__["a" /* apiKey */] + 'user/reservations/' + res.id).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.reservations = data;
            });
        });
    };
    MesCommandesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mes-commandes',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/mes-commandes/mes-commandes.html"*/'<!--\n  Generated template for the MesCommandesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mesCommandes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card *ngFor="let reservation of reservations">\n    	<ion-card-content>\n      		<img data-src="http://127.0.0.1:8000/img/houses/{{reservation.house.photo}}" />\n    	</ion-card-content>\n    	<ion-item>\n      		<button ion-button clear item-start (click)="supprimer(reservation)">supprimer</button>\n      		<button ion-button clear item-end (click)="voir(reservation)">Voir</button>\n    	</ion-item>\n  	</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/mes-commandes/mes-commandes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], MesCommandesPage);
    return MesCommandesPage;
}());

//# sourceMappingURL=mes-commandes.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrezcommandesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {apiKey} from "../../app/apiurls/serverurls.js";



/**
 * Generated class for the PrezcommandesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrezcommandesPage = /** @class */ (function () {
    function PrezcommandesPage(navCtrl, navParams, authService, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.data = [];
        this.reservation = navParams.get('reservation');
        this.user = this.storage.get('user');
    }
    PrezcommandesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrezcommandesPage');
    };
    PrezcommandesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prezcommandes',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/prezcommandes/prezcommandes.html"*/'<!--\n  Generated template for the PrezcommandesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Liste de mes commandes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card>\n    	<ion-card-content>\n      		<img class = "imgprez" data-src="http://127.0.0.1:8000/img/houses/{{reservation.house.photo}}" />\n    	</ion-card-content>\n\n			<p class = "nom">{{ reservation.house.title }} </p>\n			<!-- <p>Type de bien : {{reservation.house.category.category}}</p> -->\n			<p class = "nom">Prix {{ reservation.house.price }} €</p>\n			<!-- <div *ngFor="let houseproprietes of house[\'valuecatproprietes\']"><p>{{houseproprietes.proprietes.propriete}}</p></div> -->\n			<p class = "description-annonce">{{ reservation.house.description }}</p>\n			<p>Annulation gratuite !</p>\n			<p> Pays: {{reservation.house.pays}}</p>\n			<p> Ville: {{reservation.house.ville}}</p>\n			<p> Adresse: {{reservation.house.adresse}}</p>\n			<p>Date de reservation du {{ reservation.start_date }} au {{ reservation.end_date }}</p>\n\n  	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/prezcommandes/prezcommandes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], PrezcommandesPage);
    return PrezcommandesPage;
}());

//# sourceMappingURL=prezcommandes.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_apiurls_serverurls_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Headers', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            headers.append('content-type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_apiurls_serverurls_js__["a" /* apiKey */] + 'auth/login?email=' + user.email + '&password=' + user.password, JSON.stringify(user), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.storage.set('token', data.token);
                console.log(_this.token);
                _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_apiurls_serverurls_js__["a" /* apiKey */] + 'user?token=' + _this.token).map(function (res) { return res.json().result; }).subscribe(function (data) {
                    _this.token = data;
                    console.log(_this.token);
                    resolve(_this.token);
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.checkAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (value) {
                _this.token = value;
                resolve(_this.token);
                console.log('haha');
            });
        });
    };
    AuthProvider.prototype.logout = function () {
        this.storage.remove(this.token);
        this.storage.set('token', '');
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajouts-avis-modal/ajouts-avis-modal.module": [
		289,
		0
	],
	"../pages/login/login.module": [
		290,
		8
	],
	"../pages/mes-alertes/mes-alertes.module": [
		291,
		7
	],
	"../pages/mes-annonces/mes-annonces.module": [
		292,
		6
	],
	"../pages/mes-avis/mes-avis.module": [
		293,
		5
	],
	"../pages/mes-commandes/mes-commandes.module": [
		294,
		4
	],
	"../pages/prezannonces/prezannonces.module": [
		295,
		3
	],
	"../pages/prezavis/prezavis.module": [
		296,
		2
	],
	"../pages/prezcommandes/prezcommandes.module": [
		297,
		1
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
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="assets/imgs/AHlog.png" class="navbarlogo"/><ion-title>About</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n	<div>\n	\n\n  		<ion-card>\n    		<h1>Qui sommes nous ?</h1>\n    		<p>Nous sommes une société à résponsabilité limité basée dans la localité de Pierrefonds, dans le département de l’Oise.<br />\n\n			Composée de trois associés partageant les mêmes passions pour le voyage, l’habitat alternatif et la vie en harmonie avec la nature,<br /> nous avons pour objectif de devenir le numéro un de la location d’habitats singuliers (location, réservation, évaluation) tels que des cabanes perchées dans les arbres ou flottantes, des yourtes, etc et ceux en france mais aussi en europe <br />\n			</p>\n  		</ion-card>\n  		<ion-card>\n    		<h1>Foire Aux Questions</h1>\n    		<p><strong>Comment fonctionne notre application ?</strong><br />\n    		l\'application Atypikhouse est une application de gestion de location.\n    			il s\'agit d\'un outil complémentaire vous permettant d\'ajouter un avis a une location, de gerer vos achat ou d\'obtenir des information en temps reel concernant vos locations.<br />\n    		<strong>mes avis:</strong><br />\n    			l\'espace mes avis vous permet de consulter ou de creer des avis , poster des photos et de noté les locations de notre réseau.<br />\n    		<strong>mes commandes:</strong> <br />\n    			l\'espace mes commandes vous êrmet d\'avoir un apercu de toutes les réservation passés sur notre réseau; \n    			vous y trouverez vos information d\'achat tels que le prix, le logement loué etc...<br />\n    		<strong>mes notifications:</strong><br />\n    			vous trouverez dans cette espace toutes les mise a jour concernant le site n l\'application ou toutes modification lier aux location. vous serez informer en temps rééle de toutes  modification réaliser sur une location par son proprietaire.<br /></p>\n\n    		<p><strong>Comment effectuer une recherche ?</strong><br />\n    		l\'application atypikhouse ne permet pas d\'éffectuer de recher. elle sert uniquement d\'outils de gestion pour pouvoir organiser vos location , noté un logement et gérer vos achat. pour pouvoir acceder a notre catalog de logement insolite vous devez vous rende sur notre site internet a cete adresse:\n    			https://wwww.atypikhouse.com/noslocations<br /></p>\n\n    		<p><strong>Comment effectuer une réservation ?</strong><br />\n    		pour effectuer une reservation il vous faut vous rendre sur notre site internet a la page \n    			https://www.atypikhous.com/noslocations, séléctionner un un logement qui vous plait, remplissez le formulaire et le tour est jouer. vous recevrez une notification sur votre application ainsi qu\'un mail pour vos informer de la réussite de votre reservation<br /></p>\n\n    		<p><strong>Je souhaite offrir un séjour à une tierce personne</strong><br />\n    		pour offrie un séjour, il vous siffira de cocher la case "pour offrire" et entrer les informations demandées.<br /></p>\n\n    		<p><strong>Jusqu\'à quand puis-je annuler ou modifier ma réservation ?</strong><br />\n    		pour des raisons de logistique entre atypikhouse et les proprietaire nos laissons une marge d\'une semaine avant la date butoire pour annuler une reservation et dix jours pour modifier votre reservation. toutes fois les proprietaire se reserve le droit de refuser une modifications si leurs ratio demande/temps se trouve élevé (vacances scolaire, hotes saisons, etc...) l\'annulation quant a elle reste toujours valable. une contion peut etre récupérer par le proprietaire si l\'annulation ce fait apres la date limite de 7 jours avant la date butoire.<br /></p>\n\n    		<p><strong>Je suis propriétaire d’un hébergement insolite, comment intégrer votre réseau ?</strong><br />\n    		Pour pouvoir integrer notre reseau il vous faut vous inscrire en tant que propriétaire sur notre site internet et remplir les informations demandées.<br /> \n            Une fois les vérifications terminées nous vous informerons par mail de la validation de votre compte et vous pourrez ainsi poster vos locations en ligne sur notre site.<br /></p>\n\n            <p><strong>Comment etre sur de la qualité d\'une location ?</strong><br />\n            En tant que fournisseur d\'un produit, nous nous devons de fournir des services de qualtés.<br />\n            C\'est pourquoi nous prenons soin de vérifier chacune des locations enregistrées dans nos données.<br />\n            Chaque propriétaires doit répondre à des critères défini par les régles de l\'union européenne ainsi qu\'à des regles imposées par notre service.<br />\n            Nous refusons toutes locations ne correspondant pas à nos critères de qualités.<br /> \n            Nous avons également un systeme d\'avis permettant de donner son avis, de noter et enregistrer des photos du logement.<br /> \n            Vous pourrez donc vous faire un premier avis sur les locations qui vous interessent en observant les avis d\'autres utilisateurs.<br /> De plus, si une location obtient trop de mauvaises notes,nous retirerons celui-ci de notre catalogue.</p>\n\n            <p><strong>Comment etre sur que le service est sécurisé ?</strong><br />\n            Comme cité plus haut, nous mettons un point d\'honneur à vous fournir des services de qualités.<br />\n            C\'est pourquoi nous demandons à toutes personnes souhaitant mettre un logement en location, de repondre à un questionnaire et de nous fournir certaines informations afin de nous assurer de la qualité du dit logement.<br /> \n            Si vous rencontrez des problèmes avec le systeme de paiment, avec une location ou un propriétaire, vous pouvez nous contacter directement, un assistant interviendra au plus vite pour résoudre vos problèmes.\n            </p>\n\n    		<p><strong>Malgré tous nos efforts, vous n’avez pas trouvé l’information que vous recherchez ?</strong><br />\n    		Vous trouverez dans la partie contact de l\'application toutes les coordonées disponible pour nous contacter.<br /> Nous répondrons à toutes vos questions le plus vite possible.</p>\n    		\n    		\n			\n  		</ion-card>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="assets/imgs/AHlog.png" class="navbarlogo"/><ion-title>Contact</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @AtypikHouse\n    </ion-item>\n    <ion-list-header>Follow us on facebook</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      AtypikHouse\n    </ion-item>\n    <ion-list-header>Nous contacter par mail</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      AtypikHouse.service@gmail.com\n    </ion-item>\n    <ion-list-header>nous contacter par telephone</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      0855565656\n    </ion-item>\n    <ion-list-header>notre adresse </ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      21 rue du capitaine crochet 35240\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mes_alertes_mes_alertes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mes_avis_mes_avis__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mes_annonces_mes_annonces__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mes_commandes_mes_commandes__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, app, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.authService = authService;
    }
    HomePage.prototype.myLogout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.GoNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mes_alertes_mes_alertes__["a" /* MesAlertesPage */]);
    };
    HomePage.prototype.GoAnnonces = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mes_annonces_mes_annonces__["a" /* MesAnnoncesPage */]);
    };
    HomePage.prototype.GoCommandes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mes_commandes_mes_commandes__["a" /* MesCommandesPage */]);
    };
    HomePage.prototype.GoAvis = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mes_avis_mes_avis__["a" /* MesAvisPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="assets/imgs/AHlog.png" class="navbarlogo"/><ion-title>Home</ion-title>\n     <button ion-button (click)="myLogout()" id ="logoutbutton">Logout</button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="homefront">\n  <h2 id="titlehome">Welcome to AtypikHouse Gestion app!</h2>\n<div class="boutonhome">\n  <button ion-button block (click)="GoNotifications()">Mes notifications</button>\n  <button ion-button block (click)="GoAnnonces()">Mes annonces</button>\n  <button ion-button block (click)="GoCommandes()">Mes commandes</button>\n  <button ion-button block (click)="GoAvis()">Mes avis</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_apiurls_serverurls_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';





/*
  Generated class for the CrudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CrudProvider = /** @class */ (function () {
    function CrudProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        this.postInfo = [];
        console.log('Hello CrudProvider Provider');
    }
    CrudProvider.prototype.postAvis = function (postInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (value) {
                console.log(value);
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');
                headers.append('Access-Control-Allow-Origin', '*');
                headers.append('Access-Control-Allow-Credentials', 'true');
                headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE, OPTIONS');
                console.log('value: ' + value);
                console.log(postInfo);
                _this.http.post(__WEBPACK_IMPORTED_MODULE_1__app_apiurls_serverurls_js__["a" /* apiKey */] + 'addComment', JSON.stringify(postInfo), { headers: headers })
                    .subscribe(function (data) {
                    // resolve(data);
                    console.log(data);
                }, function (err) {
                    // reject(err);
                });
            });
        });
    };
    CrudProvider.prototype.editPosts = function (id, postInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (value) {
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Bearer ' + value);
                console.log('value: ' + value);
                _this.http.put(__WEBPACK_IMPORTED_MODULE_1__app_apiurls_serverurls_js__["a" /* apiKey */] + 'api/books/' + id, JSON.stringify(postInfo), { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    CrudProvider.prototype.deletePosts = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (value) {
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Bearer ' + value);
                console.log('value: ' + value);
                _this.http.delete(__WEBPACK_IMPORTED_MODULE_1__app_apiurls_serverurls_js__["a" /* apiKey */] + 'api/books/' + id, { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    CrudProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], CrudProvider);
    return CrudProvider;
}());

//# sourceMappingURL=crud.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_crud_crud__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabslogin_tabslogin__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mes_alertes_mes_alertes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_mes_avis_mes_avis__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_mes_annonces_mes_annonces__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mes_commandes_mes_commandes__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_prezannonces_prezannonces__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_prezcommandes_prezcommandes__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_prezavis_prezavis__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabslogin_tabslogin__["a" /* TabsloginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mes_alertes_mes_alertes__["a" /* MesAlertesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mes_avis_mes_avis__["a" /* MesAvisPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_mes_annonces_mes_annonces__["a" /* MesAnnoncesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mes_commandes_mes_commandes__["a" /* MesCommandesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_prezannonces_prezannonces__["a" /* PrezannoncesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_prezcommandes_prezcommandes__["a" /* PrezcommandesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_prezavis_prezavis__["a" /* PrezavisPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajouts-avis-modal/ajouts-avis-modal.module#AjoutsAvisModalPageModule', name: 'AjoutsAvisModalPage', segment: 'ajouts-avis-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mes-alertes/mes-alertes.module#MesAlertesPageModule', name: 'MesAlertesPage', segment: 'mes-alertes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mes-annonces/mes-annonces.module#MesAnnoncesPageModule', name: 'MesAnnoncesPage', segment: 'mes-annonces', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mes-avis/mes-avis.module#MesAvisPageModule', name: 'MesAvisPage', segment: 'mes-avis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mes-commandes/mes-commandes.module#MesCommandesPageModule', name: 'MesCommandesPage', segment: 'mes-commandes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prezannonces/prezannonces.module#PrezannoncesPageModule', name: 'PrezannoncesPage', segment: 'prezannonces', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prezavis/prezavis.module#PrezavisPageModule', name: 'PrezavisPage', segment: 'prezavis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prezcommandes/prezcommandes.module#PrezcommandesPageModule', name: 'PrezcommandesPage', segment: 'prezcommandes', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabslogin_tabslogin__["a" /* TabsloginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mes_alertes_mes_alertes__["a" /* MesAlertesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mes_avis_mes_avis__["a" /* MesAvisPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_mes_annonces_mes_annonces__["a" /* MesAnnoncesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mes_commandes_mes_commandes__["a" /* MesCommandesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_prezannonces_prezannonces__["a" /* PrezannoncesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_prezcommandes_prezcommandes__["a" /* PrezcommandesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_prezavis_prezavis__["a" /* PrezavisPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_crud_crud__["a" /* CrudProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabslogin_tabslogin__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authService) {
        var _this = this;
        this.authService = authService;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.authService.checkAuthentication().then(function (res) {
            console.log("res : " + res);
            if (res === '') {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabslogin_tabslogin__["a" /* TabsloginPage */];
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//export const apiKey = 'https://infinite-citadel-45408.herokuapp.com/'
const apiKey = 'http://127.0.0.1:8000/api/'
/* harmony export (immutable) */ __webpack_exports__["a"] = apiKey;


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabslogin_tabslogin__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { HebergementsPage } from '../hebergements/hebergements';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authService, alertCtrl, http, storage, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.storage = storage;
        this.app = app;
        this.email = '';
        this.password = '';
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.errorFunc = function (message) {
        var alert = this.alertCtrl.create({
            title: "Désolé Il y a une erreur",
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.myLogin = function () {
        var _this = this;
        if (this.email.trim() == "" && this.password.trim() == "") {
            this.errorFunc("Vous n'avez pas remplis les champs");
        }
        else if (this.email.trim() == "") {
            this.errorFunc("Veuillez saisir une adresse email");
        }
        else if (this.password.trim() == '') {
            this.errorFunc('Veuillez saisir un mot de passe');
        }
        else {
            var user = {
                email: this.email,
                password: this.password
            };
            this.authService.login(user).then(function (result) {
                _this.storage.set('user', result);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tabslogin_tabslogin__["a" /* TabsloginPage */], {
                    user: result,
                });
                // this.navCtrl.setRoot(TabsloginPage);
            }, function (err) {
                _this.errorFunc('Votre identifiant ou votre mot de passe est incorrect');
            });
        }
    };
    LoginPage.prototype.myLogout = function () {
        this.authService.logout();
        this.navCtrl.push(LoginPage_1);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/login/login.html"*/'\n<ion-content padding>\n  <ion-grid>\n    <img src="assets/imgs/AHlog.png" class="logo"/>\n  </ion-grid>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-grid padding text-center>\n    <button ion-button  (click)="myLogin()" >Connexion</button>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsloginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsloginPage = /** @class */ (function () {
    function TabsloginPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/tabslogin/tabslogin.html"*/'<ion-tabs id="tabslogin">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/tabslogin/tabslogin.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsloginPage);
    return TabsloginPage;
}());

//# sourceMappingURL=tabslogin.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map