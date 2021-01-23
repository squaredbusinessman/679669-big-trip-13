import {eventTypes, eventDestinations} from "../mock/trip-events-mocks";
import {createElement} from "../utils";
import {getDateFormFormat} from "./get-days-and-dates";

const renderEventOffers = (offers) => {
  return offers.map((offer, index) => {
    const {id, title, price} = offer;
    const isChecked = Math.random() > 0.5;
    return (
      `<div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}-${index + 1}"
              type="checkbox" name="event-offer-${id}" ${isChecked ? `checked` : ``}>
          <label class="event__offer-label" for="event-offer-${id}-${index + 1}">
          <span class="event__offer-title">${title}</span>
              &plus;
              &euro;&nbsp;<span class="event__offer-price">${price}</span>
          </label>
      </div>`
    );
  })
    .join(``);
};

const renderOffers = (offers) => {
  const eventOffers = renderEventOffers(offers);
  return `<section class="event__section  event__section--offers">
              <h3 class="event__section-title  event__section-title--offers">Offers</h3>
              <div class="event__available-offers">
                  ${eventOffers}
              </div>
          </section>`;
};

const renderOptions = (destinations) => {
  return destinations.map((destination) => {
    return `<option value="${destination}"></option>`;
  }).join(`\n`);
};

const renderTypesList = (types) => {
  return types.map((type, id) => {
    return `<div class="event__type-item">
              <input id="event-type-${type.toLowerCase()}-${id + 1}" class="event__type-input  visually-hidden"
                   type="radio" name="event-type" value="${type}">
              <label class="event__type-label  event__type-label--${type.toLowerCase()}"
                  for="event-type-${type.toLowerCase()}-${id + 1}">${type}</label>
              </div>`;
  }).join(`\n`);
};

const renderPhotos = (photos) => {
  return photos.map((photo) => {
    return `<img class="event__photo" src="${photo}" alt="Event photo">`;
  }).join(`\n`);
};

const createEventForm = (events, id) => {
  const {eventType, eventDestination, destinationDescription, destinationPhoto, eventOffers, price, action, startTime, endTime} = events;

  const eventTypesList = renderTypesList(eventTypes.slice(0, 7));
  const activitiesTypesList = renderTypesList(eventTypes.slice(7, 10));
  const eventOptions = renderOptions(eventDestinations);
  const eventPhotos = renderPhotos(destinationPhoto);
  const startDate = getDateFormFormat(startTime);
  const endDate = getDateFormFormat(endTime);
  const offers = eventOffers !== null ? renderOffers(eventOffers) : ``;

  return `<form class="trip-events__item  event  event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${eventType.toLowerCase()}.png" alt="Event ${eventType.toLowerCase()} icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">
      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Transfer</legend>
          <div class="event__type-item">
            ${eventTypesList}
          </div>
        </fieldset>
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Activity</legend>
          <div class="event__type-item">
            ${activitiesTypesList}
          </div>
        </fieldset>
      </div>
    </div>
    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-${id}">
        ${eventType} ${action}
      </label>

<input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${eventDestination}" list="destination-list-1">
      <datalist id="destination-list-${id}">
        ${eventOptions}
      </datalist>
    </div>
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-${id}">
        From
      </label>
      <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${startDate}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-${id}">
        To
      </label>
      <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${endDate}">
    </div>
    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-${id}">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value="${price}">
    </div>
    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Cancel</button>
  </header>
  <section class="event__details">
    ${offers}
  <p class="event__destination-description">${destinationDescription}</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${eventPhotos}
          </div>
        </div>
      </section>
  </section>
</form>`;
};

export default class RenderEventForm {
  constructor(events, id) {
    this._events = events;
    this._id = id;
  }

  getTemplate() {
    return createEventForm(this._events, this._id);
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
