webpackJsonp([8],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
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


var GlobalProvider = (function () {
    function GlobalProvider(loadingCtrl, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    GlobalProvider.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    GlobalProvider.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    GlobalProvider.prototype.dismissLoading = function () {
        // this.loading.dismiss();
    };
    return GlobalProvider;
}());
GlobalProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], GlobalProvider);

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repurchase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Repurchase = (function () {
    function Repurchase(nav, modalCtrl, ingredientService, storage, auth) {
        var _this = this;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.ingredientService = ingredientService;
        this.storage = storage;
        this.auth = auth;
        this.isDisplayImage = false;
        this.storage.get('user_id').then(function (val) {
            _this.user_id = val;
        });
    }
    Repurchase.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    Repurchase.prototype.openUrl = function () { window.open('https://www.bigbasket.com/', '_system'); };
    Repurchase.prototype.open_map = function () { window.open('https://www.google.com/maps/search/nearby+groceries/', '_system'); };
    Repurchase.prototype.displayImage = function () {
        this.isDisplayImage = true;
    };
    Repurchase.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    return Repurchase;
}());
Repurchase = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-repurchase',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/repurchase/repurchase.html"*/'<ion-header> <ion-navbar> <ion-title>Purchase Groceries</ion-title> </ion-navbar> </ion-header> \n<ion-content padding class="masters">\n	<ion-buttons class="masters" end>\n      	<button class="masters" ion-item >Cloves</button>\n      	<button class="masters" ion-item >Water Melon</button>\n      	<button class="masters" ion-item >Banana</button>\n    </ion-buttons>\n<ion-row center>  \n <ion-col text-center>   \n  <button ion-button icon-only (click)="goToHome()">\n	<ion-icon name="home"></ion-icon>\n	</button>\n	<button ion-button icon-only (click)="openUrl()">\n		<ion-icon name="cart"></ion-icon>\n		</button>\n		<br>\n		<br>\n		<button ion-button icon-only  style="padding:2%" (click)="displayImage()">Nearby Store</button>\n		<br>\n<img *ngIf="isDisplayImage" style="width: 100%;" (click)="open_map()" src="../assets/img/map.png" />\n<br>\n	\n </ion-col> \n</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/repurchase/repurchase.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], Repurchase);

//# sourceMappingURL=repurchase.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add_ingredient/add_ingredient.module": [
		277,
		7
	],
	"../pages/favourites/favourites.module": [
		278,
		6
	],
	"../pages/help_cooking/help_cooking.module": [
		279,
		5
	],
	"../pages/history/history.module": [
		281,
		4
	],
	"../pages/home/home.module": [
		280,
		3
	],
	"../pages/list_ingredient/list_ingredient.module": [
		282,
		2
	],
	"../pages/login/login.module": [
		283,
		0
	],
	"../pages/repurchase/repurchase.module": [
		284,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(161);
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



var PostProvider = (function () {
    function PostProvider(http) {
        this.http = http;
        this.authUrl = 'https://foodguideapi.herokuapp.com/users/login';
    }
    PostProvider.prototype.restAuth = function (email, password) {
        return this.http.post(this.authUrl, { "email": email, "password": password })
            .map(function (res) { return res.json(); });
    };
    return PostProvider;
}());
PostProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], PostProvider);

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_post__ = __webpack_require__(162);
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





var User = (function () {
    function User(email, password, remember) {
        this.email = email;
        this.password = password;
        this.remember = remember;
    }
    return User;
}());

var AuthProvider = (function () {
    function AuthProvider(injector, global, storage, post) {
        this.injector = injector;
        this.global = global;
        this.storage = storage;
        this.post = post;
    }
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                _this.post.restAuth(credentials.email, credentials.password).subscribe(function (response) {
                    _this.returnAccess = response;
                    if (_this.returnAccess.result != "Success!") {
                        _this.global.showError(_this.returnAccess.result);
                    }
                    else {
                        if (credentials.remember == "yes") {
                            _this.storage.set('user_id', _this.returnAccess.user_id);
                            _this.storage.set('email', credentials.email);
                            _this.storage.set('password', credentials.password);
                        }
                        else {
                            _this.storage.remove("email");
                            _this.storage.remove("password");
                            _this.storage.remove("displayname");
                        }
                        _this.currentUser = new User(credentials.email, credentials.password, credentials.remember);
                        observer.next(true);
                        observer.complete();
                    }
                });
            });
        }
    };
    AuthProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.storage.remove("user_id");
            observer.next(true);
            observer.complete();
        });
    };
    AuthProvider.prototype.postAuth = function (email, password) {
        var _this = this;
        this.post.restAuth(email, password).subscribe(function (response) {
            _this.returnAccess = response;
        });
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_post_post__["a" /* PostProvider */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_post_post__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_ingredient_add_ingredient__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_ingredient_list_ingredient__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_help_cooking_help_cooking__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_history_history__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_favourites_favourites__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_repurchase_repurchase__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_ingredient_service_ingredient_service__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_ingredient_list_ingredient__["b" /* ListIngredient */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_ingredient_list_ingredient__["a" /* Ingredient */],
            __WEBPACK_IMPORTED_MODULE_11__pages_add_ingredient_add_ingredient__["b" /* AddIngredient */],
            __WEBPACK_IMPORTED_MODULE_13__pages_help_cooking_help_cooking__["a" /* HelpCooking */],
            __WEBPACK_IMPORTED_MODULE_15__pages_favourites_favourites__["a" /* Favourites */],
            __WEBPACK_IMPORTED_MODULE_14__pages_history_history__["a" /* PastHistory */],
            __WEBPACK_IMPORTED_MODULE_16__pages_repurchase_repurchase__["a" /* Repurchase */],
            __WEBPACK_IMPORTED_MODULE_13__pages_help_cooking_help_cooking__["b" /* Recipe */],
            __WEBPACK_IMPORTED_MODULE_11__pages_add_ingredient_add_ingredient__["a" /* AddChildIngredient */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add_ingredient/add_ingredient.module#AddIngredientModule', name: 'AddIngredient', segment: 'add_ingredient', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favourites/favourites.module#ListIngredientModule', name: 'Favourites', segment: 'favourites', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help_cooking/help_cooking.module#HelpCookingModule', name: 'HelpCooking', segment: 'help_cooking', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/history/history.module#ListIngredientModule', name: 'PastHistory', segment: 'history', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list_ingredient/list_ingredient.module#ListIngredientModule', name: 'ListIngredient', segment: 'list_ingredient', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/repurchase/repurchase.module#ListIngredientModule', name: 'Repurchase', segment: 'repurchase', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_ingredient_list_ingredient__["b" /* ListIngredient */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_ingredient_list_ingredient__["a" /* Ingredient */],
            __WEBPACK_IMPORTED_MODULE_11__pages_add_ingredient_add_ingredient__["b" /* AddIngredient */],
            __WEBPACK_IMPORTED_MODULE_13__pages_help_cooking_help_cooking__["a" /* HelpCooking */],
            __WEBPACK_IMPORTED_MODULE_15__pages_favourites_favourites__["a" /* Favourites */],
            __WEBPACK_IMPORTED_MODULE_14__pages_history_history__["a" /* PastHistory */],
            __WEBPACK_IMPORTED_MODULE_16__pages_repurchase_repurchase__["a" /* Repurchase */],
            __WEBPACK_IMPORTED_MODULE_13__pages_help_cooking_help_cooking__["b" /* Recipe */],
            __WEBPACK_IMPORTED_MODULE_11__pages_add_ingredient_add_ingredient__["a" /* AddChildIngredient */]
            // SignUpPage
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_post_post__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngredientServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(161);
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



/*
  Generated class for the IngredientServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var IngredientServiceProvider = (function () {
    function IngredientServiceProvider(http) {
        this.http = http;
    }
    IngredientServiceProvider.prototype.recipe_list = function (user_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://foodguideapi.herokuapp.com/recipes?user_id=" + user_id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    IngredientServiceProvider.prototype.get_recipe = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://foodguideapi.herokuapp.com/recipes/" + id + ".json")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    IngredientServiceProvider.prototype.ingredient_user_parent_category = function (user_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://foodguideapi.herokuapp.com/user_ingredients?user_parent_group=1&user_id=" + user_id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    IngredientServiceProvider.prototype.ingredient_parent_category = function (user_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://foodguideapi.herokuapp.com/ingredients?user_id=" + user_id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    IngredientServiceProvider.prototype.get_child_ingredient = function (parent_id, user_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://foodguideapi.herokuapp.com/ingredients?parent_id=" + parent_id + "&user_id=" + user_id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    IngredientServiceProvider.prototype.get_user_child_ingredient = function (id, user_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://foodguideapi.herokuapp.com/user_ingredients.json?&user_id=" + user_id + "&parent_id=" + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    IngredientServiceProvider.prototype.get_past_history = function (user_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://foodguideapi.herokuapp.com/past_histories?user_id=" + user_id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    IngredientServiceProvider.prototype.get_favourites = function (user_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://foodguideapi.herokuapp.com/favourites.json?user_id=" + user_id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    IngredientServiceProvider.prototype.post_child_ingredient = function (ingredient_id, quanity, user_id) {
        var _this = this;
        var postParams = {
            ingredient_id: ingredient_id,
            quanity: quanity,
            user_id: user_id
        };
        return new Promise(function (resolve) {
            _this.http.post("https://foodguideapi.herokuapp.com/user_ingredients.json", postParams)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    IngredientServiceProvider.prototype.complete_cooking = function (recipe_id, user_id) {
        var _this = this;
        var postParams = {
            id: recipe_id,
            user_id: user_id
        };
        return new Promise(function (resolve) {
            _this.http.post("https://foodguideapi.herokuapp.com/user_ingredients/cook_recipe.json", postParams)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    IngredientServiceProvider.prototype.add_to_fav = function (recipe_id, user_id) {
        var _this = this;
        var postParams = {
            recipe_id: recipe_id,
            user_id: user_id
        };
        return new Promise(function (resolve) {
            _this.http.post("https://foodguideapi.herokuapp.com/favourites.json", postParams)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    return IngredientServiceProvider;
}());
IngredientServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], IngredientServiceProvider);

//# sourceMappingURL=ingredient-service.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
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
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/app/app.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      FoodGuide\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="doClick()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header> -->\n<ion-nav [root]="rootPage"  #content main swipeBackEnabled="false" name="app"></ion-nav>\n'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_ingredient_list_ingredient__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_ingredient_add_ingredient__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__help_cooking_help_cooking__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_history__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__repurchase_repurchase__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__favourites_favourites__ = __webpack_require__(56);
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
    function HomePage(nav, auth) {
        // this.login_pages = [{
        // 	title: ""
        // }]
        this.nav = nav;
        this.auth = auth;
        this.main_page_list = [
            { title: 'List my ingredients', component: __WEBPACK_IMPORTED_MODULE_3__list_ingredient_list_ingredient__["b" /* ListIngredient */] },
            { title: 'Add Ingredients', component: __WEBPACK_IMPORTED_MODULE_4__add_ingredient_add_ingredient__["b" /* AddIngredient */] },
            { title: 'Help me with Cooking', component: __WEBPACK_IMPORTED_MODULE_5__help_cooking_help_cooking__["a" /* HelpCooking */] },
            { title: 'Weekly Schedule', component: __WEBPACK_IMPORTED_MODULE_6__history_history__["a" /* PastHistory */] },
            { title: 'Purchase Groceries', component: __WEBPACK_IMPORTED_MODULE_7__repurchase_repurchase__["a" /* Repurchase */] },
            { title: 'Favourites', component: __WEBPACK_IMPORTED_MODULE_8__favourites_favourites__["a" /* Favourites */] }
        ];
    }
    HomePage.prototype.navigate_menu = function (event) {
        this.nav.setRoot(event);
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-left text-wrap (click)="logout()" >\n        <ion-icon name="ios-log-out"></ion-icon>  <span *ngIf="displayname">{{displayname}}</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n\n<button  class="masters" ion-item *ngFor="let menu of main_page_list" (click)="navigate_menu(menu.component)">\n  {{menu.title}}\n</button>\n</ion-content>\n'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddChildIngredient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddIngredient = (function () {
    function AddIngredient(nav, modalCtrl, ingredientService, storage, auth) {
        var _this = this;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.ingredientService = ingredientService;
        this.storage = storage;
        this.auth = auth;
        this.storage.get('user_id').then(function (val) {
            _this.user_id = val;
            _this.get_parent_category_ingredient(val);
        });
    }
    AddIngredient.prototype.openUrl = function () { window.open('https://www.bigbasket.com/', '_system'); };
    AddIngredient.prototype.openIngredientDetail = function (id) {
        var profileModal = this.modalCtrl.create(AddChildIngredient, { ingredient_id: id });
        profileModal.present();
    };
    AddIngredient.prototype.get_parent_category_ingredient = function (user_id) {
        var _this = this;
        this.ingredientService.ingredient_parent_category(user_id)
            .then(function (data) {
            _this.ingredient_categories = data['data'];
        })
            .catch(function (error) {
            // this.alert(error.message);
            console.log(error);
        });
    };
    AddIngredient.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    AddIngredient.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    return AddIngredient;
}());
AddIngredient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-ingredient',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/add_ingredient/add_ingredient.html"*/'<ion-header> <ion-navbar> <ion-title>Add New Ingredients</ion-title> </ion-navbar> </ion-header> \n<ion-content padding class="masters">\n	<ion-buttons class="masters" end>\n      	<button class="masters" ion-item *ngFor="let ingredient of ingredient_categories" (click)="openIngredientDetail(ingredient.id)">\n		  <ion-icon name="md-add"></ion-icon> Add {{ingredient.name}}\n		</button>\n    </ion-buttons>\n	<ion-row center>  \n	 <ion-col text-center>   \n	  <button ion-button icon-only (click)="goToHome()">\n		<ion-icon name="home"></ion-icon>\n		</button>\n	  <button ion-button icon-only (click)="openUrl()">\n		<ion-icon name="cart"></ion-icon>\n		</button>\n	 </ion-col> \n	</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/add_ingredient/add_ingredient.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], AddIngredient);

var AddChildIngredient = (function () {
    function AddChildIngredient(params, nav, ingredientService, viewCtrl, storage, alertCtrl) {
        var _this = this;
        this.params = params;
        this.nav = nav;
        this.ingredientService = ingredientService;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.display_details = false;
        this.parent_id = this.params.get('ingredient_id');
        this.storage.get('user_id').then(function (val) {
            _this.user_id = val;
            _this.get_parent_category_ingredient(val);
        });
        this.todo = { id: 620, title: "Potato", quantity: 0 };
        this.details_hash = { 609: "Calories 44<br/>Total Fat 0.1 g<br/>Saturated fat 0 g<br/>Polyunsaturated fat 0 g<br/>Monounsaturated fat 0 g<br/>Cholesterol 0 mg<br/>Sodium 4 mg<br/>Potassium 161 mg<br/>Total Carbohydrate 10 g<br/>Dietary fiber 1.9 g<br/>Sugar 4.7 g<br/>", 620: "Total Fat 0.2 g<br/>Saturated fat 0.1 g<br/>Polyunsaturated fat 0.1 g<br/>Monounsaturated fat 0 g<br/>Cholesterol 0 mg<br/>Sodium 13 mg<br/>Potassium 897 mg<br/>Total Carbohydrate 37 g<br/>Dietary fiber 4.7 g<br/>Sugar 1.7 g<br/>Protein 4.3 g<br/>" };
    }
    AddChildIngredient.prototype.registerIngredient = function () {
        this.post_child_ingredient();
        this.presentAlert();
        this.dismiss();
    };
    AddChildIngredient.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Add Ingredient',
            subTitle: "Ingredient Added",
            buttons: ['Dismiss']
        });
        alert.present();
    };
    AddChildIngredient.prototype.display_detail = function () {
        this.text = this.details_hash[this.todo.id];
        this.display_details = !this.display_details;
    };
    AddChildIngredient.prototype.get_parent_category_ingredient = function (user_id) {
        var _this = this;
        this.ingredientService.get_child_ingredient(this.parent_id, user_id)
            .then(function (data) {
            _this.ingredient_list = data['data'];
        })
            .catch(function (error) {
            console.log(error.message);
        });
    };
    AddChildIngredient.prototype.post_child_ingredient = function () {
        var _this = this;
        this.ingredientService.post_child_ingredient(this.todo.id, this.todo.quantity, this.user_id)
            .then(function (data) {
            _this.ingredient_list = data['data'];
        })
            .catch(function (error) {
            console.log(error.message);
        });
    };
    AddChildIngredient.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    AddChildIngredient.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AddChildIngredient;
}());
AddChildIngredient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-ingredient-modal',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/add_ingredient/ingredient.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Add Ingredient\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="masters" >\n  <form (submit)="registerIngredient()" padding class="bg-register-image masters" >\n    <ion-item class="masters">\n      <ion-label class="masters">Title</ion-label>\n      <ion-select class="masters"  [(ngModel)]="todo.id" name="title">\n        <ion-option class="masters" *ngFor="let ingredient of ingredient_list" (ionSelect)="display_detail()" value="{{ingredient.id}}">{{ingredient.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n  <ion-item class="masters">\n    <ion-label>Quantity (in Lbs)</ion-label>\n    <ion-input type="number" text-right [(ngModel)]="todo.quantity" name="quantity"></ion-input>\n  </ion-item>\n  <button ion-button type="submit" [disabled]="!(todo.id&&todo.quantity)" block>Add Ingredient</button>\n\n  <ion-item class="masters" text-center>\n  <ion-img width="100px" height="100px" style= "align-items: center;" (click)="display_detail()"  src="../assets/img/{{todo.id}}.png"></ion-img>\n  <div *ngIf="display_details" [innerHtml]="text"></div>\n  </ion-item>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/add_ingredient/ingredient.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AddChildIngredient);

//# sourceMappingURL=add_ingredient.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ListIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListIngredient = (function () {
    function ListIngredient(nav, modalCtrl, ingredientService, storage, auth) {
        var _this = this;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.ingredientService = ingredientService;
        this.storage = storage;
        this.auth = auth;
        this.storage.get('user_id').then(function (val) {
            _this.user_id = val;
            _this.get_details(val);
        });
    }
    ListIngredient.prototype.get_user_id = function () {
        var _this = this;
        this.storage.get('user_id').then(function (val) {
            _this.user_id = val;
        });
    };
    ListIngredient.prototype.get_details = function (user_id) {
        var _this = this;
        this.ingredientService.ingredient_user_parent_category(user_id)
            .then(function (data) {
            _this.ingredient_categories = data['data'];
        })
            .catch(function (error) {
            console.log(error.message);
        });
    };
    ListIngredient.prototype.presentProfileModal = function (id) {
        var profileModal = this.modalCtrl.create(Ingredient, { parent_id: id });
        profileModal.present();
    };
    ListIngredient.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    ListIngredient.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    return ListIngredient;
}());
ListIngredient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list-ingredient',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/list_ingredient/list_ingredient.html"*/'<ion-header> <ion-navbar> <ion-title>My Ingredients</ion-title> </ion-navbar> </ion-header> \n<ion-content padding class="masters">\n	<ion-buttons class="masters" end>\n      	<button class="masters" ion-item *ngFor="let ingredient of ingredient_categories" (click)="presentProfileModal(ingredient.id)">\n		  <ion-icon name="md-basket"></ion-icon> {{ingredient.name}}\n		</button>\n    </ion-buttons>\n<ion-row center>  \n <ion-col text-center>   \n  <button ion-button icon-only (click)="goToHome()">\n	<ion-icon name="home"></ion-icon>\n	</button>\n </ion-col> \n</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/list_ingredient/list_ingredient.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], ListIngredient);

var Ingredient = (function () {
    function Ingredient(params, nav, viewCtrl, storage, ingredientService) {
        var _this = this;
        this.params = params;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.ingredientService = ingredientService;
        this.storage.get('user_id').then(function (val) {
            _this.get_child_ingredients(_this.params.get('parent_id'), val);
        });
    }
    Ingredient.prototype.get_child_ingredients = function (id, user_id) {
        var _this = this;
        this.ingredientService.get_user_child_ingredient(id, user_id)
            .then(function (data) {
            _this.cuisine = data;
        })
            .catch(function (error) {
            console.log(error.message);
        });
    };
    Ingredient.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    Ingredient.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return Ingredient;
}());
Ingredient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list-ingredient-modal',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/list_ingredient/ingredient.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!--  -->\n<ion-content class="masters">\n  <ion-list>\n    <ion-item class="masters" *ngFor="let item of cuisine">\n      <ion-label color="primary">{{item.ingredient_name}}</ion-label>\n      <ion-input placeholder="Text Input" (ionChange)="updateIngredient()" value="{{item.quanity}}"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-row center>  \n   <ion-col text-center>   \n    <button ion-button icon-only (click)="goToHome()">\n    <ion-icon name="home"></ion-icon>\n    </button>\n   </ion-col> \n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/list_ingredient/ingredient.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */]])
], Ingredient);

//# sourceMappingURL=list_ingredient.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpCooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Recipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favourites_favourites__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_history_history__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HelpCooking = (function () {
    function HelpCooking(nav, modalCtrl, ingredientService, storage, auth) {
        var _this = this;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.ingredientService = ingredientService;
        this.storage = storage;
        this.auth = auth;
        this.storage.get('user_id').then(function (val) {
            _this.user_id = val;
            _this.get_details(val);
        });
    }
    HelpCooking.prototype.get_user_id = function () {
        var _this = this;
        this.storage.get('user_id').then(function (val) {
            _this.user_id = val;
        });
    };
    HelpCooking.prototype.get_details = function (user_id) {
        var _this = this;
        this.ingredientService.recipe_list(user_id)
            .then(function (data) {
            _this.ingredient_categories = data;
        })
            .catch(function (error) {
            console.log(error.message);
        });
    };
    HelpCooking.prototype.presentProfileModal = function (id, name) {
        var profileModal = this.modalCtrl.create(Recipe, { recipe_id: id, name: name });
        profileModal.present();
    };
    HelpCooking.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    HelpCooking.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    return HelpCooking;
}());
HelpCooking = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-help-cooking',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/help_cooking/help_cooking.html"*/'<ion-header> <ion-navbar> <ion-title>Recipes You Can Cook</ion-title> </ion-navbar> </ion-header> \n<ion-content padding class="masters">\n	<ion-buttons end>\n      	<button  class="masters" ion-item *ngFor="let ingredient of ingredient_categories" (click)="presentProfileModal(ingredient.id, ingredient.name)">\n		  <ion-icon name="md-basket"></ion-icon> {{ingredient.name}}\n		</button>\n    </ion-buttons>\n<ion-row center  class="masters">  \n <ion-col text-center>   \n  <button ion-button icon-only (click)="goToHome()">\n	<ion-icon name="home"></ion-icon>\n	</button>\n </ion-col> \n</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/help_cooking/help_cooking.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], HelpCooking);

var Recipe = (function () {
    function Recipe(params, nav, viewCtrl, storage, ingredientService) {
        var _this = this;
        this.params = params;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.ingredientService = ingredientService;
        this.storage.get('user_id').then(function (val) {
            _this.user_id = val;
            console.log(_this.params);
            _this.recipe_id = _this.params.get('recipe_id');
            _this.get_recipe(_this.recipe_id);
            _this.re_name = _this.params.data.name;
        });
    }
    Recipe.prototype.get_recipe = function (id) {
        var _this = this;
        this.ingredientService.get_recipe(id)
            .then(function (data) {
            _this.text = data["ingredient_list"];
            _this.video = data["video"];
        })
            .catch(function (error) {
            console.log(error.message);
        });
    };
    Recipe.prototype.add_to_fav = function () {
        var _this = this;
        this.ingredientService.add_to_fav(this.recipe_id, this.user_id)
            .then(function (data) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_favourites_favourites__["a" /* Favourites */]);
        })
            .catch(function (error) {
            console.log(error.message);
        });
    };
    Recipe.prototype.complete_cooking = function () {
        var _this = this;
        this.ingredientService.complete_cooking(this.recipe_id, this.user_id)
            .then(function (data) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_history_history__["a" /* PastHistory */]);
        })
            .catch(function (error) {
            console.log(error.message);
        });
    };
    Recipe.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    Recipe.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return Recipe;
}());
Recipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list-recipe-modal',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/help_cooking/recipe.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{re_name}}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="masters">\n<div style=" padding-left: 5%; padding-right: 3%; ">\n  <h6>\n  <div [innerHtml]="text"></div>\n  <p>Watch Video: <a target="_blank" href="{{video}}">Watch</a></p>\n\n</h6>\n</div>\n\n  <ion-row center>  \n   <ion-col text-center>   \n    <button ion-button icon-only (click)="goToHome()">\n    <ion-icon name="home"></ion-icon>\n    </button>\n<button ion-button icon-only style=" padding: 2%;" (click)="complete_cooking()">\n    Confirm this today\n    </button>\n    <br>\n  <button ion-button icon-only style=" padding: 2%;" (click)="add_to_fav()">\n    Add to Favourites\n  </button>\n   </ion-col> \n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/help_cooking/recipe.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */]])
], Recipe);

//# sourceMappingURL=help_cooking.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Favourites; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Favourites = (function () {
    function Favourites(nav, modalCtrl, ingredientService, storage, auth) {
        var _this = this;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.ingredientService = ingredientService;
        this.storage = storage;
        this.auth = auth;
        this.storage.get('user_id').then(function (val) {
            _this.user_id = val;
            _this.get_details(val);
        });
    }
    Favourites.prototype.get_details = function (user_id) {
        var _this = this;
        this.ingredientService.get_favourites(user_id)
            .then(function (data) {
            console.log(data);
            _this.ingredient_categories = data;
        })
            .catch(function (error) {
            console.log(error.message);
        });
    };
    Favourites.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    Favourites.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    return Favourites;
}());
Favourites = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favourites',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/favourites/favourites.html"*/'<ion-header> <ion-navbar> <ion-title>My Favourites</ion-title> </ion-navbar> </ion-header> \n<ion-content padding class="masters">\n	<ion-buttons class="masters" end>\n      	<button class="masters" ion-item *ngFor="let ingredient of ingredient_categories">\n		  <ion-icon name="md-basket"></ion-icon> {{ingredient.recipe.name}}\n		</button>\n    </ion-buttons>\n<ion-row center>  \n <ion-col text-center>   \n  <button ion-button icon-only (click)="goToHome()">\n	<ion-icon name="home"></ion-icon>\n	</button>\n </ion-col> \n</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/favourites/favourites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], Favourites);

//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastHistory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PastHistory = (function () {
    function PastHistory(nav, modalCtrl, ingredientService, storage, auth) {
        var _this = this;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.ingredientService = ingredientService;
        this.storage = storage;
        this.auth = auth;
        this.storage.get('user_id').then(function (val) {
            _this.user_id = val;
            _this.get_details(val);
        });
    }
    PastHistory.prototype.get_details = function (user_id) {
        var _this = this;
        this.ingredientService.get_past_history(user_id)
            .then(function (data) {
            console.log(data);
            console.log(data['data']);
            _this.ingredient_categories = data;
        })
            .catch(function (error) {
            console.log(error.message);
        });
    };
    PastHistory.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    PastHistory.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    return PastHistory;
}());
PastHistory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-history',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/history/history.html"*/'<ion-header> <ion-navbar> <ion-title>My Ingredients</ion-title> </ion-navbar> </ion-header> \n<ion-content padding class="masters">\n	<ion-buttons class="masters" end>\n      	<button class="masters" ion-item *ngFor="let ingredient of ingredient_categories">\n		  <ion-icon name="md-basket"></ion-icon> {{ingredient.recipe.name}} - {{ingredient.created_at}}\n		</button>\n    </ion-buttons>\n<ion-row center>  \n <ion-col text-center>   \n  <button ion-button icon-only (click)="goToHome()">\n	<ion-icon name="home"></ion-icon>\n	</button>\n </ion-col> \n</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/history/history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], PastHistory);

//# sourceMappingURL=history.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map