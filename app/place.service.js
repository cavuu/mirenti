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
var PlaceService = (function () {
    // Class constructor with Jsonp injected for CORS, Http also
    function PlaceService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
        // Base URL for Petfinder API
        this.apiUrl = "http://localhost:8080/";
    }
    PlaceService.prototype.addPlace = function (data) {
        var url = this.apiUrl + 'api/places';
        var headers = new http_1.Headers();
        this.http.post(url, data, { headers: headers }).subscribe();
    };
    PlaceService.prototype.findPlaces = function () {
        var endPoint = "api/places";
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(this.apiUrl + endPoint, { search: params })
            .map(function (response) { return response.json(); });
    };
    PlaceService.prototype.findPlaceById = function (placeId) {
        var endPoint = "api/places/" + placeId;
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(this.apiUrl + endPoint, { search: params })
            .map(function (response) { return response.json(); });
    };
    PlaceService.prototype.findPlaceByName = function (placeName) {
        var endPoint = "api/places/specific/" + placeName;
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(this.apiUrl + endPoint, { search: params })
            .map(function (response) { return response.json(); });
    };
    return PlaceService;
}());
PlaceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Jsonp, http_1.Http])
], PlaceService);
exports.PlaceService = PlaceService;
//# sourceMappingURL=place.service.js.map