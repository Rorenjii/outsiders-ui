(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.bodyParent {\r\n    background-color: lightgreen;\r\n    height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bodyParent\">\r\n  <cf-nav>\r\n\r\n  </cf-nav>\r\n  <router-outlet>\r\n    \r\n  </router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cf_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cf-user/user.component */ "./src/app/cf-user/user.component.ts");
/* harmony import */ var _cf_character_character_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cf-character/character.component */ "./src/app/cf-character/character.component.ts");
/* harmony import */ var _cf_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cf-nav/nav.component */ "./src/app/cf-nav/nav.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _cf_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cf-home/home.component */ "./src/app/cf-home/home.component.ts");
/* harmony import */ var _cf_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cf-login/login.component */ "./src/app/cf-login/login.component.ts");
/* harmony import */ var _cf_user_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cf-user/user.service */ "./src/app/cf-user/user.service.ts");
/* harmony import */ var _cf_character_character_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cf-character/character.service */ "./src/app/cf-character/character.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', component: _cf_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'character', component: _cf_character_character_component__WEBPACK_IMPORTED_MODULE_7__["CharacterComponent"] },
    { path: 'user', component: _cf_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"] },
    { path: 'login', component: _cf_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _cf_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _cf_character_character_component__WEBPACK_IMPORTED_MODULE_7__["CharacterComponent"],
                _cf_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _cf_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _cf_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            providers: [
                _cf_user_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                _cf_character_character_service__WEBPACK_IMPORTED_MODULE_13__["CharacterService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cf-character/character.component.css":
/*!******************************************************!*\
  !*** ./src/app/cf-character/character.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.buttonOne {\r\n    padding: 5px;\r\n    margin: 5px;\r\n    background-color: blue;\r\n    color: white;\r\n}\r\n\r\ndiv.container {\r\n    padding: 5px;\r\n    height: 100%;\r\n    background-color: lightblue;\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/cf-character/character.component.html":
/*!*******************************************************!*\
  !*** ./src/app/cf-character/character.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  Character Component\r\n\r\n  <div>\r\n    {{ summary }}\r\n  </div>\r\n\r\n  <div>\r\n    <div *ngFor=\"let c of characters\">\r\n      <button (click)=\"loadCharacter(c.id)\">\r\n      {{ c.characterDescription.name }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    {{ character }}\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/cf-character/character.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/cf-character/character.component.ts ***!
  \*****************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _character_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character.service */ "./src/app/cf-character/character.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterComponent = /** @class */ (function () {
    function CharacterComponent(_characterService) {
        this._characterService = _characterService;
        this.title = 'PCM - Character';
        this.names = [];
        this.ids = [];
    }
    CharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._characterService.characters$.subscribe(function (x) {
            if (x !== null) {
                if (x.length !== 0) {
                    _this.characters = x;
                    _this.summary = "Fetched all characters";
                }
                else {
                    _this.summary = "No characters found, try logging in";
                }
            }
            else {
                _this.character = null;
                _this.characters = null;
            }
        });
    };
    CharacterComponent.prototype.loadCharacter = function (id) {
        var _this = this;
        this._characterService.getCharacter(id);
        this._characterService.character$.subscribe(function (x) {
            if (x !== null) {
                _this.character = x;
            }
        });
    };
    CharacterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cf-character',
            template: __webpack_require__(/*! ./character.component.html */ "./src/app/cf-character/character.component.html"),
            styles: [__webpack_require__(/*! ./character.component.css */ "./src/app/cf-character/character.component.css")]
        }),
        __metadata("design:paramtypes", [_character_service__WEBPACK_IMPORTED_MODULE_1__["CharacterService"]])
    ], CharacterComponent);
    return CharacterComponent;
}());



/***/ }),

/***/ "./src/app/cf-character/character.service.ts":
/*!***************************************************!*\
  !*** ./src/app/cf-character/character.service.ts ***!
  \***************************************************/
/*! exports provided: CharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterService", function() { return CharacterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/const */ "./src/app/shared/const.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CharacterService = /** @class */ (function () {
    function CharacterService(_http) {
        this._http = _http;
        this.character$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.characters$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    CharacterService.prototype.setCharacter = function (character) {
        this.character$.next(character);
        this.character = character;
    };
    CharacterService.prototype.setCharacters = function (characters) {
        this.characters$.next(characters);
        this.characters = characters;
    };
    CharacterService.prototype.getCharacter = function (id) {
        var _this = this;
        var url = _shared_const__WEBPACK_IMPORTED_MODULE_2__["BACKEND_URL"] + 'api/character/' + id;
        this._http.get(url).subscribe(function (x) {
            _this.setCharacter(x["characters"][0]);
        });
    };
    CharacterService.prototype.getAllCharactersForUser = function (userId) {
        var _this = this;
        var url = _shared_const__WEBPACK_IMPORTED_MODULE_2__["BACKEND_URL"] + 'api/character/user/' + userId;
        this._http.get(url).subscribe(function (x) {
            if (x !== null) {
                _this.setCharacters(x["characters"]);
            }
        });
    };
    CharacterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CharacterService);
    return CharacterService;
}());



/***/ }),

/***/ "./src/app/cf-home/home.component.css":
/*!********************************************!*\
  !*** ./src/app/cf-home/home.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cf-home/home.component.html":
/*!*********************************************!*\
  !*** ./src/app/cf-home/home.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"heading\">\r\n    Welcome to Crystal Fantasy - PATHFINDER Character Manager!\r\n  </h1>\r\n</div>"

/***/ }),

/***/ "./src/app/cf-home/home.component.ts":
/*!*******************************************!*\
  !*** ./src/app/cf-home/home.component.ts ***!
  \*******************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'PCM';
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cf-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/cf-home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/cf-home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/cf-login/login.component.css":
/*!**********************************************!*\
  !*** ./src/app/cf-login/login.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.buttonOne {\r\n    padding: 5px;\r\n    margin: 5px;\r\n    background-color: rgb(212, 250, 203);\r\n    color: black;\r\n    border-color: black;\r\n    border-radius: 4px;\r\n}\r\n\r\ndiv.container {\r\n    padding: 5px;\r\n    height: 100%;\r\n    background-color: royalblue;\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/cf-login/login.component.html":
/*!***********************************************!*\
  !*** ./src/app/cf-login/login.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div *ngIf=\"loggedIn\">\r\n        <div>\r\n            Welcome, {{ userName }}! \r\n        </div>\r\n        <button (click)=\"logOut()\">\r\n            Log Out\r\n        </button>\r\n    </div>\r\n    <div *ngIf=\"!loggedIn\">\r\n        <div>\r\n            <label>Email Address</label>\r\n            <input [(ngModel)] = \"email\">\r\n        <br>\r\n            <label>Password</label>\r\n            <input [(ngModel)] = \"password\" type=password>\r\n        </div>\r\n        <button (click)=\"logIn()\">\r\n            Log In\r\n        </button>\r\n        <button (click)=\"signUp()\">\r\n                Sign Up\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/cf-login/login.component.ts":
/*!*********************************************!*\
  !*** ./src/app/cf-login/login.component.ts ***!
  \*********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cf_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cf-user/user.service */ "./src/app/cf-user/user.service.ts");
/* harmony import */ var _cf_character_character_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cf-character/character.service */ "./src/app/cf-character/character.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_http, _userService, _characterService) {
        this._http = _http;
        this._userService = _userService;
        this._characterService = _characterService;
        this.email = '';
        this.password = '';
        this.loggedIn = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.user$.subscribe(function (x) {
            if (x !== null) {
                _this.loggedIn = true;
                _this.userName = x.name || x.email;
                console.log(x);
                _this._characterService.getAllCharactersForUser(x.id);
            }
            else {
                _this.loggedIn = false;
                _this.userName = undefined;
                _this._characterService.setCharacter(null);
                _this._characterService.setCharacters(null);
            }
        });
    };
    LoginComponent.prototype.logIn = function () {
        var credentials = {
            'email': this.email,
            'password': this.password
        };
        this._userService.logIn(credentials);
    };
    LoginComponent.prototype.logOut = function () {
        this._userService.logOut();
        this.email = '';
        this.password = '';
        //clear input fields
    };
    LoginComponent.prototype.signUp = function () {
        var req = {
            'email': this.email,
            'password': this.password
        };
        this._userService.register(req);
        this.email = '';
        this.password = '';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cf-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/cf-login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/cf-login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _cf_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _cf_character_character_service__WEBPACK_IMPORTED_MODULE_3__["CharacterService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/cf-nav/nav.component.css":
/*!******************************************!*\
  !*** ./src/app/cf-nav/nav.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.buttonOne {\r\n    padding: 5px;\r\n    margin: 5px;\r\n    background-color: rgb(212, 250, 203);\r\n    color: black;\r\n    border-color: black;\r\n    border-radius: 4px;\r\n}\r\n\r\ndiv.container {\r\n    padding: 10px;\r\n    height: 5%;\r\n    background-color: darkolivegreen;\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/cf-nav/nav.component.html":
/*!*******************************************!*\
  !*** ./src/app/cf-nav/nav.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <button class=\"buttonOne\" routerLink=\"/\">\r\n        Home\r\n    </button>\r\n\r\n    <button class=\"buttonOne\" routerLink=\"/character\" >\r\n        Character\r\n    </button>\r\n\r\n    <button class=\"buttonOne\" routerLink=\"/user\">\r\n        User\r\n    </button>\r\n\r\n    <cf-login>\r\n        \r\n    </cf-login>\r\n</div>"

/***/ }),

/***/ "./src/app/cf-nav/nav.component.ts":
/*!*****************************************!*\
  !*** ./src/app/cf-nav/nav.component.ts ***!
  \*****************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cf_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cf-user/user.service */ "./src/app/cf-user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(_http, _userService) {
        this._http = _http;
        this._userService = _userService;
    }
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cf-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/cf-nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/cf-nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _cf_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/cf-user/user.component.css":
/*!********************************************!*\
  !*** ./src/app/cf-user/user.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.buttonOne {\r\n    padding: 5px;\r\n    margin: 5px;\r\n    background-color: blue;\r\n    color: white;\r\n}\r\n\r\ndiv.container {\r\n    padding: 5px;\r\n    height: 100%;\r\n    background-color: lightblue;\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/cf-user/user.component.html":
/*!*********************************************!*\
  !*** ./src/app/cf-user/user.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  User Component\r\n  <div>\r\n    {{ user }}\r\n  </div>\r\n  <div>\r\n    {{ summary }}\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/cf-user/user.component.ts":
/*!*******************************************!*\
  !*** ./src/app/cf-user/user.component.ts ***!
  \*******************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/cf-user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
        this.title = 'Crystal Fantasy';
        this.user = null;
        this.summary = null;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.user$.subscribe(function (x) {
            if (x !== null) {
                _this.user = x;
                _this.summary = _this.user.name + " is currently logged in.";
            }
            else {
                _this.summary = "Not logged in...";
            }
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cf-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/cf-user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/cf-user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/cf-user/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/cf-user/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/const */ "./src/app/shared/const.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    UserService.prototype.setUser = function (user) {
        this.user$.next(user);
        this.user = user;
    };
    UserService.prototype.getUser = function (id) {
        var _this = this;
        var url = _shared_const__WEBPACK_IMPORTED_MODULE_2__["BACKEND_URL"] + 'api/user/' + id;
        this._http.get(url).subscribe(function (x) {
            _this.setUser(x);
        });
    };
    UserService.prototype.logIn = function (credentials) {
        var _this = this;
        var url = _shared_const__WEBPACK_IMPORTED_MODULE_2__["BACKEND_URL"] + 'api/auth/login';
        this._http.post(url, credentials).subscribe(function (x) {
            var summary = x["summary"];
            if (summary === "Password did not match!" || summary === "User not found by that Email") {
                _this.error = "username or password not correct";
            }
            else {
                _this.getUser(summary);
            }
        }, function (y) {
            console.log(y);
        });
    };
    UserService.prototype.logOut = function () {
        this.setUser(null);
    };
    UserService.prototype.register = function (req) {
        var _this = this;
        var url = _shared_const__WEBPACK_IMPORTED_MODULE_2__["BACKEND_URL"] + 'api/register/';
        this._http.post(url, req).subscribe(function (x) {
        }, function (y) {
            _this.error = y;
        }, function () {
            _this.error = "Success!";
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/const.ts":
/*!*********************************!*\
  !*** ./src/app/shared/const.ts ***!
  \*********************************/
/*! exports provided: BACKEND_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKEND_URL", function() { return BACKEND_URL; });
var BACKEND_URL = 'http://66.242.90.163:8017/';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Logan\Desktop\outsiders\outsiders-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map