
import EventSortView from "../view/event-sort";
import TripEventsContainerView from "../view/trip-events-container";
import {generateEvents} from "../mock/generate-trip-events";
import WithoutEventsView from "../view/without-events";
import {render, replace} from "../utils/render";
import {KEY_CODE} from "../const";
import TripEventView from "../view/trip-event";
import RenderEventFormView from "../view/edit-form";

const RENDER_EVENTS_COUNT = 5;
const events = generateEvents(RENDER_EVENTS_COUNT);

const addEventToList = (eventsContainer, event) => {
  const eventToFormReplaceHandler = () => {
    replace(tripForm, tripEvent);
  };

  const formToEventReplaceHandler = () => {
    replace(tripEvent, tripForm);
  };

  const escKeyDownButtonHandler = (evt) => {
    if (evt.code === KEY_CODE.ESC) {
      formToEventReplaceHandler();
      document.removeEventListener(`keydown`, escKeyDownButtonHandler);
    }
  };

  const tripEvent = new TripEventView(event);

  tripEvent.setClickHandler(() => {
    eventToFormReplaceHandler();
    document.addEventListener(`keydown`, escKeyDownButtonHandler);
  });

  const tripForm = new RenderEventFormView(event, event.id);

  tripForm.setSubmitHandler(() => {
    formToEventReplaceHandler();
    document.removeEventListener(`keydown`, escKeyDownButtonHandler);
  });

  render(eventsContainer, tripEvent);
};

export default class TripBoard {
  constructor(tripEventsSection) {
    this._tripEventsSection = tripEventsSection;

    this._eventSortComponent = new EventSortView();
    this._tripEventsContainerComponent = new TripEventsContainerView();
    this._boardWithoutEventsComponent = new WithoutEventsView();
    this._tripEventsArr = events;
  }

  init(tripEvents) {
    this._tripEvents = tripEvents.slice();

    if (!tripEvents.length) {
      this._renderWithoutEvents();
      return;
    }

    this._renderTripSort();

    this._renderTripEventsContainer();

    _renderEvent(tripEvents);
  }

  _renderTripSort() {
    render(this._tripEventsSection, this._eventSortComponent);
  }

  _renderTripEventsContainer() {
    render(this._eventSortComponent, this._tripEventsContainerComponent, `InsertAfter`);
  }

  _renderWithoutEvents() {

    render(this._tripEventsSection, this._boardWithoutEventsComponent))

  }

  _renderEvent(Events) {
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
