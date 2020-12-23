import {renderWaypointOffers} from "./trip-event-offers";
import {createElement} from "../utils";

const createWaypointTemplate = (event) => {
  const {eventType, eventDestination, eventOffers, price, eventTime} = event;
  const waypointOffers = eventOffers !== null ? renderWaypointOffers(eventOffers) : ``;

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">MAR 18</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${eventType}.png" alt="Event ${eventType} icon">
                </div>
                <h3 class="event__title">${eventType} to ${eventDestination}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="2019-03-18T12:25">${eventTime.start}</time>
                    &mdash;
                    <time class="event__end-time" datetime="2019-03-18T13:35">${eventTime.end}</time>
                  </p>
                  <p class="event__duration">${eventTime.differ}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${waypointOffers};
                </ul>
                <button class="event__favorite-btn" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
};

export default class TripWaypoint {
  constructor(event) {
    this._element = null;
    this._event = event;
  }

  getTemplate() {
    return createWaypointTemplate(this._event);
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
