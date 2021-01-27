import {MONTHS} from "../const";
import {getEventsDates} from "./get-days-and-dates";
import Abstract from "./abstract";

const MAXIMUM_CITIES_SHOWN = 3;

const sortTripEvents = (events) => {
  return events.slice().sort((a, b) => a.startTime - b.startTime);
};

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
  const differentMonthString = `${MONTHS[startMonth]} ${startDay} &nbsp;&mdash;&nbsp; ${MONTHS[endMonth]} ${endDay}`;
  return startMonth === endMonth ? sameMonthString : differentMonthString;
};

const renderTripRoute = (eventsList) => {
  const title = getTripRoute(eventsList);
  const tripDates = getEventsDates(eventsList).sort((a, b) => a - b);
  const tripDatesString = getTripDates(tripDates[0], tripDates[tripDates.length - 1]);
  return (`<div class="trip-info__main">
            <h1 class="trip-info__title">${title}</h1>
            <p class="trip-info__dates">${tripDatesString}</p>
          </div>`).trim();
};

export default class TripInfoRoute extends Abstract {
  constructor(tripEvents) {
    super();
    this._tripEvents = tripEvents;
  }

  getTemplate() {
    return renderTripRoute(this._tripEvents);
  }
}
