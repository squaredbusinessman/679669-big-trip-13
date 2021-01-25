import {createElement} from "../utils";

const renderListEmptyElement = () => {
  return (`<p class="trip-events__msg">Click New Event to create your first point</p>`).trim();
};

export default class WithoutEvents {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return renderListEmptyElement();
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
