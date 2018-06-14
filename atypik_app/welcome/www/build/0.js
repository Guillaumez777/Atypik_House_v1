webpackJsonp([0],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutsAvisModalPageModule", function() { return AjoutsAvisModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajouts_avis_modal__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AjoutsAvisModalPageModule = (function () {
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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjoutsAvisModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prez_avis_prez_avis__ = __webpack_require__(206);
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
 * Generated class for the AjoutsAvisModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjoutsAvisModalPage = (function () {
    function AjoutsAvisModalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AjoutsAvisModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjoutsAvisModalPage');
    };
    AjoutsAvisModalPage.prototype.addavistoavis = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__prez_avis_prez_avis__["a" /* PrezAvisPage */]);
    };
    AjoutsAvisModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajouts-avis-modal',template:/*ion-inline-start:"C:\Users\corbeaux\Desktop\svn\welcome\src\pages\ajouts-avis-modal\ajouts-avis-modal.html"*/' <!--\n  Generated template for the AjoutsAvisModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>AjoutsAvisModal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card>\n\n  		<ion-card-content>\n        \n        <p class = \'intro\'>\n          veuillez choisir une location.\n        </p>\n\n        <ion-item id = \'select\'>\n          <ion-label>Mes reservations</ion-label>\n          <ion-select [(ngModel)]="os" submitText="Okay" cancelText="Nah">\n            <ion-option value="05-17-2018-Cabane">05-17-2018-Cabane</ion-option>\n            <ion-option value="12-01-2018-Cabane">12-01-2018-bulle</ion-option>\n            <ion-option value="05-01-2017-Cabane">05-01-2017-Cabane</ion-option>\n          </ion-select>\n        </ion-item>\n        \n        <p class = \'intro\'>\n         donner une note :\n        </p>\n\n        <ion-item id = \'selectnote\'>\n          <ion-label>Notes</ion-label>\n          <ion-select [(ngModel)]="note" submitText="Okay" cancelText="Nah">\n            <ion-option value="0">0</ion-option>\n            <ion-option value="1">1</ion-option>\n            <ion-option value="2">2</ion-option>\n            <ion-option value="3">3</ion-option>\n            <ion-option value="4">4</ion-option>\n            <ion-option value="5">5</ion-option>\n          </ion-select>\n        </ion-item>\n        \n\n\n        <p class = \'intro\'>\n          donner votre avis:\n        </p>\n\n        <ion-item>\n          <ion-label color="primary" fixed></ion-label>\n          <ion-textarea type="text" placeholder="Votre avis" border="solid"></ion-textarea>\n        </ion-item>\n\n\n        <button ion-button block (click)="addavistoavis()">valider</button>\n  		</ion-card-content>\n\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\corbeaux\Desktop\svn\welcome\src\pages\ajouts-avis-modal\ajouts-avis-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AjoutsAvisModalPage);
    return AjoutsAvisModalPage;
}());

//# sourceMappingURL=ajouts-avis-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map