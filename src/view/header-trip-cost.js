import {createElement} from "../utils";

const createTripCostTemplate = () => {
  const countOffersCost = (offers) => {
    return offers === null ? 0 : offers.reduce((total, cost) => total + cost.price, 0);
  };

  const getEventsCost = (tripEvents) => {
    return tripEvents.reduce((total, cost) => total + cost.price + countOffersCost(cost.eventOffers), 0);
  };

  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${getEventsCost}</span>
          </p>`;
};

export default class HeaderTripCost {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripCostTemplate();
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
