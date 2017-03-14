"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
var AppComponent = (function () {
    function AppComponent(titleService, router, activatedRoute) {
        this.titleService = titleService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                ga('send', 'pageview', event.urlAfterRedirects);
            }
        });
    }
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n      <div class=\"demo-layout-transparent mdl-layout mdl-js-layout\">\n      <header class=\"mdl-layout__header md1-layout__header--transparent\">\n        <div class=\"mdl-layout__header-row\">\n          <!-- Title -->\n          <span><a class=\"mdl-layout-title\" [routerLink]=\"['/']\">Crowd Routes</a></span>\n          <!-- Add spacer, to align navigation to the right -->\n          <div class=\"mdl-layout-spacer\"></div>\n          <!-- Navigation with router directives-->\n          <nav class=\"mdl-navigation\">\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/']\">Home</a>\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/places']\">Places</a>\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/journeys']\">Journeys</a>\n          </nav>\n        </div>\n      </header>\n      <main class=\"mdl-layout__content\">\n        <h1 class=\"header-text\">Welcome to Crowd Routes</h1>\n      </main>\n    </div>\n    <!-- Router Outlet -->\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  ",
    })
    // App Component class
    ,
    __metadata("design:paramtypes", [platform_browser_1.Title, router_1.Router, router_1.ActivatedRoute])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map