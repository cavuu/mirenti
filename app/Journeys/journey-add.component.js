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
var platform_browser_1 = require("@angular/platform-browser");
var journey_service_1 = require("../journey.service");
var place_service_1 = require("../place.service");
var JourneyAddComponent = (function () {
    function JourneyAddComponent(journeyService, placeService, router, titleService) {
        this.journeyService = journeyService;
        this.placeService = placeService;
        this.router = router;
        this.titleService = titleService;
    }
    JourneyAddComponent.prototype.submitForm = function (form) {
        this.journeyService.addJourney(form);
        var originPlace = { name: this.origin };
        this.placeService.addPlace(originPlace);
        var destinationPlace = { name: this.destination };
        this.placeService.addPlace(destinationPlace);
        this.router.navigate(['/journeys/added']);
    };
    ;
    JourneyAddComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Add a new journey');
    };
    JourneyAddComponent.prototype.ngOnDestroy = function () {
    };
    return JourneyAddComponent;
}());
JourneyAddComponent = __decorate([
    core_1.Component({
        template: "\n    <h2>Journeys</h2>\n    <p>This is where you can add a new journey.</p>\n    <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"submitForm(form.value)\">\n  <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"email\">Origin:</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"origin\" name=\"origin\" [(ngModel)]=\"origin\" placeholder=\"Enter origin\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"email\">Destination:</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"destination\" name=\"destination\" [(ngModel)]=\"destination\" placeholder=\"Enter destination\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"email\">Mode of transport:</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"mode\" name=\"mode\" ngModel placeholder=\"Enter mode of transport\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"email\">Price Paid:</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"price\" name=\"price\" ngModel placeholder=\"Enter price paid\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"email\">Currency:</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"currency\" name=\"currency\" ngModel placeholder=\"Enter currency used\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"email\">Journey Start Date:</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"journeyDate\" name=\"journeyDate\" ngModel placeholder=\"Enter journey start date\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"email\">Journey Duration (hours):</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"journeyDuration\" name=\"journeyDuration\" ngModel placeholder=\"Enter journey duration\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"email\">Comments:</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"comments\" name=\"comments\" ngModel placeholder=\"Enter comments\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-info\">Submit</button>\n    </div>\n  </div>\n</form>\n    "
    })
    // Component class
    ,
    __metadata("design:paramtypes", [journey_service_1.JourneyService, place_service_1.PlaceService, router_1.Router, platform_browser_1.Title])
], JourneyAddComponent);
exports.JourneyAddComponent = JourneyAddComponent;
//# sourceMappingURL=journey-add.component.js.map