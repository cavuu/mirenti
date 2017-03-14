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
// Imports
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var place_service_1 = require("../place.service");
var journey_service_1 = require("../journey.service");
var router_1 = require("@angular/router");
var PlaceDetailsComponent = (function () {
    function PlaceDetailsComponent(placeService, journeyService, route, titleService) {
        this.placeService = placeService;
        this.journeyService = journeyService;
        this.route = route;
        this.titleService = titleService;
    }
    // Load data ones componet is ready
    PlaceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to route params
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            // Retrieve Pet with Id route param
            _this.placeService.findPlaceByName(id).subscribe(function (place) { return _this.place = place; });
            _this.journeysFromHere = _this.journeyService.findJourneysByOrigin(id);
            _this.journeysToHere = _this.journeyService.findJourneysByDestination(id);
            _this.titleService.setTitle('How to get to ' + id);
        });
    };
    PlaceDetailsComponent.prototype.ngOnDestroy = function () {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    };
    return PlaceDetailsComponent;
}());
PlaceDetailsComponent = __decorate([
    core_1.Component({
        template: "\n    <div *ngIf=\"place\">\n        <h2>{{place.name}}</h2>\n        <p><strong>Name: </strong>{{place.name}}</p>\n        <p><strong>Country: </strong>{{place.country}}</p>\n        <p>Journeys starting at {{place.name}} (make this a reusable component):\n        <ul class=\"demo-list-icon mdl-list\">\n          <li class=\"mdl-list__item\" *ngFor=\"let journey of journeysFromHere | async\">\n            <span class=\"mdl-list__item-primary-content\">\n                <i class=\"material-icons mdl-list__item-icon\">flags</i>\n                <a [routerLink]=\"['/journey', 'how-to-get-from', journey.origin, 'to', journey.destination]\">{{journey.origin}} to {{journey.destination}}</a>\n            </span>\n          </li>\n        </ul>\n        <p>Journeys ending at {{place.name}}:\n        <ul class=\"demo-list-icon mdl-list\">\n          <li class=\"mdl-list__item\" *ngFor=\"let journey of journeysToHere | async\">\n            <span class=\"mdl-list__item-primary-content\">\n                <i class=\"material-icons mdl-list__item-icon\">flags</i>\n                <a [routerLink]=\"['/journey', 'how-to-get-from', journey.origin, 'to', journey.destination]\">{{journey.origin}} to {{journey.destination}}</a>\n            </span>\n          </li>\n        </ul>\n    </div>\n    ",
    })
    // Component class implementing OnInit
    ,
    __metadata("design:paramtypes", [place_service_1.PlaceService, journey_service_1.JourneyService, router_1.ActivatedRoute, platform_browser_1.Title])
], PlaceDetailsComponent);
exports.PlaceDetailsComponent = PlaceDetailsComponent;
//# sourceMappingURL=place-details.component.js.map