"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var place_list_component_1 = require("./place-list.component");
var place_details_component_1 = require("./place-details.component");
// Route Configuration
exports.placeRoutes = [
    { path: 'places', component: place_list_component_1.PlaceListComponent },
    { path: 'places/:id', component: place_details_component_1.PlaceDetailsComponent }
];
//# sourceMappingURL=place.routes.js.map