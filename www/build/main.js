webpackJsonp([4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
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

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add_ingredient/add_ingredient.module": [
		271,
		1
	],
	"../pages/home/home.module": [
		272,
		3
	],
	"../pages/list_ingredient/list_ingredient.module": [
		273,
		2
	],
	"../pages/login/login.module": [
		274,
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
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(244);
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_ingredient_list_ingredient__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_ingredient_add_ingredient__ = __webpack_require__(275);
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
            { title: 'Add Ingredients', component: __WEBPACK_IMPORTED_MODULE_4__add_ingredient_add_ingredient__["a" /* AddIngredient */] },
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _b || Object])
], HomePage);

var _a, _b;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_post_post__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_ingredient_add_ingredient__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_ingredient_list_ingredient__ = __webpack_require__(50);
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
            __WEBPACK_IMPORTED_MODULE_11__pages_add_ingredient_add_ingredient__["a" /* AddIngredient */]
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
            __WEBPACK_IMPORTED_MODULE_11__pages_add_ingredient_add_ingredient__["a" /* AddIngredient */]
            // SignUpPage
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_post_post__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
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
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // if (page.title == 'Logout') 
        // {
        //   this.userData.logout();
        // } else {
        //   this.nav.setRoot(page.component);
        //   this.userData
        //   }
        // this.enableMenu(true);
    };
    ;
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/app/app.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      FoodGuide\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="doClick()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header> -->\n<ion-nav [root]="rootPage" #content main swipeBackEnabled="false" name="app"></ion-nav>\n'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddIngredient; });
/* unused harmony export Ingredient */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(198);
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
    function AddIngredient(nav, modalCtrl, auth) {
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
    }
    AddIngredient.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    AddIngredient.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create(Ingredient, { userId: 8675309 });
        profileModal.present();
    };
    AddIngredient.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.ingredient_categories = [
            { title: "string12", id: 122 },
            { title: "stringss", id: 122 },
            { title: "string", id: 122 }
        ];
    };
    AddIngredient.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
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
        selector: 'page-add-ingredient',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/add_ingredient/add_ingredient.html"*/'<ion-header> <ion-navbar> <ion-title>My Ingredients</ion-title> </ion-navbar> </ion-header> \n<ion-content padding>\n	<ion-buttons end>\n      	<button ion-item *ngFor="let ingredient of ingredient_categories" (click)="presentProfileModal()">\n		  <ion-icon name="md-basket"></ion-icon> {{ingredient.title}}\n		</button>\n    </ion-buttons>\n<ion-row center>  \n <ion-col text-center>   \n  <button ion-button icon-only (click)="goToHome()">\n	<ion-icon name="home"></ion-icon>\n	</button>\n </ion-col> \n</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/add_ingredient/add_ingredient.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
], AddIngredient);

var Ingredient = (function () {
    function Ingredient(params, nav, viewCtrl) {
        this.params = params;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.cuisine = { 'digest': [{ label: "amar", unit: 120, total: 120 }], image: true };
        this.title = this.params.get('userId');
        // this.peopleServiceProvider.loadin(this.title)
        //     .then(data => {
        //       loading.dismiss();
        //       console.log(data['hits'])
        //       var resp = data['hits'].sort(function(a,b) { return parseFloat(a.recipe.yield) - parseFloat(b.recipe.yield) } )
        //       this.cuisine = resp[resp.length - 1].recipe;
        //     });
    }
    Ingredient.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    Ingredient.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return Ingredient;
}());
Ingredient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-ingredient-modal',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/add_ingredient/ingredient.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!--  -->\n<ion-content >\n  <ion-list>\n    <ion-item *ngFor="let item of cuisine.digest">\n          {{item.title}}\n      <ion-label color="primary">{{item.label}}</ion-label>\n      <ion-input placeholder="Text Input" (ionChange)="updateIngredient()" value="{{item.label}}"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-row center>  \n   <ion-col text-center>   \n    <button ion-button icon-only (click)="goToHome()">\n    <ion-icon name="home"></ion-icon>\n    </button>\n   </ion-col> \n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/add_ingredient/ingredient.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], Ingredient);

//# sourceMappingURL=add_ingredient.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_post__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(102);
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
                    console.log("Mar");
                    console.log(response);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ListIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(198);
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
    function ListIngredient(nav, modalCtrl, auth) {
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
    }
    ListIngredient.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    ListIngredient.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create(Ingredient, { userId: 8675309 });
        profileModal.present();
    };
    ListIngredient.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.ingredient_categories = [
            { title: "string12", id: 122 },
            { title: "stringss", id: 122 },
            { title: "string", id: 122 }
        ];
    };
    ListIngredient.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
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
        selector: 'page-list-ingredient',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/list_ingredient/list_ingredient.html"*/'<ion-header> <ion-navbar> <ion-title>My Ingredients</ion-title> </ion-navbar> </ion-header> \n<ion-content padding>\n	<ion-buttons end>\n      	<button ion-item *ngFor="let ingredient of ingredient_categories" (click)="presentProfileModal()">\n		  <ion-icon name="md-basket"></ion-icon> {{ingredient.title}}\n		</button>\n    </ion-buttons>\n<ion-row center>  \n <ion-col text-center>   \n  <button ion-button icon-only (click)="goToHome()">\n	<ion-icon name="home"></ion-icon>\n	</button>\n </ion-col> \n</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/list_ingredient/list_ingredient.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
], ListIngredient);

var Ingredient = (function () {
    function Ingredient(params, nav, viewCtrl) {
        this.params = params;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.cuisine = { 'digest': [{ label: "amar", unit: 120, total: 120 }], image: true };
        this.title = this.params.get('userId');
        // this.peopleServiceProvider.loadin(this.title)
        //     .then(data => {
        //       loading.dismiss();
        //       console.log(data['hits'])
        //       var resp = data['hits'].sort(function(a,b) { return parseFloat(a.recipe.yield) - parseFloat(b.recipe.yield) } )
        //       this.cuisine = resp[resp.length - 1].recipe;
        //     });
    }
    Ingredient.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    Ingredient.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return Ingredient;
}());
Ingredient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list-ingredient-modal',template:/*ion-inline-start:"/Users/amar/repo/ionic-basic/src/pages/list_ingredient/ingredient.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!--  -->\n<ion-content >\n  <ion-list>\n    <ion-item *ngFor="let item of cuisine.digest">\n          {{item.title}}\n      <ion-label color="primary">{{item.label}}</ion-label>\n      <ion-input placeholder="Text Input" (ionChange)="updateIngredient()" value="{{item.label}}"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-row center>  \n   <ion-col text-center>   \n    <button ion-button icon-only (click)="goToHome()">\n    <ion-icon name="home"></ion-icon>\n    </button>\n   </ion-col> \n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/amar/repo/ionic-basic/src/pages/list_ingredient/ingredient.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], Ingredient);

//# sourceMappingURL=list_ingredient.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map