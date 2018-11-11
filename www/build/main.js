webpackJsonp([4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
        this.loading.dismiss();
    };
    return GlobalProvider;
}());
GlobalProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], GlobalProvider);

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_ingredient_list_ingredient__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_ingredient_add_ingredient__ = __webpack_require__(50);
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
            { title: 'Help me with Cooking', component: "help_cooking" }
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-left text-wrap (click)="logout()" >\n        <ion-icon name="ios-log-out"></ion-icon>  <span *ngIf="displayname">{{displayname}}</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<button ion-item *ngFor="let menu of main_page_list" (click)="navigate_menu(menu.component)">\n  {{menu.title}}\n</button>\n</ion-content>\n'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add_ingredient/add_ingredient.module": [
		273,
		3
	],
	"../pages/home/home.module": [
		274,
		2
	],
	"../pages/list_ingredient/list_ingredient.module": [
		275,
		1
	],
	"../pages/login/login.module": [
		276,
		0
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(157);
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
        /*
        Option 1
        change below authUrl to your RESTful URL for authorisation
        */
        this.authUrl = 'http://0.0.0.0:3000/amars';
        /*
        Option 2
        to integrate with WordPress, visit https://github.com/RogerShenAU/wp-ionic-login-auth and follow the instructions
        */
        // this.authUrl = 'https://www.example.com/wp-ionic-login-auth'; 
        /*
        Option 3
        to use PHP as server side authorisation, visit https://github.com/RogerShenAU/php-ionic-login-auth and follow the instructions
        */
        // this.authUrl = 'https://www.example.com/php-ionic-login-auth/login.php'; 
    }
    PostProvider.prototype.restAuth = function (username, password) {
        return this.http.post(this.authUrl, { "username": username, "password": password })
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_post_post__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_ingredient_add_ingredient__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_ingredient_list_ingredient__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_ingredient_service_ingredient_service__ = __webpack_require__(51);
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
            __WEBPACK_IMPORTED_MODULE_11__pages_add_ingredient_add_ingredient__["a" /* AddChildIngredient */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add_ingredient/add_ingredient.module#AddIngredientModule', name: 'AddIngredient', segment: 'add_ingredient', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list_ingredient/list_ingredient.module#ListIngredientModule', name: 'ListIngredient', segment: 'list_ingredient', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
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
            __WEBPACK_IMPORTED_MODULE_13__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/app/app.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      FoodGuide\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="doClick()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header> -->\n<ion-nav [root]="rootPage" #content main swipeBackEnabled="false" name="app"></ion-nav>\n'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_post__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(105);
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
    function User(displayname, username, password, remember) {
        this.displayname = displayname;
        this.username = username;
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
        if (credentials.username === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                _this.post.restAuth(credentials.username, credentials.password).subscribe(function (response) {
                    _this.returnAccess = response;
                    if (_this.returnAccess.result != "Success!") {
                        _this.global.showError(_this.returnAccess.result);
                    }
                    else {
                        if (credentials.remember == "yes") {
                            _this.storage.set('displayname', _this.returnAccess.displayname);
                            _this.storage.set('username', credentials.username);
                            _this.storage.set('password', credentials.password);
                        }
                        else {
                            _this.storage.remove("username");
                            _this.storage.remove("password");
                            _this.storage.remove("displayname");
                        }
                        _this.currentUser = new User(_this.returnAccess.displayname, credentials.username, credentials.password, credentials.remember);
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
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            // if(this.currentUser.remember == "no"){
            //   this.storage.remove("username");
            //   this.storage.remove("password");
            //   this.storage.remove("displayname");
            // }
            // this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthProvider.prototype.postAuth = function (username, password) {
        var _this = this;
        this.post.restAuth(username, password).subscribe(function (response) {
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddChildIngredient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
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
    function AddIngredient(nav, modalCtrl, ingredientService, auth) {
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.ingredientService = ingredientService;
        this.auth = auth;
    }
    AddIngredient.prototype.openIngredientDetail = function (id) {
        var profileModal = this.modalCtrl.create(AddChildIngredient, { ingredient_id: id });
        profileModal.present();
    };
    AddIngredient.prototype.ngOnInit = function () {
        this.get_parent_category_ingredient();
    };
    AddIngredient.prototype.get_parent_category_ingredient = function () {
        var _this = this;
        this.ingredientService.ingredient_parent_category()
            .then(function (data) {
            console.log(data);
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
        selector: 'page-add-ingredient',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/add_ingredient/add_ingredient.html"*/'<ion-header> <ion-navbar> <ion-title>My Ingredients</ion-title> </ion-navbar> </ion-header> \n<ion-content padding>\n	<ion-buttons end>\n      	<button ion-item *ngFor="let ingredient of ingredient_categories" (click)="openIngredientDetail(ingredient.id)">\n		  <ion-icon name="md-add"></ion-icon> Add {{ingredient.name}}\n		</button>\n    </ion-buttons>\n<ion-row center>  \n <ion-col text-center>   \n  <button ion-button icon-only (click)="goToHome()">\n	<ion-icon name="home"></ion-icon>\n	</button>\n </ion-col> \n</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/add_ingredient/add_ingredient.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object])
], AddIngredient);

var AddChildIngredient = (function () {
    function AddChildIngredient(params, nav, ingredientService, viewCtrl, formBuilder, alertCtrl) {
        this.params = params;
        this.nav = nav;
        this.ingredientService = ingredientService;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.parent_id = this.params.get('ingredient_id');
        this.get_parent_category_ingredient();
        this.todo = { id: "", title: "", quantity: 0 };
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
    AddChildIngredient.prototype.get_parent_category_ingredient = function () {
        var _this = this;
        this.ingredientService.get_child_ingredient(this.parent_id)
            .then(function (data) {
            _this.ingredient_list = data['data'];
            console.log(_this.ingredient_list);
        })
            .catch(function (error) {
            console.log(error.message);
        });
    };
    AddChildIngredient.prototype.post_child_ingredient = function () {
        var _this = this;
        this.ingredientService.post_child_ingredient(this.todo.id, this.todo.quantity, 1)
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
        selector: 'page-add-ingredient-modal',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/add_ingredient/ingredient.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Add Ingredient\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <form (submit)="registerIngredient()" padding class="bg-register-image" >\n    <ion-item>\n      <ion-label>Title</ion-label>\n      <ion-select [(ngModel)]="todo.id" name=\'title\'>\n        <ion-option name="title_option" *ngFor="let ingredient of ingredient_list" value="{{ingredient.id}}">{{ingredient.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n  <ion-item>\n    <ion-label>Quantity</ion-label>\n    <ion-input type="number" text-right [(ngModel)]="todo.quantity" name="quantity"></ion-input>\n  </ion-item>\n  <button ion-button type="submit" [disabled]="!(todo.id&&todo.quantity)" block>Add Ingredient</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/add_ingredient/ingredient.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _k || Object])
], AddChildIngredient);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=add_ingredient.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngredientServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(157);
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
    IngredientServiceProvider.prototype.ingredient_user_parent_category = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://0.0.0.0:9090/user_ingredients?user_parent_group=1")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    IngredientServiceProvider.prototype.ingredient_parent_category = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://0.0.0.0:9090/ingredients")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    IngredientServiceProvider.prototype.get_child_ingredient = function (parent_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://0.0.0.0:9090/ingredients?parent_id=" + parent_id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    IngredientServiceProvider.prototype.get_user_child_ingredient = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://0.0.0.0:9090/user_ingredients.json")
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
            _this.http.post("http://0.0.0.0:9090/user_ingredients.json", postParams)
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], IngredientServiceProvider);

var _a;
//# sourceMappingURL=ingredient-service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ListIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(106);
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
    function ListIngredient(nav, modalCtrl, ingredientService, auth) {
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.ingredientService = ingredientService;
        this.auth = auth;
        this.ingredient_categories = [{ title: "amar", id: 1 }];
        this.get_details();
    }
    ListIngredient.prototype.get_details = function () {
        var _this = this;
        this.ingredientService.ingredient_user_parent_category()
            .then(function (data) {
            console.log(data);
            _this.ingredient_categories = data['data'];
            console.log(data['data']);
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
        selector: 'page-list-ingredient',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/list_ingredient/list_ingredient.html"*/'<ion-header> <ion-navbar> <ion-title>My Ingredients</ion-title> </ion-navbar> </ion-header> \n<ion-content padding>\n	<ion-buttons end>\n      	<button ion-item *ngFor="let ingredient of ingredient_categories" (click)="presentProfileModal(ingredient.id)">\n		  <ion-icon name="md-basket"></ion-icon> {{ingredient.name}}\n		</button>\n    </ion-buttons>\n<ion-row center>  \n <ion-col text-center>   \n  <button ion-button icon-only (click)="goToHome()">\n	<ion-icon name="home"></ion-icon>\n	</button>\n </ion-col> \n</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/list_ingredient/list_ingredient.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object])
], ListIngredient);

var Ingredient = (function () {
    function Ingredient(params, nav, viewCtrl, ingredientService) {
        this.params = params;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.ingredientService = ingredientService;
        this.id = this.params.get('parent_id');
        this.get_child_ingredients(this.id);
    }
    Ingredient.prototype.get_child_ingredients = function (id) {
        var _this = this;
        this.ingredientService.get_user_child_ingredient(id)
            .then(function (data) {
            console.log(data);
            _this.cuisine = data;
            console.log(_this.cuisine);
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
        selector: 'page-list-ingredient-modal',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/list_ingredient/ingredient.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!--  -->\n<ion-content >\n  <ion-list>\n    <ion-item *ngFor="let item of cuisine">\n      <ion-label color="primary">{{item.ingredient_name}}</ion-label>\n      <ion-input placeholder="Text Input" (ionChange)="updateIngredient()" value="{{item.quanity}}"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-row center>  \n   <ion-col text-center>   \n    <button ion-button icon-only (click)="goToHome()">\n    <ion-icon name="home"></ion-icon>\n    </button>\n   </ion-col> \n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/list_ingredient/ingredient.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_ingredient_service_ingredient_service__["a" /* IngredientServiceProvider */]) === "function" && _h || Object])
], Ingredient);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=list_ingredient.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map