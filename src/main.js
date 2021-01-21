import {generateEvents} from "./mock/generate-trip-events";
import HeaderTripCostView from "./view/header-trip-cost";
import HeaderNavMenuView from "./view/header-nav-menu";
import HeaderFiltersView from "./view/header-filters";
import TripSortingView from "./view/trip-sorting";
import TripEventsContainerView from "./view/trip-events-container";
import TripInfoContainerView from "./view/trip-info-container";
import TripInfoRouteView from "./view/trip-info-route";
import RenderEventFormView from "./view/render-event-form";
import TripEventView from "./view/render-trip-event";
import {renderElement} from "./utils";

const RENDER_EVENTS_COUNT = 4;
const events = generateEvents(RENDER_EVENTS_COUNT);

// Обработчики события смены формы на список и наоборот

export const addEventToList = (eventListElement, event) => {
  const tripEvent = new TripEventView(event);
  const eventSwitchButton = tripEvent.getElement().querySelector(`.event__rollup-btn`);
  const tripForm = new RenderEventFormView(event, event.counter);
  const eventEditForm = tripForm.getElement();

  const eventSwitchButtonHandler = () => {
    eventListElement.replaceChild(tripForm.getElement(), tripEvent.getElement());
  };

  const formSwitchSubmitHandler = (evt) => {
    evt.preventDefault();
    eventListElement.replaceChild(tripEvent.getElement(), tripForm.getElement());
  };

  eventSwitchButton.addEventListener(`click`, eventSwitchButtonHandler);
  eventEditForm.addEventListener(`submit`, formSwitchSubmitHandler);

  renderElement(eventListElement, tripEvent.getElement());
};

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

const tripSortElement = tripEventsElement.querySelector(`.trip-sort`);

renderElement(tripSortElement, new TripEventsContainerView().getElement(), `insertAfter`);

const eventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

// форма
// renderElement(eventsListElement, new RenderEventFormView(events[getRandomInteger(0, events.length)], events.counter).getElement(),`insertBefore`);

// Создание моков

events.forEach((event) => {
  addEventToList(eventsListElement, event);
// renderElement(eventsListElement, new TripEventView(event).getElement());
});
