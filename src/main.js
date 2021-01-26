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
import {renderAppWithoutEvents} from "./view/render-without-events";
import {render, replace} from "./utils/render";
import {KEY_CODE} from "./const";

const RENDER_EVENTS_COUNT = 5;
const events = generateEvents(RENDER_EVENTS_COUNT);

// Обработчик события открытия/закрытия формы редактирования

const addEventToList = (eventListElement, event) => {
  const eventToFormReplaceHandler = () => {
    replace(tripForm, tripEvent);
  };

  const formToEventReplaceHandler = () => {
    replace(tripEvent, tripForm);
  };

  const escKeyDownButtonHandler = (evt) => {
    if (evt.code === KEY_CODE.ESC) {
      formToEventReplaceHandler();
      document.removeEventListener(`keydown`, escKeyDownButtonHandler);
    }
  };

  const tripEvent = new TripEventView(event);

  tripEvent.setClickHandler(() => {
    eventToFormReplaceHandler();
    document.addEventListener(`keydown`, escKeyDownButtonHandler);
  });

  const tripForm = new RenderEventFormView(event, event.id);

  tripForm.setSubmitHandler(() => {
    formToEventReplaceHandler();
    document.removeEventListener(`keydown`, escKeyDownButtonHandler);
  });

  render(eventListElement, tripEvent);
};

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

// сортировка

render(tripEventsSection, new TripSortingView());

const tripSortElement = tripEventsSection.querySelector(`.trip-sort`);

render(tripSortElement, new TripEventsContainerView(), `insertAfter`);

const eventsListElement = tripEventsSection.querySelector(`.trip-events__list`);
events.forEach((event) => {
  addEventToList(eventsListElement, event);
});

renderAppWithoutEvents(events, tripEventsSection);
