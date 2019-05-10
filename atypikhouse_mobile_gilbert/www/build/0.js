webpackJsonp([0],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutsAvisModalPageModule", function() { return AjoutsAvisModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajouts_avis_modal__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AjoutsAvisModalPageModule = /** @class */ (function () {
    function AjoutsAvisModalPageModule() {
    }
    AjoutsAvisModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ajouts_avis_modal__["a" /* AjoutsAvisModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ajouts_avis_modal__["a" /* AjoutsAvisModalPage */]),
            ],
        })
    ], AjoutsAvisModalPageModule);
    return AjoutsAvisModalPageModule;
}());

//# sourceMappingURL=ajouts-avis-modal.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjoutsAvisModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiurls_serverurls_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_crud_crud__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { PrezavisPage } from '../prezavis/prezavis';
/**
 * Generated class for the AjoutsAvisModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjoutsAvisModalPage = /** @class */ (function () {
    function AjoutsAvisModalPage(navCtrl, navParams, authService, storage, http, crudProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.crudProvider = crudProvider;
        this.myComment = {
            user_id: null
        };
        this.storage.get("user").then(function (res) {
            _this.user = res;
            console.log(_this.user);
        });
        this.getReservations();
    }
    AjoutsAvisModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjoutsAvisModalPage');
    };
    AjoutsAvisModalPage.prototype.postComment = function () {
        console.log(this.myComment);
        this.myComment.user_id = this.user.id;
        this.crudProvider.postAvis(this.myComment).then(function (result) { });
    };
    AjoutsAvisModalPage.prototype.getReservations = function () {
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
                console.log(_this.reservations);
            });
        });
    };
    AjoutsAvisModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajouts-avis-modal',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/ajouts-avis-modal/ajouts-avis-modal.html"*/'<!--\n  Generated template for the AjoutsAvisModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>AjoutsAvisModal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <p class = \'intro\'>\n        veuillez choisir une location.\n      </p>\n      <ion-item id = \'select\'>\n        <ion-label>Mes reservations</ion-label>\n        <ion-select [(ngModel)]="myComment.house_id" submitText="Okay" cancelText="Nah">\n          <ion-option *ngFor="let reservation of reservations" value="{{reservation.house_id}}">{{reservation.house.title}} de {{reservation.start_date}} - {{reservation.end_date}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <p class = \'intro\'>\n        donner une note :\n      </p>\n      <form (ngSubmit)="postComment()" method="POST">\n        <ion-item id = \'selectnote\'>\n          <ion-label>Notes</ion-label>\n          <ion-select [(ngModel)]="myComment.note" name="note" submitText="Okay" cancelText="Nah">\n            <ion-option value="0">0</ion-option>\n            <ion-option value="1">1</ion-option>\n            <ion-option value="2">2</ion-option>\n            <ion-option value="3">3</ion-option>\n            <ion-option value="4">4</ion-option>\n            <ion-option value="5">5</ion-option>\n          </ion-select>\n        </ion-item>\n        <p class = \'intro\'>\n          donner votre avis:\n        </p>\n        <ion-item>\n          <ion-label color="primary" fixed></ion-label>\n          <ion-textarea type="text"[(ngModel)]="myComment.comment" name="comment" placeholder="Votre avis" border="solid"></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <!-- <ion-input type="text"  value="{{reservation.house.id}}"></ion-input> -->\n          <!-- <input type=\'hidden\' name=\'_method\' value=\'POST\'> -->\n        </ion-item>\n        <button ion-button block type="submit">valider</button>\n      </form>\n    </ion-card-content>\n\n  </ion-card>\n\n  <button id = "retourButton" ion-button navPop>Retour</button>\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypikhouse_mobile_gilbert/src/pages/ajouts-avis-modal/ajouts-avis-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__providers_crud_crud__["a" /* CrudProvider */]])
    ], AjoutsAvisModalPage);
    return AjoutsAvisModalPage;
}());

//# sourceMappingURL=ajouts-avis-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map