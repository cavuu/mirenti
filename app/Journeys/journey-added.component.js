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
// Import component decorator
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var journey_service_1 = require("../journey.service");
var place_service_1 = require("../place.service");
var JourneyAddedComponent = (function () {
    function JourneyAddedComponent(journeyService, placeService, router) {
        this.journeyService = journeyService;
        this.placeService = placeService;
        this.router = router;
    }
    JourneyAddedComponent.prototype.ngOnInit = function () {
    };
    JourneyAddedComponent.prototype.ngOnDestroy = function () {
    };
    return JourneyAddedComponent;
}());
JourneyAddedComponent = __decorate([
    core_1.Component({
        template: "\n    <h2>Journey Added!</h2>\n    <p>Thank you for adding a journey.</p>\n    "
    })
    // Component class
    ,
    __metadata("design:paramtypes", [journey_service_1.JourneyService, place_service_1.PlaceService, router_1.Router])
], JourneyAddedComponent);
exports.JourneyAddedComponent = JourneyAddedComponent;
//# sourceMappingURL=journey-added.component.js.map