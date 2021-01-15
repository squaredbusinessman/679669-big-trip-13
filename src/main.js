import {generateEvents} from "./mock/generate-trip-events";
import TripDaysContainerView from "./view/trip-days-container";
import HeaderContainerView from "./view/header-container";
import HeaderTripCostView from "./view/header-trip-cost";
import HeaderNavMenuView from "./view/header-nav-menu";
import HeaderFiltersView from "./view/header-filters";
import TripSortingView from "./view/trip-sorting";
import EventFormView from "./view/render-event-form";
import TripInfoContainerView from "./view/trip-info-container";
import TripInfoRouteView from "./view/trip-info-route";
import TripEventView from "./view/render-trip-event";
import {renderTemplate, renderElement} from "./utils";
import {RenderPositions} from "./const";

const RENDER_EVENTS_COUNT = 15;
const events = generateEvents(RENDER_EVENTS_COUNT);
// шапка

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsElement = document.querySelector(`.trip-events`);
// const displayDaysContainer = tripEventsElement.querySelector(`.trip-days`);

renderTemplate(tripMainElement, new HeaderContainerView().getElement(), RenderPositions.AFTERBEGIN);


const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const [tripControlsFirstHeaderElement, tripControlsSecondHeaderElement] = tripControlsElement.querySelectorAll(`h2`);
// eslint-disable-next-line no-debugger
debugger;
renderTemplate(tripMainElement, new TripInfoContainerView().getElement());
const tripInfoContainer = tripMainElement.querySelector(`.trip-info`);
renderTemplate(tripInfoContainer, new TripInfoRouteView(events).getElement());
renderTemplate(tripInfoContainer, new HeaderTripCostView(events).getElement());
renderTemplate(tripControlsFirstHeaderElement, new HeaderNavMenuView().getElement(), RenderPositions.AFTEREND);
renderTemplate(tripControlsSecondHeaderElement, new HeaderFiltersView().getElement(), RenderPositions.AFTEREND);

// сортировка

renderElement(tripEventsElement, new TripSortingView().getElement());
renderElement(tripEventsElement, new TripDaysContainerView().getElement());

// форма

renderTemplate(tripEventsElement, new EventFormView().getElement(), RenderPositions.BEFOREEND);

const tripEventsContainerElement = document.querySelector(`.trip-events__list`);

events.forEach(() => {
  renderTemplate(tripEventsContainerElement, new TripEventView(events).getElement(), RenderPositions.BEFOREEND);
});

// листнеры
