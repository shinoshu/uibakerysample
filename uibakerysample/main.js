(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout withScroll>\n  <nb-layout-header *ngIf=\"(layout$ | async)?.header\" [fixed]=\"(layout$ | async)?.headerFixed\">\n    <app-sidebar-toggle *ngIf=\"(layout$ | async)?.sidebar\"></app-sidebar-toggle>\n    <app-header></app-header>\n  </nb-layout-header>\n  <nb-sidebar *ngIf=\"(layout$ | async)?.sidebar\" [fixed]=\"(layout$ | async)?.sidebarFixed\">\n    <app-sidebar></app-sidebar>\n  </nb-sidebar>\n  <nb-layout-column [style.padding]=\"padding$ | async\">\n    <router-outlet></router-outlet>\n  </nb-layout-column>\n</nb-layout>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slot\">\n  <div class=\"space space-component vcenter hleft col-md-12 background-transparent\">\n    <input nbInput placeholder=\"Search\" fieldSize=\"medium\" type=\"text\" shape=\"rectangle\">\n    <img class=\"image right\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB2NOYEVAvkEen65Agj2fFeGV88-r_hJm3mL4nPChzz_ih9NpV\">\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/sidebar.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/sidebar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-menu [items]=\"menuItems\"></nb-menu>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./messages/messages.module": [
		"./src/app/messages/messages.module.ts",
		"messages-messages-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: 'Messages', loadChildren: './messages/messages.module#MessagesModule' },
    { path: '', redirectTo: 'Messages', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-header {\n  flex: 1;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGlub3pha2kvc3JjL2dpdGh1Yi5jb20vc2hpbm9zaHUvdWliYWtlcnlzYW1wbGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhlYWRlciB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iLCJhcHAtaGVhZGVyIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.defaultLayout = {
            header: true,
            headerFixed: false,
            sidebar: false,
            sidebarFixed: false,
            paddings: {
                paddingTop: 16,
                paddingRight: 16,
                paddingBottom: 16,
                paddingLeft: 16
            }
        };
        this.layout$ = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            var route = _this.router.routerState.root;
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route.snapshot.data['layout'] || _this.defaultLayout;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        this.padding$ = this.layout$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (layout) {
            var p = layout.paddings;
            return p.paddingTop + "px " + p.paddingRight + "px " + p.paddingBottom + "px " + p.paddingLeft + "px";
        }));
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm5/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _layout_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/header.component */ "./src/app/layout/header.component.ts");
/* harmony import */ var _layout_sidebar_toggle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/sidebar-toggle.component */ "./src/app/layout/sidebar-toggle.component.ts");
/* harmony import */ var _layout_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/sidebar.component */ "./src/app/layout/sidebar.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme */ "./src/app/theme.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _layout_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _layout_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
                _layout_sidebar_toggle_component__WEBPACK_IMPORTED_MODULE_11__["SidebarToggleComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbThemeModule"].forRoot({ name: 'light' }, [_theme__WEBPACK_IMPORTED_MODULE_14__["LIGHT_THEME"]]),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSidebarModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbMenuModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDatepickerModule"].forRoot(),
                _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n  width: 40px;\n  border-radius: 100px;\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n\n.space-component {\n  height: auto;\n  min-height: 3rem;\n  background-image: url();\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGlub3pha2kvc3JjL2dpdGh1Yi5jb20vc2hpbm9zaHUvdWliYWtlcnlzYW1wbGUvc3JjL2FwcC9sYXlvdXQvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7S0FBQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmltYWdlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBvYmplY3QtZml0OiBmaWxsO1xufVxuXG4uc3BhY2UtY29tcG9uZW50IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAzcmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoKTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4iLCIuaW1hZ2Uge1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG59XG5cbi5zcGFjZS1jb21wb25lbnQge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDNyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgpO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/sidebar-toggle.component.scss":
/*!******************************************************!*\
  !*** ./src/app/layout/sidebar-toggle.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[nbButton]:focus {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGlub3pha2kvc3JjL2dpdGh1Yi5jb20vc2hpbm9zaHUvdWliYWtlcnlzYW1wbGUvc3JjL2FwcC9sYXlvdXQvc2lkZWJhci10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zaWRlYmFyLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2lkZWJhci10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbbmJCdXR0b25dOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbiIsIltuYkJ1dHRvbl06Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/sidebar-toggle.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/sidebar-toggle.component.ts ***!
  \****************************************************/
/*! exports provided: SidebarToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleComponent", function() { return SidebarToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");



var SidebarToggleComponent = /** @class */ (function () {
    function SidebarToggleComponent(sidebarService) {
        this.sidebarService = sidebarService;
    }
    SidebarToggleComponent.prototype.toggle = function () {
        this.sidebarService.toggle(false);
        return false;
    };
    SidebarToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar-toggle',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <button nbButton ghost (click)=\"toggle()\"><nb-icon icon=\"menu\"></nb-icon></button>\n  ",
            styles: [__webpack_require__(/*! ./sidebar-toggle.component.scss */ "./src/app/layout/sidebar-toggle.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"]])
    ], SidebarToggleComponent);
    return SidebarToggleComponent;
}());



/***/ }),

/***/ "./src/app/layout/sidebar.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/sidebar.component.ts ***!
  \*********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.menuItems = [
            {
                title: 'Messages',
                link: '/Messages',
                children: null
            }
        ];
    }
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/sidebar.component.html"),
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"]
            ],
            exports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/theme.ts":
/*!**************************!*\
  !*** ./src/app/theme.ts ***!
  \**************************/
/*! exports provided: LIGHT_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_THEME", function() { return LIGHT_THEME; });
var primary = '#3366FF';
var success = '#00D68F';
var info = '#0095FF';
var warning = '#FFAA00';
var danger = '#FF3D71';
var LIGHT_THEME = {
    name: 'light',
    base: 'default',
    variables: {
        primary: primary,
        success: success,
        info: info,
        warning: warning,
        danger: danger,
        charts: {
            primary: primary,
            success: success,
            info: info,
            warning: warning,
            danger: danger,
            bg: 'transparent',
            textColor: '#1A2138',
            axisLineColor: '#8F9BB3',
            splitLineColor: '#C5CEE0',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#E4E9F2',
            areaOpacity: '0.7',
        },
        bubbleMap: {
            primary: primary,
            success: success,
            info: info,
            warning: warning,
            danger: danger,
            titleColor: '#1A2138',
            areaColor: '#EDF1F7',
            areaHoverColor: '#E4E9F2',
            areaBorderColor: '#F7F9FC',
        },
    },
};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shinozaki/src/github.com/shinoshu/uibakerysample/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map