import EventSortView from "../view/event-sort";
import TripEventsContainerView from "../view/trip-events-container";
import WithoutEventsView from "../view/without-events";
import {render} from "../utils/render";
import TripEventPresenter from "./trip-event-presenter";

export default class TripBoard {
  constructor(tripEventsSection) {
    this._tripEventsSection = tripEventsSection;

    this._eventSortComponent = new EventSortView();
    this._tripEventsContainerComponent = new TripEventsContainerView();
    this._boardWithoutEventsComponent = new WithoutEventsView();
  }

  init(tripEvents) {
    this._tripEvents = tripEvents.slice();

    if (!this._tripEvents.length) {
      this._renderWithoutEvents();
      return;
    }

    this._renderTripSort();

    this._renderTripEventsContainer();

    this._tripEvents.forEach((tripEvent) => {
      this._renderEvent(tripEvent, tripEvent.id);
    });
  }

  _renderTripSort() {
    render(this._tripEventsSection, this._eventSortComponent);
  }

  _renderTripEventsContainer() {
    render(this._eventSortComponent, this._tripEventsContainerComponent);
  }

  _renderWithoutEvents() {
    render(this._tripEventsSection, this._boardWithoutEventsComponent);
  }

  _renderEvent(tripEvent, id) {
    const eventPresenter = new TripEventPresenter(this._tripEventsContainerComponent);
    eventPresenter.init(tripEvent, id);
  }

}
