import {generateWaypoints} from "./mock/route-waypoint-data-mock";
import {createTripInfoContainerTemplate} from "./view/trip-info-container";
import {createTripInfoRouteTemplate} from "./view/trip-info-route";
import {createTripCostTemplate} from "./view/trip-cost";
import {createNavMenuTemplate} from "./view/nav-menu";
import {createFilterTemplate} from "./view/event-tences-filter";
import {createTripSortingTemplate} from "./view/trip-sorting";
import {createEventForm} from "./view/event-form";
import {createWaypointTemplate} from "./view/waypoint";

const RENDER_EVENTS_COUNT = 20;

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsElement = document.querySelector(`.trip-events`);

renderTemplate(tripMainElement, createTripInfoContainerTemplate(), `afterbegin`);

const tripInfoContainer = tripMainElement.querySelector(`.trip-info`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const [tripControlsFirstHeaderElement, tripControlsSecondHeaderElement] = tripControlsElement.querySelectorAll(`h2`);

renderTemplate(tripInfoContainer, createTripInfoRouteTemplate(), `beforeend`);
renderTemplate(tripInfoContainer, createTripCostTemplate(), `beforeend`);
renderTemplate(tripControlsFirstHeaderElement, createNavMenuTemplate(), `afterend`);
renderTemplate(tripControlsSecondHeaderElement, createFilterTemplate(), `afterend`);
renderTemplate(tripEventsElement, createTripSortingTemplate(), `beforeend`);
renderTemplate(tripEventsElement, createEventForm(), `beforeend`);

const tripEventsContainerElement = document.querySelector(`.trip-events__list`);

const events = generateWaypoints(RENDER_EVENTS_COUNT);

for (let i = 0; i < events.length; i++) {
  renderTemplate(tripEventsContainerElement, createWaypointTemplate(events[i]), `beforeend`);
}


