import EventSortView from "../view/event-sort";
import TripEventsContainerView from "../view/trip-events-container";
import WithoutEventsView from "../view/without-events";
import {render, replace} from "../utils/render";
import {KEY_CODE} from "../const";
import TripEventView from "../view/trip-event";
import RenderEventFormView from "../view/edit-form";

export default class TripBoard {
  constructor(tripEventsSection) {
    this._tripEventsSection = tripEventsSection;

    this._eventSortComponent = new EventSortView();
    this._tripEventsContainerComponent = new TripEventsContainerView();
    this._boardWithoutEventsComponent = new WithoutEventsView();
  }

  init(tripEvents) {
    debugger;
    this._tripEvents = tripEvents.slice();

    if (!this._tripEvents.length) {
      this._renderWithoutEvents();
      return;
    }

    this._renderTripSort();

    this._renderTripEventsContainer();

    this._tripEvents.forEach((event) => {
      this._renderEvent(event);
    });
  }

  _renderTripSort() {
    render(this._tripEventsSection, this._eventSortComponent);
  }

  _renderTripEventsContainer() {
    render(this._eventSortComponent, this._tripEventsContainerComponent, `InsertAfter`);
  }

  _renderWithoutEvents() {

    render(this._tripEventsSection, this._boardWithoutEventsComponent);

  }

  _renderEvent(event) {
    const tripEventComponent = new TripEventView(event);
    const tripFormComponent = new RenderEventFormView(event, event.id);

    const eventToFormReplaceHandler = () => {
      replace(tripFormComponent, tripEventComponent);
    };

    const formToEventReplaceHandler = () => {
      replace(tripEventComponent, tripFormComponent);
    };

    const escKeyDownButtonHandler = (evt) => {
      if (evt.code === KEY_CODE.ESC) {
        formToEventReplaceHandler();
        document.removeEventListener(`keydown`, escKeyDownButtonHandler);
      }
    };

    tripEventComponent.setClickHandler(() => {
      eventToFormReplaceHandler();
      document.addEventListener(`keydown`, escKeyDownButtonHandler);
    });

    tripFormComponent.setSubmitHandler(() => {
      formToEventReplaceHandler();
      document.removeEventListener(`keydown`, escKeyDownButtonHandler);
    });

    render(this._tripEventsContainerComponent, tripEventComponent);
  }

}
