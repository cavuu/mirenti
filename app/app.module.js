"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var ad_component_1 = require("./ad.component");
var home_component_1 = require("./home/home.component");
var place_list_component_1 = require("./places/place-list.component");
var place_details_component_1 = require("./places/place-details.component");
var journey_list_component_1 = require("./journeys/journey-list.component");
var journey_landing_component_1 = require("./journeys/journey-landing.component");
var journey_add_component_1 = require("./journeys/journey-add.component");
var journey_added_component_1 = require("./journeys/journey-added.component");
var journey_request_component_1 = require("./journeys/journey-request.component");
var journey_service_1 = require("./journey.service");
var place_service_1 = require("./place.service");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routes_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            place_list_component_1.PlaceListComponent,
            place_details_component_1.PlaceDetailsComponent,
            journey_list_component_1.JourneyListComponent,
            journey_landing_component_1.JourneyLandingComponent,
            journey_add_component_1.JourneyAddComponent,
            journey_added_component_1.JourneyAddedComponent,
            journey_request_component_1.JourneyRequestComponent,
            ad_component_1.AdComponent
        ],
        providers: [
            platform_browser_1.Title,
            journey_service_1.JourneyService,
            place_service_1.PlaceService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map