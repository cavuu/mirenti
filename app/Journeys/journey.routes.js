"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var journey_list_component_1 = require("./journey-list.component");
var journey_landing_component_1 = require("./journey-landing.component");
var journey_add_component_1 = require("./journey-add.component");
var journey_added_component_1 = require("./journey-added.component");
var journey_request_component_1 = require("./journey-request.component");
// Route Configuration
exports.journeyRoutes = [
    { path: 'journey/how-to-get-from/:origin/to/:destination', component: journey_list_component_1.JourneyListComponent },
    { path: 'journeys', component: journey_landing_component_1.JourneyLandingComponent },
    { path: 'journeys/add', component: journey_add_component_1.JourneyAddComponent },
    { path: 'journeys/added', component: journey_added_component_1.JourneyAddedComponent },
    { path: 'journeys/request', component: journey_request_component_1.JourneyRequestComponent }
];
//# sourceMappingURL=journey.routes.js.map