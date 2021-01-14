import {MONTHS} from "../const";
import {sortTripEvents} from "../utils";
import {createElement} from "../utils";
import {getEventsDates} from "./get-days-and-dates";

const MAXIMUM_CITIES_SHOWN = 3;

const getTripRoute = (tripEvents) => {
  const tripEventsSortedByDate = sortTripEvents(tripEvents);
  const tripEventsCities = tripEventsSortedByDate.map((tripEvent) => tripEvent.eventDestination);
  return tripEventsCities.length <= MAXIMUM_CITIES_SHOWN ? tripEventsCities.join(` - `) : tripEventsCities.slice(0, 1) + `— … —` + tripEventsCities.slice(tripEventsCities.length - 1);
};

const getTripDates = (startDate, endDate) => {
  const startMonth = startDate.getMonth();
  const startDay = startDate.getDate();
  const endMonth = endDate.getMonth();
  const endDay = endDate.getDate();
  const sameMonthString = `${MONTHS[startMonth]} ${startDay} &nbsp;&mdash;&nbsp; ${endDay}`;
  const differentMonthString = `${MONTHS[startMonth]} ${startDay} &nbsp;&mdash;&nbsp; ${endMonth} ${endDay}`;
  return startMonth === endMonth ? sameMonthString : differentMonthString;
};

const renderTripRoute = (eventsList) => {
  const title = getTripRoute(eventsList);
  const tripDates = getEventsDates(eventsList).sort((a, b) => a - b);
  const tripDatesString = getTripDates(tripDates[0], tripDates[tripDates.length - 1]);
  return `<div class="trip-info__main">
            <h1 class="trip-info__title">${title}</h1>
            <p class="trip-info__dates">${tripDatesString}</p>
          </div>`;
};

export default class TripInfoRoute {
  constructor(eventsList) {
    this._element = null;
    this._eventsList = eventsList;
  }

  getTemplate() {
    return renderTripRoute(this._eventsList);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
