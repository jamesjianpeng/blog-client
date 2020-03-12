(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-article-article-module"],{

/***/ "./src/app/@core/service/article.ts":
/*!******************************************!*\
  !*** ./src/app/@core/service/article.ts ***!
  \******************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ArticleService {
    constructor(http) {
        this.http = http;
    }
    getArticles(data) {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/api/v1/get/articles?page=1&pageSize=10&type=doing&keyword=&startDate=&endDate=`);
    }
    getArticle(id) {
        console.log(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/api/v1/get/article/${id}`);
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/api/v1/get/article/${id}`);
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/service/config.ts":
/*!*****************************************!*\
  !*** ./src/app/@core/service/config.ts ***!
  \*****************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ConfigService {
    constructor(http) {
        this.http = http;
    }
    getTags() {
        return this.http.get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/api/v1/get/config/tags`);
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/article/article-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/article/article-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ArticleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleRoutingModule", function() { return ArticleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_modules_article_pages_article_list_page_article_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/article/pages/article-list-page/article-list.component */ "./src/app/modules/article/pages/article-list-page/article-list.component.ts");
/* harmony import */ var src_app_modules_article_pages_article_detail_page_article_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/article/pages/article-detail-page/article-detail.component */ "./src/app/modules/article/pages/article-detail-page/article-detail.component.ts");






const routes = [
    {
        path: '',
        component: src_app_modules_article_pages_article_list_page_article_list_component__WEBPACK_IMPORTED_MODULE_2__["ArticleListComponent"]
    },
    {
        path: ':id',
        component: src_app_modules_article_pages_article_detail_page_article_detail_component__WEBPACK_IMPORTED_MODULE_3__["ArticleDetailComponent"]
    }
];
class ArticleRoutingModule {
}
ArticleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArticleRoutingModule });
ArticleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArticleRoutingModule_Factory(t) { return new (t || ArticleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArticleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/article/article.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/article/article.module.ts ***!
  \***************************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_core_service_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@core/service/article */ "./src/app/@core/service/article.ts");
/* harmony import */ var src_app_core_service_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@core/service/config */ "./src/app/@core/service/config.ts");
/* harmony import */ var _article_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article-routing.module */ "./src/app/modules/article/article-routing.module.ts");
/* harmony import */ var src_app_modules_article_pages_article_list_page_article_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/article/pages/article-list-page/article-list.component */ "./src/app/modules/article/pages/article-list-page/article-list.component.ts");
/* harmony import */ var src_app_modules_article_pages_article_detail_page_article_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/article/pages/article-detail-page/article-detail.component */ "./src/app/modules/article/pages/article-detail-page/article-detail.component.ts");








class ArticleModule {
}
ArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArticleModule });
ArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArticleModule_Factory(t) { return new (t || ArticleModule)(); }, providers: [
        src_app_core_service_article__WEBPACK_IMPORTED_MODULE_2__["ArticleService"],
        src_app_core_service_config__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _article_routing_module__WEBPACK_IMPORTED_MODULE_4__["ArticleRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArticleModule, { declarations: [src_app_modules_article_pages_article_list_page_article_list_component__WEBPACK_IMPORTED_MODULE_5__["ArticleListComponent"],
        src_app_modules_article_pages_article_detail_page_article_detail_component__WEBPACK_IMPORTED_MODULE_6__["ArticleDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _article_routing_module__WEBPACK_IMPORTED_MODULE_4__["ArticleRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _article_routing_module__WEBPACK_IMPORTED_MODULE_4__["ArticleRoutingModule"]
                ],
                declarations: [
                    src_app_modules_article_pages_article_list_page_article_list_component__WEBPACK_IMPORTED_MODULE_5__["ArticleListComponent"],
                    src_app_modules_article_pages_article_detail_page_article_detail_component__WEBPACK_IMPORTED_MODULE_6__["ArticleDetailComponent"]
                ],
                providers: [
                    src_app_core_service_article__WEBPACK_IMPORTED_MODULE_2__["ArticleService"],
                    src_app_core_service_config__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/article/pages/article-detail-page/article-detail.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/article/pages/article-detail-page/article-detail.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ArticleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailComponent", function() { return ArticleDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_service_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@core/service/article */ "./src/app/@core/service/article.ts");
/* harmony import */ var src_app_core_service_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@core/service/config */ "./src/app/@core/service/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class ArticleDetailComponent {
    constructor(articleService, configService, activatedRoute) {
        this.articleService = articleService;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.title = 'blog-article-home';
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.articleService.getArticle(id).subscribe(data => {
            this.article = data.data;
        });
    }
}
ArticleDetailComponent.ɵfac = function ArticleDetailComponent_Factory(t) { return new (t || ArticleDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_article__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ArticleDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleDetailComponent, selectors: [["ng-component"]], decls: 5, vars: 5, template: function ArticleDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", ctx.article.title, " \u521B\u5EFA\u65F6\u95F4 ", ctx.article.createTime, " \u66F4\u65B0\u65F6\u95F4 ", ctx.article.updateTime, " \u5F53\u524D\u7248\u672C ", ctx.article.version, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.article.content, " ");
    } }, styles: [".title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZW5namlhbi9naXRodWIvYmxvZy1jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2FydGljbGUvcGFnZXMvYXJ0aWNsZS1kZXRhaWwtcGFnZS9hcnRpY2xlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hcnRpY2xlL3BhZ2VzL2FydGljbGUtZGV0YWlsLXBhZ2UvYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hcnRpY2xlL3BhZ2VzL2FydGljbGUtZGV0YWlsLXBhZ2UvYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjZWVlO1xufVxuIiwiLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogI2VlZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './article-detail.component.html',
                styleUrls: ['./article-detail.component.scss']
            }]
    }], function () { return [{ type: src_app_core_service_article__WEBPACK_IMPORTED_MODULE_1__["ArticleService"] }, { type: src_app_core_service_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/article/pages/article-list-page/article-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/article/pages/article-list-page/article-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_service_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@core/service/article */ "./src/app/@core/service/article.ts");
/* harmony import */ var src_app_core_service_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@core/service/config */ "./src/app/@core/service/config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function ArticleListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r2.text, " ");
} }
function ArticleListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u67E5\u770B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", article_r3.createTime, " ", article_r3.updateTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/article/" + article_r3._id);
} }
class ArticleListComponent {
    constructor(articleService, configService) {
        this.articleService = articleService;
        this.configService = configService;
        this.articles = [];
        this.tags = [];
        this.data = { title: '11', content: 'ok' };
    }
    ngOnInit() {
        this.articleService.getArticles({}).subscribe(({ data }) => {
            this.articles = data.data;
            console.log(data);
        });
        this.configService.getTags().subscribe(({ data }) => {
            this.tags = data;
        });
    }
}
ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) { return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_article__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"])); };
ArticleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleListComponent, selectors: [["ng-component"]], decls: 5, vars: 2, consts: [[1, "flex-h-flex-start-nowrap"], [1, "tag-box", "flex-shrink-0"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "content-box"], [4, "ngFor", "ngForOf"], [1, "tag"], ["routerLinkActive", "active", 1, "navbar-brand", 3, "routerLink"]], template: function ArticleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleListComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticleListComponent_div_4_Template, 7, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: [".flex-h-flex-start-nowrap[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  flex-wrap: nowrap;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #eee;\n}\n\n.tag[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.tag-box[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.content-box[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZW5namlhbi9naXRodWIvYmxvZy1jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2FydGljbGUvcGFnZXMvYXJ0aWNsZS1saXN0LXBhZ2UvYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FydGljbGUvcGFnZXMvYXJ0aWNsZS1saXN0LXBhZ2UvYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hcnRpY2xlL3BhZ2VzL2FydGljbGUtbGlzdC1wYWdlL2FydGljbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWgtZmxleC1zdGFydC1ub3dyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNlZWU7XG59XG5cbi50YWcge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRhZy1ib3gge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5jb250ZW50LWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweFxufVxuIiwiLmZsZXgtaC1mbGV4LXN0YXJ0LW5vd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjZWVlO1xufVxuXG4udGFnIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50YWctYm94IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uY29udGVudC1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './article-list.component.html',
                styleUrls: ['./article-list.component.scss']
            }]
    }], function () { return [{ type: src_app_core_service_article__WEBPACK_IMPORTED_MODULE_1__["ArticleService"] }, { type: src_app_core_service_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    api: 'http://www.pengjiandry.com:7080'
};


/***/ })

}]);
//# sourceMappingURL=src-app-modules-article-article-module-es2015.js.map