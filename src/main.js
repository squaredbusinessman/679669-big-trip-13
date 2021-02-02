import {generateEvents} from "./mock/generate-trip-events";
import HeaderTripCostView from "./view/cost";
import HeaderNavMenuView from "./view/navigation";
import HeaderFiltersView from "./view/filters";
import TripInfoContainerView from "./view/trip-info-container";
import TripInfoRouteView from "./view/trip-route";
import {render} from "./utils/render";
import TripBoardPresenter from "./presenter/trip-board";

const RENDER_EVENTS_COUNT = 5;
const events = generateEvents(RENDER_EVENTS_COUNT);


// шапка

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsSection = document.querySelector(`.trip-events`);

const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const [tripControlsFirstHeaderElement, tripControlsSecondHeaderElement] = tripControlsElement.querySelectorAll(`h2`);

const tripBoardPresenter = new TripBoardPresenter(tripEventsSection);

render(tripMainElement, new TripInfoContainerView(), `prepend`);
const tripInfoContainer = tripMainElement.querySelector(`.trip-info`);

render(tripInfoContainer, new TripInfoRouteView(events));
render(tripInfoContainer, new HeaderTripCostView(events));


render(tripControlsFirstHeaderElement, new HeaderNavMenuView(), `insertAfter`);
render(tripControlsSecondHeaderElement, new HeaderFiltersView(), `insertAfter`);

// доска и эвенты (презентер)
tripBoardPresenter.init(events);
