import {createElement} from "../utils";

const createTripEventsContainer = () => {
  return (`<ul class="trip-events__list"></ul>`).trim();
};

export default class TripEventsContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripEventsContainer();
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
