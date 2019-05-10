webpackJsonp([1],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditPageModule = /** @class */ (function () {
    function EditPageModule() {
    }
    EditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit__["a" /* EditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit__["a" /* EditPage */]),
            ],
        })
    ], EditPageModule);
    return EditPageModule;
}());

//# sourceMappingURL=edit.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
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
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPage = /** @class */ (function () {
    function EditPage(navCtrl, navParams, crudProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crudProvider = crudProvider;
        this.myInfo = {
            name: '',
            details: ''
        };
        this.id = '';
        this.id = navParams.get('id');
        this.myInfo.name = navParams.get('name');
        this.myInfo.details = navParams.get('details');
    }
    EditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPage');
    };
    EditPage.prototype.myUpdate = function () {
        var _this = this;
        this.crudProvider.editPosts(this.id, this.myInfo).then(function (result) {
            console.log(result);
            _this.navCtrl.pop();
        }, function (err) {
            console.log("insert err: " + err);
            console.log("this.myInfo: " + JSON.stringify(_this.myInfo));
        });
    };
    EditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/edit/edit.html"*/'<!--\n  Generated template for the EditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n    <ion-list>\n\n        <ion-item>\n          <ion-label floating>name</ion-label>\n          <ion-input type="text" [(ngModel)]="myInfo.name"></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label floating>details</ion-label>\n          <ion-textarea type="text" [(ngModel)]="myInfo.details"></ion-textarea>\n        </ion-item>\n      \n      </ion-list>\n    \n    \n      <div padding>\n        <button   ion-button color="secondary"   (click)="myUpdate()"   >Update</button>\n      </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/Atypik_House_v1/atypik_app/test_gilbert/Ionic_Laravel_JWT_CRUD_API-master/src/pages/edit/edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_crud_crud__["a" /* CrudProvider */]])
    ], EditPage);
    return EditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ })

});
//# sourceMappingURL=1.js.map