"use strict";
(self["webpackChunkangular_io_example"] = self["webpackChunkangular_io_example"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 4097);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__.TopBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOzs7O0NBSUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 4097);
/* harmony import */ var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-detail/book-detail.component */ 7049);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives */ 2897);
/* harmony import */ var _resolver_book_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolver/book.resolver */ 4654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _resolver_book_resolver__WEBPACK_IMPORTED_MODULE_4__.BookResolver
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserTransferStateModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot([
                { path: ':bookId', component: _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_2__.BookDetailComponent, resolve: { book: _resolver_book_resolver__WEBPACK_IMPORTED_MODULE_4__.BookResolver } },
            ], {
                initialNavigation: 'enabledBlocking'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__.TopBarComponent,
        _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_2__.BookDetailComponent,
        _directives__WEBPACK_IMPORTED_MODULE_3__.AppShellRenderDirective,
        _directives__WEBPACK_IMPORTED_MODULE_3__.AppShellNoRenderDirective], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserTransferStateModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 7049:
/*!******************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookDetailComponent": () => (/* binding */ BookDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _directives_appShellNoRender_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/appShellNoRender.directive */ 1577);
/* harmony import */ var _directives_appShellRender_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/appShellRender.directive */ 7672);





function BookDetailComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This shows up in client mode only");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BookDetailComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This shows up in server mode only");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class BookDetailComponent {
    constructor(route, meta) {
        this.route = route;
        this.meta = meta;
        this.book = null;
        this.isbn = null;
    }
    ngOnInit() {
        const bookData = this.route.snapshot.data['book']; // api is already called in book.resolver, this is the api respopnse
        this.book = bookData['ISBN:' + this.route.snapshot.paramMap.get('bookId')];
        this.isbn = this.route.snapshot.paramMap.get('bookId');
        // these are search engine tags
        this.meta.addTag({ name: 'title', content: this.book.title });
        this.meta.addTag({ name: 'description', content: this.book.title });
        // these are social media open graph tags
        this.meta.addTag({ name: 'og:title', content: this.book.title });
        this.meta.addTag({ name: 'og:description', content: this.book.title });
        this.meta.addTag({ name: 'og:image', content: this.book.cover.small });
        this.meta.addTag({ name: 'og:image:alt', content: this.book.title });
        // ... there are many other tags, best is to look at what popular site uses
    }
    // This button is not interactable in server mode and only interactable in client mode
    clickedTestButton() {
        console.log('Clicked test button');
    }
}
BookDetailComponent.ɵfac = function BookDetailComponent_Factory(t) { return new (t || BookDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Meta)); };
BookDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BookDetailComponent, selectors: [["book-detail"]], decls: 25, vars: 6, consts: [[3, "src", "alt"], ["itemprop", "name"], ["itemprop", "author"], ["itemprop", "numberOfPages"], ["itemprop", "isbn"], [3, "click"], [4, "appShellNoRender"], [4, "appShellRender"]], template: function BookDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Book Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Author: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Number of Pages: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "ISBN: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "This button is only interactable in browser mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetailComponent_Template_button_click_21_listener() { return ctx.clickedTestButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Test Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, BookDetailComponent_p_23_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, BookDetailComponent_p_24_Template, 2, 0, "p", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.book.cover.medium, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.book == null ? null : ctx.book.authors[0] == null ? null : ctx.book.authors[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.book.number_of_pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isbn);
    } }, directives: [_directives_appShellNoRender_directive__WEBPACK_IMPORTED_MODULE_0__.AppShellNoRenderDirective, _directives_appShellRender_directive__WEBPACK_IMPORTED_MODULE_1__.AppShellRenderDirective], encapsulation: 2 });


/***/ }),

/***/ 1577:
/*!**********************************************************!*\
  !*** ./src/app/directives/appShellNoRender.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppShellNoRenderDirective": () => (/* binding */ AppShellNoRenderDirective)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class AppShellNoRenderDirective {
    constructor(viewContainer, templateRef, platformId) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.platformId = platformId;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformServer)(this.platformId)) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}
AppShellNoRenderDirective.ɵfac = function AppShellNoRenderDirective_Factory(t) { return new (t || AppShellNoRenderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); };
AppShellNoRenderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AppShellNoRenderDirective, selectors: [["", "appShellNoRender", ""]] });


/***/ }),

/***/ 7672:
/*!********************************************************!*\
  !*** ./src/app/directives/appShellRender.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppShellRenderDirective": () => (/* binding */ AppShellRenderDirective)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class AppShellRenderDirective {
    constructor(viewContainer, templateRef, platformId) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.platformId = platformId;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformServer)(this.platformId)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }
}
AppShellRenderDirective.ɵfac = function AppShellRenderDirective_Factory(t) { return new (t || AppShellRenderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); };
AppShellRenderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AppShellRenderDirective, selectors: [["", "appShellRender", ""]] });


/***/ }),

/***/ 2897:
/*!*************************************!*\
  !*** ./src/app/directives/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppShellNoRenderDirective": () => (/* reexport safe */ _appShellNoRender_directive__WEBPACK_IMPORTED_MODULE_1__.AppShellNoRenderDirective),
/* harmony export */   "AppShellRenderDirective": () => (/* reexport safe */ _appShellRender_directive__WEBPACK_IMPORTED_MODULE_0__.AppShellRenderDirective)
/* harmony export */ });
/* harmony import */ var _appShellRender_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appShellRender.directive */ 7672);
/* harmony import */ var _appShellNoRender_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appShellNoRender.directive */ 1577);




/***/ }),

/***/ 4654:
/*!*******************************************!*\
  !*** ./src/app/resolver/book.resolver.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookResolver": () => (/* binding */ BookResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);







class BookResolver {
    constructor(http, transferState, platformId) {
        this.http = http;
        this.transferState = transferState;
        this.platformId = platformId;
    }
    resolve(route) {
        const bookId = route.params['bookId'];
        const BOOK_KEY = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.makeStateKey)('book-' + bookId);
        console.log(BOOK_KEY);
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
            console.log('server load book');
            return this.getBook(BOOK_KEY, bookId);
        }
        else {
            if (this.transferState.hasKey(BOOK_KEY)) {
                console.log('client get book');
                const book = this.transferState.get(BOOK_KEY, null);
                this.transferState.remove(BOOK_KEY);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(book);
            }
            else {
                console.log('client load book');
                return this.getBook(BOOK_KEY, bookId);
            }
        }
    }
    getBook(key, isbn) {
        if (!isbn) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)();
        }
        return this.http.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + isbn + '&jscmd=data&format=json')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)()), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(book => {
            this.transferState.set(key, book);
        }));
    }
}
BookResolver.ɵfac = function BookResolver_Factory(t) { return new (t || BookResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.TransferState), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID)); };
BookResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: BookResolver, factory: BookResolver.ɵfac });


/***/ }),

/***/ 4097:
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBarComponent": () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);




const _c0 = function () { return ["/"]; };
class TopBarComponent {
    constructor(platformId) {
        this.platformId = platformId;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
            this.pageState = 'Client Mode';
        }
        else {
            this.pageState = 'SSR Mode';
        }
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); };
TopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 5, vars: 3, consts: [[3, "routerLink"], [1, "button", "fancy-button"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SSR Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.pageState);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0NBSUMiLCJmaWxlIjoidG9wLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/ 


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/ 


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map