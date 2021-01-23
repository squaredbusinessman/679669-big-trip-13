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
import {KEY_CODE} from "./const";

const RENDER_EVENTS_COUNT = 4;
const events = generateEvents(RENDER_EVENTS_COUNT);

// Обработчик события открытия/закрытия формы редактирования

export const addEventToList = (eventListElement, event) => {
  const tripEvent = new TripEventView(event);
  const eventEditButton = tripEvent.getElement().querySelector(`.event__rollup-btn`);
  const tripForm = new RenderEventFormView(event, event.id);
  const eventEditForm = tripForm.getElement();

  const escKeyDownButtonHandler = (evt) => {
    if (evt.key === KEY_CODE.ESC) {
      eventToFormReplaceHandler();
      document.removeEventListener(`keydown`, escKeyDownButtonHandler);
    }
  };

  const eventToFormReplaceHandler = () => {
    eventListElement.replaceChild(tripForm.getElement(), tripEvent.getElement());
  };

  const formToEventReplaceHandler = (evt) => {
    evt.preventDefault();
    eventListElement.replaceChild(tripEvent.getElement(), tripForm.getElement());
  };

  eventEditButton.addEventListener(`click`, () => {
    eventToFormReplaceHandler()
    document.addEventListener(`keydown`, escKeyDownButtonHandler);
  });

  eventEditForm.addEventListener(`submit`, () => {
    formToEventReplaceHandler();
    document.removeEventListener(`keydown`, escKeyDownButtonHandler);
  });

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

events.forEach((event) => {
  addEventToList(eventsListElement, event);
});
