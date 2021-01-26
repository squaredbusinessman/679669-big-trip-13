import {getEventTimeFormat} from "./trip-event-time";
import {MONTHS} from "../const";
import Abstract from "./abstract";

const renderEventOffers = (offers) => {
  return offers.map((offer) => {
    const {title, price} = offer;
    return (
      `<li class="event__offer">
<span class="event__offer-title">${title}</span>
&plus;&euro;&nbsp;
<span class="event__offer-price">${price}</span>
</li>`);
  })
    .join(`\n`);
};

export const renderOffers = (offers) => {
  const eventOffers = renderEventOffers(offers);

  return (`<section class="event__section event__section--offers">
<div class="event__available-offers">${eventOffers}</div>
</section>`);
};

const renderTripEventTemplate = (event) => {
  const {eventType, eventDestination, eventOffers, price, action, startTime, endTime, timeDiff} = event;

  const tripEventOffers = eventOffers !== null ? renderOffers(eventOffers) : ``;
  const start = getEventTimeFormat(startTime);
  const end = getEventTimeFormat(endTime);

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${startTime.toISOString()}">${MONTHS[startTime.getMonth() - 1]} ${startTime.getDate()}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${eventType.toLowerCase()}.png" alt="Event ${eventType} icon">
                </div>
                <h3 class="event__title">${eventType} ${action} ${eventDestination}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${startTime.toISOString()}">${start}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${endTime.toISOString()}">${end}</time>
                  </p>
                  <p class="event__duration">${timeDiff}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${tripEventOffers}
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

export default class RenderTripEvent extends Abstract {
  constructor(event) {
    super();
    this._event = event;
  }

  getTemplate() {
    return renderTripEventTemplate(this._event);
  }
}
