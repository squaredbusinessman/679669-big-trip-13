import {createElement} from "../utils";

const createWaypointsContainer = () => {
  return `<ul class="trip-events__list"></ul>`;
};

export default class TripEventsContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createWaypointsContainer();
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
