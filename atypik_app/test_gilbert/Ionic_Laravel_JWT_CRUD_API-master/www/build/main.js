webpackJsonp([7],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(28);
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
 * Generated class for the AvisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvisPage = /** @class */ (function () {
    function AvisPage(navCtrl, navParams, authService, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.data = [];
        this.data = navParams.get('data');
        this.comments = navParams.get('comments');
        this.user = this.storage.get('user');
        console.log("et oui les gars");
        console.log(this.user);
        this.getComments();
    }
    AvisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvisPage');
    };
    AvisPage.prototype.getComments = function () {
        var _this = this;
        this.storage.get("user").then(function (res) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Credentials', 'true');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__["a" /* apiKey */] + 'user/comments/' + res.id).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.comments = data;
                console.log("gaga");
                console.log(res.prenom);
            });
        });
    };
    AvisPage.prototype.myLogout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    AvisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avis',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/avis/avis.html"*/'<!--\n  Generated template for the AvisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Commentaires</ion-title>\n    <div padding>\n      <button ion-button color="secondary"  (click)="myLogout()" >Deconnexion</button>\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item *ngFor="let comment of comments">\n          <p> {{ comment.comment}}</p>\n          <p> {{ comment.note}}/5</p>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/avis/avis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AvisPage);
    return AvisPage;
}());

//# sourceMappingURL=avis.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(28);
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
 * Generated class for the HistoriquesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservationsPage = /** @class */ (function () {
    function ReservationsPage(navCtrl, navParams, authService, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.data = [];
        this.data = navParams.get('data');
        this.reservations = navParams.get('reservations');
        this.user = this.storage.get('user');
        console.log("et oui les gars");
        console.log(this.user);
        this.getReservations();
    }
    ReservationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservationsPage');
    };
    ReservationsPage.prototype.getReservations = function () {
        var _this = this;
        this.storage.get("user").then(function (res) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Credentials', 'true');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__["a" /* apiKey */] + 'user/reservations/' + res.id).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.reservations = data;
                console.log("gaga");
                console.log(res.prenom);
            });
        });
    };
    ReservationsPage.prototype.myLogout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    ReservationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservations',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/reservations/reservations.html"*/'<!--\n  Generated template for the ReservationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>reservations</ion-title>\n    <div padding>\n      <button ion-button color="secondary"  (click)="myLogout()" >Deconnexion</button>\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let reservation of reservations">\n      <p> {{ reservation.start_date}}</p>\n      <p> {{ reservation.end_date}}</p>\n    </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/reservations/reservations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ReservationsPage);
    return ReservationsPage;
}());

//# sourceMappingURL=reservations.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriquesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(28);
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
 * Generated class for the HistoriquesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoriquesPage = /** @class */ (function () {
    function HistoriquesPage(navCtrl, navParams, authService, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.data = [];
        this.data = navParams.get('data');
        this.historiques = navParams.get('historiques');
        this.user = this.storage.get('user');
        console.log("et oui les gars");
        console.log(this.user);
        this.getHistoriques();
    }
    HistoriquesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservationsPage');
    };
    HistoriquesPage.prototype.getHistoriques = function () {
        var _this = this;
        this.storage.get("user").then(function (res) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Credentials', 'true');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__["a" /* apiKey */] + 'user/historiques/' + res.id).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.historiques = data;
                console.log("gaga");
                console.log(res.prenom);
            });
        });
    };
    HistoriquesPage.prototype.myLogout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    HistoriquesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historiques',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/historiques/historiques.html"*/'<!--\n  Generated template for the HistoriquesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>historiques de reservations</ion-title>\n    <div padding>\n      <button ion-button color="secondary"  (click)="myLogout()" >Deconnexion</button>\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let historique of historiques">\n      <p> {{ historique.start_date}}</p>\n      <p> {{ historique.end_date}}</p>\n    </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/historiques/historiques.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], HistoriquesPage);
    return HistoriquesPage;
}());

//# sourceMappingURL=historiques.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/avis/avis.module": [
		287,
		6
	],
	"../pages/edit/edit.module": [
		288,
		1
	],
	"../pages/hebergements/hebergements.module": [
		289,
		5
	],
	"../pages/historiques/historiques.module": [
		290,
		4
	],
	"../pages/insert/insert.module": [
		291,
		0
	],
	"../pages/login/login.module": [
		293,
		3
	],
	"../pages/reservations/reservations.module": [
		292,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-about',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-contact',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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

//import { CrudProvider } from '../../providers/crud/crud';
// import { EditPage } from '../edit/edit';
// import { InsertPage } from '../insert/insert';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        // this.http.get(apiKey+'users')
        //      .map(res => res.json())
        //      .subscribe(data => {
        //        console.log(data);
        //        return data;
        //      }, (err) => {
        //        console.log(err);
        //      });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n  <div  *ngFor=" let item of mydata">\n \n\n\n    <ion-list >\n      <ion-item-sliding>\n        <ion-item>\n          \n          <h2> {{item.name}} </h2>\n          <h2> {{item.details}} </h2>\n   \n        </ion-item>\n        <ion-item-options side="left">\n          \n          <button ion-button color="secondary" \n          (click)="onEdit(item.id,item.name,item.details )">\n            <ion-icon name="create"></ion-icon>\n            Edit\n          </button>\n        </ion-item-options>\n        <ion-item-options side="right">\n          <button ion-button color="danger"  (click)="onDelete(item.id)">\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  \n  </div>\n  \n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_apiurls_serverurls_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(27);
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
        console.log('Hello CrudProvider Provider');
    }
    CrudProvider.prototype.insertPosts = function (postInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (value) {
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Bearer ' + value);
                console.log('value: ' + value);
                _this.http.post(__WEBPACK_IMPORTED_MODULE_1__app_apiurls_serverurls_js__["a" /* apiKey */] + 'api/', JSON.stringify(postInfo), { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                }, function (err) {
                    reject(err);
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

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_crud_crud__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabslogin_tabslogin__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_hebergements_hebergements__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_reservations_reservations__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_historiques_historiques__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_avis_avis__ = __webpack_require__(108);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabslogin_tabslogin__["a" /* TabsloginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_hebergements_hebergements__["a" /* HebergementsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_reservations_reservations__["a" /* ReservationsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_historiques_historiques__["a" /* HistoriquesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_avis_avis__["a" /* AvisPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/avis/avis.module#AvisPageModule', name: 'AvisPage', segment: 'avis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit/edit.module#EditPageModule', name: 'EditPage', segment: 'edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hebergements/hebergements.module#HebergementsPageModule', name: 'HebergementsPage', segment: 'hebergements', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historiques/historiques.module#HistoriquesPageModule', name: 'HistoriquesPage', segment: 'historiques', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/insert/insert.module#InsertPageModule', name: 'InsertPage', segment: 'insert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservations/reservations.module#ReservationsPageModule', name: 'ReservationsPage', segment: 'reservations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabslogin_tabslogin__["a" /* TabsloginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_hebergements_hebergements__["a" /* HebergementsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_reservations_reservations__["a" /* ReservationsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_historiques_historiques__["a" /* HistoriquesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_avis_avis__["a" /* AvisPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_crud_crud__["a" /* CrudProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabslogin_tabslogin__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(28);
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
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabslogin_tabslogin__["a" /* TabsloginPage */];
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabslogin_tabslogin__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hebergements_hebergements__ = __webpack_require__(56);
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
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authService, alertCtrl, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.storage = storage;
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
                console.log("hey");
                console.log(result);
                _this.storage.set('user', result);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__hebergements_hebergements__["a" /* HebergementsPage */], {
                    user: result,
                });
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabslogin_tabslogin__["a" /* TabsloginPage */]);
            }, function (err) {
                _this.errorFunc('Votre identifiant ou votre mot de passe est incorrect');
            });
        }
    };
    LoginPage.prototype.myLogout = function () {
        this.authService.logout();
        this.rootPage = LoginPage_1;
        // this.navCtrl.setRoot(LoginPage);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/login/login.html"*/'\n<ion-content padding>\n  <ion-grid>\n    <img src="assets/imgs/AHlog.png" class="logo"/>\n  </ion-grid>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-grid padding text-center>\n    <button ion-button color="secondary"  (click)="myLogin()" >Connexion</button>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="LoginPage" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_apiurls_serverurls_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(26);
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
                console.log("coucou");
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

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//export const apiKey = 'https://infinite-citadel-45408.herokuapp.com/'
const apiKey = 'http://127.0.0.1:8000/api/'
/* harmony export (immutable) */ __webpack_exports__["a"] = apiKey;


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HebergementsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(28);
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
 * Generated class for the HebergementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HebergementsPage = /** @class */ (function () {
    function HebergementsPage(navCtrl, navParams, authService, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.data = [];
        this.data = navParams.get('data');
        this.houses = navParams.get('houses');
        this.user = this.storage.get('user');
        console.log("et oui les gars");
        console.log(this.user);
        this.getHouses();
    }
    HebergementsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HebergementsPage');
    };
    HebergementsPage.prototype.getHouses = function () {
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
                console.log("gaga");
                console.log(res.prenom);
            });
        });
    };
    HebergementsPage.prototype.myLogout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    HebergementsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hebergements',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/hebergements/hebergements.html"*/'<!--\n  Generated template for the HebergementsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>hebergements</ion-title>\n    <div padding>\n      <button ion-button color="secondary"  (click)="myLogout()" >Deconnexion</button>\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item *ngFor="let house of houses">\n          <img data-src={{house.photo}}/>\n          <p> {{ house.title}}</p>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/hebergements/hebergements.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], HebergementsPage);
    return HebergementsPage;
}());

//# sourceMappingURL=hebergements.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsloginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hebergements_hebergements__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservations_reservations__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__historiques_historiques__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avis_avis__ = __webpack_require__(108);
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
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_1__hebergements_hebergements__["a" /* HebergementsPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_2__reservations_reservations__["a" /* ReservationsPage */];
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_3__historiques_historiques__["a" /* HistoriquesPage */];
        this.tab8Root = __WEBPACK_IMPORTED_MODULE_4__avis_avis__["a" /* AvisPage */];
        this.tabsEnabled = true;
    }
    TabsloginPage.prototype.enableTabs = function (enable) {
        this.tabsEnabled = enable;
    };
    TabsloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/tabslogin/tabslogin.html"*/'<!--\n  Generated template for the TabsloginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>tabslogin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content> -->\n<ion-tabs id="tabslogin">\n    <ion-tab [root]="tab5Root" tabTitle="HebergementsPage" tabIcon="home" enabled="{{tabsEnabled}}"></ion-tab>\n    <ion-tab [root]="tab6Root" tabTitle="ReservationsPage" tabIcon="information-circle" enabled="{{tabsEnabled}}"></ion-tab>\n    <ion-tab [root]="tab7Root" tabTitle="HistoriquesPage" tabIcon="contacts" enabled="{{tabsEnabled}}"></ion-tab>\n    <ion-tab [root]="tab8Root" tabTitle="AvisPage" tabIcon="contacts" enabled="{{tabsEnabled}}"></ion-tab>\n  </ion-tabs>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/tabslogin/tabslogin.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsloginPage);
    return TabsloginPage;
}());

//# sourceMappingURL=tabslogin.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map