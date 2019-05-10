webpackJsonp([0],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertPageModule", function() { return InsertPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__insert__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InsertPageModule = /** @class */ (function () {
    function InsertPageModule() {
    }
    InsertPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__insert__["a" /* InsertPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__insert__["a" /* InsertPage */]),
            ],
        })
    ], InsertPageModule);
    return InsertPageModule;
}());

//# sourceMappingURL=insert.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__ = __webpack_require__(208);
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
/**
 * Generated class for the InsertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InsertPage = /** @class */ (function () {
    function InsertPage(navCtrl, navParams, crudProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crudProvider = crudProvider;
        this.myInfo = {
            name: '',
            details: ''
        };
    }
    InsertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InsertPage');
    };
    InsertPage.prototype.insertData = function () {
        var _this = this;
        this.crudProvider.insertPosts(this.myInfo).then(function (result) {
            console.log(result);
            _this.navCtrl.pop();
        }, function (err) {
            console.log("insert err: " + err);
            console.log("this.myInfo: " + JSON.stringify(_this.myInfo));
        });
    };
    InsertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-insert',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/insert/insert.html"*/'<!--\n  Generated template for the InsertPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Insert</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n    <ion-list>\n\n        <ion-item>\n          <ion-label floating>name</ion-label>\n          <ion-input type="text" [(ngModel)]="myInfo.name"></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label floating>details</ion-label>\n          <ion-textarea type="text" [(ngModel)]="myInfo.details"></ion-textarea>\n        </ion-item>\n      \n      </ion-list>\n    \n    \n      <div padding>\n        <button   ion-button color="secondary"   (click)="insertData()"   >Insert</button>\n      </div>\n    \n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/insert/insert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */]])
    ], InsertPage);
    return InsertPage;
}());

//# sourceMappingURL=insert.js.map

/***/ })

});
//# sourceMappingURL=0.js.map