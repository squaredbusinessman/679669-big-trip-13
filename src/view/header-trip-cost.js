import {createElement} from "../utils";

const countOffersCost = (offers) => {
  return offers === null ? 0 : offers.reduce((total, cost) => total + cost.price, 0);
};

const getEventsCost = (tripEvents) => {
  return tripEvents.reduce((total, cost) => total + cost.price + countOffersCost(cost.eventOffers), 0);
};

const renderTripCostTemplate = () => {
  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${getEventsCost}</span>
          </p>`;
};

export default class HeaderTripCost {
  constructor(tripEvents) {
    this._element = null;
    this._tripEvents = tripEvents;
  }

  getTemplate() {
    return renderTripCostTemplate(this._tripEvents);
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
