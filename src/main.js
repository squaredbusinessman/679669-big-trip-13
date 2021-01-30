import {generateEvents} from "./mock/generate-trip-events";
import HeaderTripCostView from "./view/cost";
import HeaderNavMenuView from "./view/navigation";
import HeaderFiltersView from "./view/filters";
import TripSortingView from "./view/event-sort";
import TripEventsContainerView from "./view/trip-events-container";
import TripInfoContainerView from "./view/trip-info-container";
import TripInfoRouteView from "./view/trip-route";
import RenderEventFormView from "./view/edit-form";
import TripEventView from "./view/trip-event";
import {renderAppWithoutEvents} from "./view/render-without-events";
import {render, replace} from "./utils/render";
import {KEY_CODE} from "./const";
import WithoutEvents from "./view/without-events";
import EventSort from "./view/event-sort";

const RENDER_EVENTS_COUNT = 5;
const events = generateEvents(RENDER_EVENTS_COUNT);


// шапка

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsSection = document.querySelector(`.trip-events`);


const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const [tripControlsFirstHeaderElement, tripControlsSecondHeaderElement] = tripControlsElement.querySelectorAll(`h2`);

render(tripMainElement, new TripInfoContainerView(), `prepend`);
const tripInfoContainer = tripMainElement.querySelector(`.trip-info`);

render(tripInfoContainer, new TripInfoRouteView(events));
render(tripInfoContainer, new HeaderTripCostView(events));


render(tripControlsFirstHeaderElement, new HeaderNavMenuView(), `insertAfter`);
render(tripControlsSecondHeaderElement, new HeaderFiltersView(), `insertAfter`);

// доска
