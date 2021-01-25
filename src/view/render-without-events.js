import {renderElement} from "../utils";
import WithoutEventsView from "./without-events";

export const renderAppWithoutEvents = (events, eventsSection) => {
  if (!events[0]) {
    renderElement(eventsSection, new WithoutEventsView().getElement());
  }
};
