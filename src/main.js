import {generateEvents} from "./mock/generate-trip-events";
import TripDaysContainerView from "./view/trip-days-container";
import HeaderTripCostView from "./view/header-trip-cost";
import HeaderNavMenuView from "./view/header-nav-menu";
import HeaderFiltersView from "./view/header-filters";
import TripSortingView from "./view/trip-sorting";
import TripEventsContainerView from "./view/trip-events-container";
import TripInfoContainerView from "./view/trip-info-container";
import TripInfoRouteView from "./view/trip-info-route";
import RenderEventFormView from "./view/render-event-form";
import TripEventView from "./view/render-trip-event";
import {getRandomInteger, renderElement} from "./utils";

const RENDER_EVENTS_COUNT = 4;
const events = generateEvents(RENDER_EVENTS_COUNT);

// шапка

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsElement = document.querySelector(`.trip-events`);


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

const tripSortElement = tripEventsElement.querySelector(`.trip-sort`);

renderElement(tripSortElement, new TripEventsContainerView().getElement(), `insertAfter`);

const eventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

// форма
renderElement(eventsListElement, new RenderEventFormView(events[getRandomInteger(0, events.length)], events.counter).getElement(),`insertBefore`);

// Создание моков

events.forEach((event) => {
  renderElement(eventsListElement, new TripEventView(event).getElement(),);
});
