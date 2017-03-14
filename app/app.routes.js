"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_routes_1 = require("./home/home.routes");
var place_routes_1 = require("./places/place.routes");
var journey_routes_1 = require("./journeys/journey.routes");
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
].concat(place_routes_1.placeRoutes, journey_routes_1.journeyRoutes, home_routes_1.homeRoutes);
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map