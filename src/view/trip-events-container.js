import Abstract from "./abstract";

const createTripEventsContainer = () => {
  return (`<ul class="trip-events__list"></ul>`);
};

export default class TripEventsContainer extends Abstract {
  getTemplate() {
    return createTripEventsContainer();
  }
}
