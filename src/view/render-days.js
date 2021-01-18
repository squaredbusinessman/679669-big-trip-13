import {renderElement, sortTripEvents} from "../utils";
import TripEventsContainer from "./trip-events-container";
import TripDay from "./trip-day";
import RenderTripEvent from "./render-trip-event";
import RenderEventForm from "./render-event-form";
import {getTripDaysWithDates} from "./get-days-and-dates";

export const addEventToList = (eventListElement, event) => {
  const tripEvent = new RenderTripEvent(event);
  const eventSwitchButton = tripEvent.getElement().querySelector(`.event__rollup-btn`);
  const tripForm = new RenderEventForm(event, event.counter);
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

export const renderEventsInDays = (tripEvents, daysContainer) => {
  let daysContainerCount = 0;
  const sortedTripEvents = sortTripEvents(tripEvents);
  const tripDaysObjects = getTripDaysWithDates(sortedTripEvents);

  sortedTripEvents.forEach((tripEvent) => {
    const {parsedStartDate} = tripEvent;
    const notSameDate = parsedStartDate !== tripDaysObjects[daysContainerCount].date;

    if (!document.querySelector(`.day`)) {
      renderElement(daysContainer, new TripDay(tripDaysObjects[daysContainerCount]), `append`);

      const dayWrapper = document.querySelector(`.day:last-child`);
      renderElement(dayWrapper, new TripEventsContainer().getElement(), `append`);
    }

    if (notSameDate) {
      if (daysContainerCount < tripDaysObjects.length - 1) {
        daysContainerCount++;
      }

      renderElement(daysContainer, new TripDay(tripDaysObjects[daysContainerCount]).getElement(), `append`);
      const dayWrapper = document.querySelector(`.day:last-child`);
      renderElement(dayWrapper, new TripEventsContainer().getElement());
    }

    const tripEventContainer = document.querySelector(`.day:last-child .trip-events__list`);

    renderElement(tripEventContainer, new RenderTripEvent(tripEvent), `append`);
  });
};
