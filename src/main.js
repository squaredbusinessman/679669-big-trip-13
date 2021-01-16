import {generateEvents} from "./mock/generate-trip-events";
import TripDaysContainerView from "./view/trip-days-container";
import HeaderContainerView from "./view/header-container";
import HeaderTripCostView from "./view/header-trip-cost";
import HeaderNavMenuView from "./view/header-nav-menu";
import HeaderFiltersView from "./view/header-filters";
import TripSortingView from "./view/trip-sorting";
import EventFormView from "./view/render-event-form";
import TripEventsContainerView from "./view/trip-events-container";
import TripInfoContainerView from "./view/trip-info-container";
import TripInfoRouteView from "./view/trip-info-route";
import TripEventView from "./view/render-trip-event";
import {renderElement} from "./utils";

const RENDER_EVENTS_COUNT = 5;
const events = generateEvents(RENDER_EVENTS_COUNT);

// шапка

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsElement = document.querySelector(`.trip-events`);


// const displayDaysContainer = tripEventsElement.querySelector(`.trip-days`);

renderElement(tripMainElement, new HeaderContainerView().getElement());


const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const [tripControlsFirstHeaderElement, tripControlsSecondHeaderElement] = tripControlsElement.querySelectorAll(`h2`);

renderElement(tripMainElement, new TripInfoContainerView().getElement(), `prepend`);
const tripInfoContainer = tripMainElement.querySelector(`.trip-info`);

renderElement(tripInfoContainer, new TripInfoRouteView(events).getElement());
renderElement(tripInfoContainer, new HeaderTripCostView(events).getElement());


renderElement(tripControlsFirstHeaderElement, new HeaderNavMenuView().getElement(), `insertAfter`);
renderElement(tripControlsSecondHeaderElement, new HeaderFiltersView().getElement(), `insertAfter`);

// сортировка

renderElement(tripEventsElement, new TripSortingView().getElement());
renderElement(tripEventsElement, new TripDaysContainerView().getElement());
renderElement(tripMainElement, new TripEventsContainerView().getElement(), `insertBefore`);

// форма
/* events.forEach((event) => {
  renderElement(tripEventsElement, new EventFormView(event, event.counter).getElement());
});*/

// Создание моков

events.forEach((event) => {
  renderElement(tripEventsElement, new TripEventView(event).getElement());
});
