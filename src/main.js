import {generateWaypoints} from "./mock/generate-trip-events";
import {createTripInfoContainerTemplate} from "./view/trip-info-container";
import {createTripInfoRouteTemplate} from "./view/trip-info-route";
import {createTripCostTemplate} from "./view/header-trip-cost";
import {createNavMenuTemplate} from "./view/header-nav-menu";
import {createFilterTemplate} from "./view/event-tences-filter";
import TripSortingView from "./view/trip-sorting";
import {createEventForm} from "./view/event-form";
import {createWaypointTemplate} from "./view/trip-event";
import {renderTemplate, renderElement} from "./utils";
import {RenderPositions} from "./const";

const RENDER_EVENTS_COUNT = 20;
const events = generateWaypoints(RENDER_EVENTS_COUNT);
// шапка

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsElement = document.querySelector(`.trip-events`);

renderTemplate(tripMainElement, createTripInfoContainerTemplate(), `afterbegin`);

const tripInfoContainer = tripMainElement.querySelector(`.trip-info`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const [tripControlsFirstHeaderElement, tripControlsSecondHeaderElement] = tripControlsElement.querySelectorAll(`h2`);

renderTemplate(tripInfoContainer, createTripInfoRouteTemplate(), `beforeend`);
renderTemplate(tripInfoContainer, createTripCostTemplate(events), `beforeend`);
renderTemplate(tripControlsFirstHeaderElement, createNavMenuTemplate(), `afterend`);
renderTemplate(tripControlsSecondHeaderElement, createFilterTemplate(), `afterend`);

// сортировка

renderElement(tripEventsElement, new TripSortingView().getElement(), RenderPositions.BEFOREEND);

// форма

renderTemplate(tripEventsElement, createEventForm(), `beforeend`);

const tripEventsContainerElement = document.querySelector(`.trip-events__list`);

events.forEach(() => {
  renderTemplate(tripEventsContainerElement, createWaypointTemplate(events), `beforeend`);
});

// листнеры
