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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var journey_service_1 = require("../journey.service");
var JourneyListComponent = (function () {
    function JourneyListComponent(journeyService, route, titleService) {
        this.journeyService = journeyService;
        this.route = route;
        this.titleService = titleService;
    }
    JourneyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to route params
        this.sub = this.route.params.subscribe(function (params) {
            var origin = params['origin'];
            var destination = params['destination'];
            console.log('Params are as follows: ' + params);
            _this.journeys = _this.journeyService.findJourneysByOriginAndDestination(origin, destination);
            _this.origin = origin;
            _this.destination = destination;
            _this.titleService.setTitle('How to get from ' + _this.origin + " to " + _this.destination);
        });
    };
    JourneyListComponent.prototype.ngOnDestroy = function () {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    };
    JourneyListComponent.prototype.upVote = function (journey) {
        this.journeyService.upVote(journey._id);
        journey.upVotes++;
        this.hasVoted = true;
    };
    JourneyListComponent.prototype.downVote = function (journey) {
        this.journeyService.downVote(journey._id);
        journey.downVotes++;
        this.hasVoted = true;
    };
    return JourneyListComponent;
}());
JourneyListComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/Journeys/journey-list.component.html"
    })
    // Component class
    ,
    __metadata("design:paramtypes", [journey_service_1.JourneyService, router_1.ActivatedRoute, platform_browser_1.Title])
], JourneyListComponent);
exports.JourneyListComponent = JourneyListComponent;
//# sourceMappingURL=journey-list.component.js.map