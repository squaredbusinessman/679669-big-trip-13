import {createElement} from "../utils";

const renderTripCostTemplate = (tripEvents) => {
  const countOffersCost = (offers) => {
    return offers === null ? 0 : offers.reduce((total, cost) => total + cost.price, 0);
  };

  const getEventsCost = (events) => {
    return events.reduce((total, cost) => total + cost.price + countOffersCost(cost.eventOffers), 0);
  };

  return (`<p class="trip-info__cost">Total: &euro;&nbsp;<span class="trip-info__cost-value">${getEventsCost(tripEvents)}</span></p>`).trim();
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
