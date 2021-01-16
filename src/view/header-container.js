import {createElement} from "../utils";

const renderHeaderContainer = () => {
  return (`<section class="trip-main__trip-info"></section>`).trim();
};

export default class HeaderContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return renderHeaderContainer();
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
