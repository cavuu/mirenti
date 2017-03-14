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
var JourneyRequestComponent = (function () {
    function JourneyRequestComponent(journeyService, route) {
        this.journeyService = journeyService;
        this.route = route;
    }
    JourneyRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to route params
        this.sub = this.route.params.subscribe(function (params) {
            var origin = params['origin'];
            var destination = params['destination'];
            console.log('Params are as follows: ' + params);
            _this.journeys = _this.journeyService.findJourneysByOriginAndDestination(origin, destination);
        });
    };
    JourneyRequestComponent.prototype.ngOnDestroy = function () {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    };
    return JourneyRequestComponent;
}());
JourneyRequestComponent = __decorate([
    core_1.Component({
        template: "\n    <h2>Journeys</h2>\n    <p>This is where you can add a new journey.</p>\n    <a class=\"btn btn-info\" role=\"button\" [routerLink]=\"['/journeys/add']\">Add Journey</a>\n    <a class=\"btn btn-info\" role=\"button\" [routerLink]=\"['/journeys/request']\">Request Journey</a>\n    "
    })
    // Component class
    ,
    __metadata("design:paramtypes", [journey_service_1.JourneyService, router_1.ActivatedRoute])
], JourneyRequestComponent);
exports.JourneyRequestComponent = JourneyRequestComponent;
//# sourceMappingURL=journey-request.component.js.map