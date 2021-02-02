import TripEvent from "../view/trip-event";
import EditForm from "../view/edit-form";
import {render, replace} from "../utils/render";
import {KEY_CODE} from "../const";

export default class Event {
  constructor(eventsListContainer) {
    this._eventsListContainer = eventsListContainer;

    this._eventComponent = null;
    this._eventEditComponent = null;

    this._handleEditClick = this._handleEditClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(event, id) {
    this._event = event;
    this._eventId = id;

    this._eventComponent = new TripEvent(this._event);
    this._eventEditComponent = new EditForm(this._event, this._eventId);

    this._eventComponent.setClickHandler(this._handleEditClick);
    this._eventEditComponent.setSubmitHandler(this._handleFormSubmit);

    render(this._eventsListContainer, this._eventComponent);
  }

  _replaceEventToForm() {
    replace(this._eventEditComponent, this._eventComponent);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
  }

  _replaceFormToEvent() {
    replace(this._eventComponent, this._eventEditComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _escKeyDownHandler(evt) {
    if (evt.code === KEY_CODE.ESC || evt.key === `Esc`) {
      evt.preventDefault();
      this._replaceFormToEvent();
    }
  }

  _handleEditClick() {
    this._replaceEventToForm();
  }

  _handleFormSubmit() {
    this._replaceEventToForm();
  }
}
