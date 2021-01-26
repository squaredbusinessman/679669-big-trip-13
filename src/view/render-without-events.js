import {render} from "../utils/render";
import WithoutEventsView from "./without-events";

export const renderAppWithoutEvents = (events, eventsSection) => {
  if (!events[0]) {
    render(eventsSection, new WithoutEventsView());
  }
};
