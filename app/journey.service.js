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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
// Decorator to tell Angular that this class can be injected as a service to another class
var JourneyService = (function () {
    // Class constructor with Jsonp injected for CORS, Http also
    function JourneyService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
        // Base URL for Petfinder API
        this.apiUrl = "http://localhost:8080/";
    }
    JourneyService.prototype.findJourneys = function () {
        var endPoint = "api/journeys";
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(this.apiUrl + endPoint, { search: params })
            .map(function (response) { return response.json(); });
    };
    JourneyService.prototype.findJourneysById = function (journeyId) {
        var endPoint = "api/journeys/" + journeyId;
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(this.apiUrl + endPoint, { search: params })
            .map(function (response) { return response.json(); });
    };
    JourneyService.prototype.findJourneysByOrigin = function (origin) {
        var endPoint = "api/journeys/from/" + origin;
        console.log(endPoint);
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(this.apiUrl + endPoint, { search: params })
            .map(function (response) { return response.json(); });
    };
    JourneyService.prototype.findJourneysByDestination = function (destination) {
        var endPoint = "api/journeys/to/" + destination;
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(this.apiUrl + endPoint, { search: params })
            .map(function (response) { return response.json(); });
    };
    JourneyService.prototype.findJourneysByOriginAndDestination = function (origin, destination) {
        var endPoint = "api/journeys/from/" + origin + "/to/" + destination;
        console.log(this.apiUrl + endPoint);
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(this.apiUrl + endPoint, { search: params })
            .map(function (response) { return response.json(); });
    };
    JourneyService.prototype.addJourney = function (data) {
        var url = this.apiUrl + 'api/journeys';
        console.log('Add Journey Data Body object: ' + data.body);
        var headers = new http_1.Headers();
        this.http.post(url, data, { headers: headers }).subscribe();
    };
    JourneyService.prototype.upVote = function (data) {
        var url = this.apiUrl + 'api/journeys/upvote/' + data;
        console.log('URL is: ' + url);
        var headers = new http_1.Headers();
        this.http.put(url, data, { headers: headers }).subscribe();
    };
    JourneyService.prototype.downVote = function (data) {
        var url = this.apiUrl + 'api/journeys/downvote/' + data;
        console.log('URL is: ' + url);
        var headers = new http_1.Headers();
        this.http.put(url, data, { headers: headers }).subscribe();
    };
    return JourneyService;
}());
JourneyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Jsonp, http_1.Http])
], JourneyService);
exports.JourneyService = JourneyService;
//# sourceMappingURL=journey.service.js.map