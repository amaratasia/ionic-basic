webpackJsonp([0],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { SignUpPage } from '../../pages/signup/signup';
var LoginPage = (function () {
    function LoginPage(nav, auth, global, storage) {
        this.nav = nav;
        this.auth = auth;
        this.global = global;
        this.storage = storage;
        this.credentials = { email: '', password: '', remember: 'yes' }; // select remember by default
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('email').then(function (val) {
            if (val != null) {
                _this.credentials.email = val;
            }
        });
        this.storage.get('password').then(function (val) {
            if (val != null) {
                _this.credentials.password = val;
            }
        });
        this.storage.get('user_id').then(function (val) {
            if (val != null) {
                _this.nav.setRoot('HomePage');
            }
        });
    };
    LoginPage.prototype.updateStatus = function () {
        if (this.credentials.remember == 'no') {
            this.credentials.remember = 'yes';
        }
        else {
            this.credentials.remember = 'no';
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function (allowed) {
            if (allowed) {
                _this.nav.setRoot('HomePage');
            }
            else {
                _this.global.showError("Access Denied");
            }
        }, function (error) {
            _this.global.showError(error);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/login/login.html"*/'<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col>\n      <ion-title align="center">\n        <img class="logo" src="assets/img/Ionic_Logo.svg.png">\n      </ion-title>\n    </ion-col>\n  </ion-row>\n\n  <ion-card>\n    <div class="login-box">\n      <form (ngSubmit)="login()" #loginForm="ngForm">\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n\n              <ion-item>\n                <ion-input type="text" placeholder="email" name="email" [(ngModel)]="credentials.email" required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="credentials.password" required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Remember Me</ion-label>\n                <ion-checkbox (ionChange)="updateStatus()" checked="true"></ion-checkbox>\n              </ion-item>\n\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="signup-col">\n            <button ion-button class="submit-btn" full type="submit" [disabled]="!loginForm.form.valid">Login</button>\n          </ion-col>\n        </ion-row>\n\n      </form>\n\n\n    </div>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=0.js.map