webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody {\n   margin:0;\n   padding:0;\n   height:100%;\n}\n\n#container {\n   min-height:100%;\n   position: relative;\n}\n\n#main {\n  height: 100%;\n  min-height:100%;\n  overflow: auto;\n  height: auto !important;\n  padding-bottom: 5rem;\n}\n\nh1 {\n  font-size: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div style=\"text-align:center\" id=\"container\">\n  <div id=\"main\">\n    <router-outlet></router-outlet>\n    <div id=\"clear\"></div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'My app';
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favorites_favorites_component__ = __webpack_require__("../../../../../src/app/pages/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about_component__ = __webpack_require__("../../../../../src/app/pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { NewsStorageService } from './services/newsStorage.service';
const appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'favorites', component: __WEBPACK_IMPORTED_MODULE_7__pages_favorites_favorites_component__["a" /* FavoritesComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about_component__["a" /* AboutComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_favorites_favorites_component__["a" /* FavoritesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_article_service__["a" /* ArticleService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  position: fixed;\n  padding: 1rem;\n  margin-top: 5rem;\n  text-align: center;\n  background: #CCC;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>Created by Justin Weber for Project and Portfolio V</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background: #327cf2;\n}\n\n.navbar-brand,\n.navbar-nav>li>a {\n  color: #FFF;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Weber News</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=\"/home\" routerLinkActive=\"active\">News Feeds</a></li>\n        <li><a routerLink=\"/favorites\" routerLinkActive=\"active\">Favorites</a></li>\n        <li><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2, p {\n  text-align: left;\n}\n\nh2 {\n  margin-top: 5rem;\n}\n\np {\n  text-indent: 5rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>About</h1>\n  <h2>Weber News</h2>\n  <p>\n    Use Weber News to keep up to date with current news from many of your favorite news sources, as well as a few news sources that may be new to you. Just select a news source from the dropdown at the top of the News Feeds page to view the top articles of the day from that particular source. If you want a larger view of an article just select larger view at the bottom of each article. There you will see a few more details about the article. From here you can also click on the article url to go straight to the source to read the entire article. You may also click the favorites button to have the article saved to your favorites page for future viewing instead of having to search for it again later. Here at Weber News we try to make it as easy as possible for you to stay up to date on all current events. Thank you for chosing us as you go to news source.\n  </p>\n  <p>\n    This project was created for Project and Portfolio V class my Web Design and Development. The project was created using Angular 4. It contains no backend at this moment but will use local storage to store the favorite articles to be viewed on the Favorites page.\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/pages/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/favorites/favorites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh1 {\n  text-align: center;\n  font-size: 35px;\n}\n\n#articlesContainer {\n  width: 100%;\n  text-align: center;\n  margin: 5rem auto;\n}\n\n.cardContainer {\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width:100%;\n}\n\n.cardContainer li {\n  list-style: none;\n  width:100%;\n  margin: 1rem;\n  cursor: pointer;\n}\n\n.cardContainer li:hover {\n}\n\n@media only screen and (min-width: 630px) {\n  .cardContainer li {\n  \twidth: calc(100%/2.5);\n  }\n}\n\n@media only screen and (min-width: 975px) {\n  .cardContainer li {\n  \twidth: calc(100%/3.5);\n  }\n}\n\n@media only screen and (min-width: 1267px) {\n  .cardContainer li {\n  \twidth: calc(100%/4.5);\n  }\n}\n\n.articleInfo {\n  position: relative;\n  border: 1px solid #e6e6e6;\n}\n\n.cardContainer li h3 {\n  background: #327cf2;\n  color: #FFF;\n  padding: 1rem 0;\n  margin-top: 0;\n}\n\n.newsImages {\n  text-align: center;\n  width: 100%;\n  padding: 0;\n  margin: -1rem 0 2.5rem 0;\n}\n\n.cardContainer li p:first-of-type {\n  padding: 0 .5rem;\n  margin: 0 0 4rem 0;\n}\n\n.commentsContainer {\n  width: 100%;\n  text-align: center;\n  margin: 5rem auto;\n}\n\n.commentCard {\n  position: relative;\n  text-align: center;\n  border: 1px solid #e6e6e6;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width:100%;\n  margin-top: 3rem;\n}\n\n.commentTitle {\n  width: 100%;\n}\n\n#favoritesModalBtn {\n  background: #CCC;\n  color: #FFF;\n  cursor: pointer;\n  position: absolute;\n  padding: 0.5rem 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.40);\n  overflow: hidden;\n  transition: .5s ease;\n}\n\n.articleInfo:hover .overlay {\n  cursor: pointer;\n  height: 100%;\n}\n\n.commentCard:hover .overlay {\n  cursor: pointer;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>My Favorites</h1>\n\n<div id=\"articlesContainer\" class=\"container\">\n  <ul class=\"cardContainer card-group row\">\n    <li class=\"articleCards\" *ngFor=\"let article of savedArticles; let i = index\">\n      <div class=\"articleInfo\">\n        <h3 class=\"articleTitle\">{{article.title}}</h3>\n        <div><img class=\"newsImages\" src=\"{{article.urlToImage}}\"></div>\n        <p class=\"articleDescription\">{{article.description}}</p>\n        <div class=\"overlay\"></div>\n        <a id=\"favoritesModalBtn\" data-toggle=\"modal\" data-target=\"#favoritesModal\" [attr.data-id]=\"article\" (click)=\"ClickedArticle(article)\">Larger View</a>\n      </div>\n      <div class=\"commentCard\">\n        <h4 class=\"commentTitle\">Comment</h4>\n        <p class=\"articleComment\">{{article.description}}</p>\n        <div class=\"overlay\"></div>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"favoritesModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"favoritesModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"favoritesModalLabel\">Modal title</h4>\n      </div>\n      <div class=\"modal-body\">\n        <h3 class=\"articleTitle\">{{clickedArticle.title}}</h3>\n        <div><img class=\"newsImages\" src=\"{{clickedArticle.urlToImage}}\"></div>\n        <p class=\"articleDescription\">Description: {{clickedArticle.description}}</p>\n        <p class=\"articleAuthor\" *ngIf=\"clickedArticle.author; else elseBlock\">Author: {{clickedArticle.author}}</p>\n        <ng-template #elseBlock>Author: Unknown<br></ng-template>\n        <a href=\"{{clickedArticle.url}}\">Link to Article: {{clickedArticle.url}}</a>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" [attr.data-id]=\"clickedArticle\" (click)=\"DeleteArticle(clickedArticle)\" data-dismiss=\"modal\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/favorites/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NewsStorageService } from '../services/newsStorage.service';
let FavoritesComponent = class FavoritesComponent {
    constructor() {
        this.articleKeyId = [];
        this.savedArticles = [];
        this.dataKey = '';
        this.realData = '';
        this.clickedArticle = {};
        this.removeArticle = {};
    }
    ngOnInit() {
        if (localStorage.length > 0) {
            // We have items
            console.log(localStorage.length);
        }
        else {
            // No items
            console.log('We have none');
        }
        for (let i = 0; i < localStorage.length; i++) {
            this.dataKey = localStorage.key(i);
            this.articleKeyId.push(localStorage.key(i));
            this.realData = JSON.parse(localStorage.getItem(localStorage.key(i)));
            this.savedArticles.push(this.realData);
        }
        console.log(this.realData.title);
        console.log(this.savedArticles);
    }
    ClickedArticle(article) {
        this.clickedArticle = article;
    }
    DeleteArticle(clickedArticle) {
        this.removeArticle = clickedArticle;
        if (confirm('Are you sure you want to delete this article from your favorites?') === true) {
            console.log(this.removeArticle);
            localStorage.removeItem(this.removeArticle.key);
        }
    }
};
FavoritesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-favorites',
        template: __webpack_require__("../../../../../src/app/pages/favorites/favorites.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/favorites/favorites.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FavoritesComponent);

//# sourceMappingURL=favorites.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background: #327cf2;\n  color: #FFF;\n}\n\n.navbar-default .navbar-brand,\n.navbar-default .navbar-nav>li>a {\n  color: #FFF;\n}\n\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #FFF;\n}\n.navbar-default .navbar-nav>li>a .active {\n  color: #333;\n}\n\nh1 {\n  text-align: center;\n  font-size: 35px;\n}\n\n#articlesContainer {\n  width: 100%;\n  text-align: center;\n  margin: 5rem auto;\n}\n\n.cardContainer {\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width:100%;\n}\n\n.cardContainer li {\n  list-style: none;\n  position: relative;\n  border: 1px solid #e6e6e6;\n  width:100%;\n  margin: 1rem;\n}\n@media only screen and (min-width: 630px) {\n  .cardContainer li {\n  \twidth: calc(100%/2.5);\n  }\n}\n\n@media only screen and (min-width: 975px) {\n  .cardContainer li {\n  \twidth: calc(100%/3.5);\n  }\n}\n\n@media only screen and (min-width: 1267px) {\n  .cardContainer li {\n  \twidth: calc(100%/4.5);\n  }\n}\n\n.cardContainer li h3 {\n  background: #327cf2;\n  color: #FFF;\n  padding: 1rem 0;\n  margin-top: 0;\n}\n\n.newsImages {\n  text-align: center;\n  width: 100%;\n  padding: 0;\n  margin: -1rem 0 2.5rem 0;\n}\n\n.cardContainer li p:first-of-type {\n  padding: 0 .5rem;\n  margin: 0 0 4rem 0;\n}\n\n.overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.40);\n  overflow: hidden;\n  transition: .5s ease;\n}\n\n.articleCards {\n  position: relative;\n}\n\n.articleCards:hover .overlay {\n  cursor: pointer;\n  height: 100%;\n}\n\n#modalBtn {\n  background: #CCC;\n  color: #FFF;\n  cursor: pointer;\n  position: absolute;\n  padding: 0.5rem 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form class=\"navbar-form searchForm\">\n  <select [(ngModel)]=\"newsSource\" (ngModelChange)=\"sourceChanged($event)\" id=\"searchBar\" name=\"select1\" onmousedown=\"if(this.options.length>4){this.size=4;}\" onblur=\"this.size=0;\">\n    <option value=\"abc-news-au\">ABC News</option>\n    <option value=\"associated-press\">Associated Press</option>\n    <option value=\"bbc-news\">BBC News</option>\n    <option value=\"bbc-sport\">BBC Sport</option>\n    <option value=\"bild\">Bild</option>\n    <option value=\"bloomberg\">Bloomberg</option>\n    <option value=\"breitbart-news\">Breitbart News</option>\n    <option value=\"business-insider\">Business Insider</option>\n    <option value=\"buzzfeed\">Buzzfeed</option>\n    <option value=\"cnbc\">CNBC</option>\n    <option value=\"cnn\">CNN</option>\n    <option value=\"daily-mail\">Daily Mail</option>\n    <option value=\"engadget\">Engadget</option>\n    <option value=\"entertainment-weekly\">Entertainment Weekly</option>\n    <option value=\"espn\">ESPN</option>\n    <option value=\"espn-cric-info\">ESPN Cric</option>\n    <option value=\"financial-times\">Financial Times</option>\n    <option value=\"focus\">Focus</option>\n    <option value=\"fortune\">Fortune</option>\n    <option value=\"four-four-two\">FourFourTwo</option>\n    <option value=\"fox-sports\">Fox Sports</option>\n    <option value=\"google-news\">Google News</option>\n    <option value=\"hacker-news\">Hacker News</option>\n    <option value=\"ign\">IGN</option>\n    <option value=\"independent\">Independent</option>\n    <option value=\"mashable\">Mashable</option>\n    <option value=\"metro\">Metro</option>\n    <option value=\"mtv-news\">MTV News</option>\n    <option value=\"national-geographic\">National Geographic</option>\n    <option value=\"new-scientist\">New Scientist</option>\n    <option value=\"newsweek\">Newsweek</option>\n    <option value=\"new-york-magazine\">New York Magazine</option>\n    <option value=\"nfl-news\">NFL News</option>\n    <option value=\"reddit-r-all\">Reddit /r/all</option>\n    <option value=\"techcrunch\">TechCrunch</option>\n    <option value=\"techradar\">TechRadar</option>\n    <option value=\"the-new-york-times\">The New York Times</option>\n    <option value=\"the-wall-street-journal\">The Wall Street Journal</option>\n    <option value=\"the-washington-post\">The Washington Post</option>\n    <option value=\"time\">Time</option>\n    <option value=\"usa-today\">USA Today</option>\n    <option value=\"time\">Time</option>\n  </select>\n  <button type=\"button\" onclick=\"makeRequest()\">Search</button>\n</form>\n\n<!--{{ articles | json }}-->\n\n<div>\n  <h1>{{pageTitle}}</h1>\n\n  <div id=\"articlesContainer\" class=\"container\">\n    <ul class=\"cardContainer\">\n      <li class=\"articleCards\" *ngFor=\"let article of articlesList[0]; let i = index\">\n        <a class=\"hidden\">{{i + 1}}</a>\n        <h3 class=\"articleTitle\">{{article.title}}</h3>\n        <div><img class=\"newsImages\" src=\"{{article.urlToImage}}\"></div>\n        <p class=\"articleDescription\">{{article.description}}</p>\n        <div class=\"overlay\"></div>\n        <a id=\"modalBtn\" data-toggle=\"modal\" data-target=\"#myModal\" [attr.data-id]=\"article\" (click)=\"SelectArticle(article)\">Larger View</a>\n      </li>\n    </ul>\n  </div>\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n        </div>\n        <div class=\"modal-body\">\n          <h3 class=\"articleTitle\">{{selectedArticle.title}}</h3>\n          <div><img class=\"newsImages\" src=\"{{selectedArticle.urlToImage}}\"></div>\n          <p class=\"articleDescription\">Description: {{selectedArticle.description}}</p>\n          <p class=\"articleAuthor\" *ngIf=\"selectedArticle.author; else elseBlock\">Author: {{selectedArticle.author}}</p>\n          <ng-template #elseBlock>Author: Unknown<br></ng-template>\n          <a href=\"{{selectedArticle.url}}\">Link to Article: {{selectedArticle.url}}</a>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" [attr.data-id]=\"selectedArticle\" (click)=\"SaveArticle(selectedArticle)\" data-dismiss=\"modal\">Favorite</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NewsStorageService } from '../services/newsStorage.service';
const selectArticle = { name: 'test' };
let HomeComponent = class HomeComponent {
    constructor(articleService) {
        this.articleService = articleService;
        this.newsSource = '';
        this.articlesList = [];
        this.selectedArticle = {};
        this.savedArticle = {};
        this.pageTitle = 'News Feeds';
        this.articleStore = [];
    }
    ngOnInit() {
        const searchField = document.querySelector('#userSelections');
        console.log('Making api call');
        this.articleService.getArticles()
            .subscribe((data) => {
            this.articlesList = new Array;
            console.log('Data: ', data);
            this.articlesList.push(data.articles);
            console.log('Default News Api Data:', this.articlesList);
        });
    }
    sourceChanged(newSource) {
        console.log('New Source chosen: ', newSource);
        this.newsSource = newSource;
        this.articlesList.length = 0;
        this.articleService.getArticlesBYNewsSource(newSource)
            .subscribe((data) => {
            console.log('Data: ', data);
            this.articlesList.push(data.articles);
            console.log('New Api Data: ', this.articlesList);
        });
    }
    SelectArticle(article) {
        this.selectedArticle = article;
    }
    SaveArticle(selectedArticle) {
        // Want to add a popup to ask for comment and add it to my selectedArticle data
        this.savedArticle = selectedArticle;
        this.articleStore.push(this.savedArticle);
        let index = 0;
        for (let i = 0; i < this.articleStore.length; i++) {
            index++;
        }
        // const JsonreadyArticles = JSON.stringify(this.savedArticle);
        // this.newsStorageService.setSavedArticles('article', JsonreadyArticles);
        localStorage.setItem('articles' + index, JSON.stringify(this.savedArticle));
        // console.log(this.articleStore);
    }
};
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
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



const apiKey = '0d7756c1218343da88921149462e1cb7';
const baseUrl = 'https://newsapi.org/v1/articles';
const searchField = {
    value: 'bild'
};
let ArticleService = class ArticleService {
    constructor(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
    }
    getArticles() {
        const articlesUrl = `${baseUrl}?sortBy=top&source=abc-news-au&apiKey=${apiKey}`;
        console.log('Calling api: ', articlesUrl);
        return this.http.get(articlesUrl)
            .map((res) => res.json());
    }
    getArticlesBYNewsSource(newsSource) {
        const articlesUrl = `${baseUrl}?sortBy=top&source=${newsSource}&apiKey=${apiKey}`;
        console.log('Calling api: ', articlesUrl);
        return this.http.get(articlesUrl)
            .map((res) => res.json());
    }
};
ArticleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object])
], ArticleService);

var _a, _b;
//# sourceMappingURL=article.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map