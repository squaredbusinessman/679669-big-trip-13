import {getRandomItemArr, getRandomInteger} from "../utils";
import {
  getRandomStartDate,
  getEndDate,
  getRandomOffers,
  generateRandomDescription,
  generateRandomPhoto,
  parseDate,
} from "./mock-utils";
import {eventDestinations, eventTypeActionsMap, eventTypes, offers} from "./trip-events-mocks";
import {getTimeDiff} from "../view/trip-event-time";
import {nanoid} from "nanoid";

export const getTripEventData = () => {
  const EVENT = getRandomItemArr(eventTypes);
  const START_DATE = new Date(getRandomStartDate());
  const END_DATE = getEndDate(START_DATE);
  const PHOTOS = generateRandomPhoto();
  const HAS_OFFERS = Math.random() > 0.5;
  const DATE_DIFF = getTimeDiff(START_DATE, END_DATE);

  return {
    eventType: EVENT,
    eventDestination: getRandomItemArr(eventDestinations),
    eventOffers: HAS_OFFERS ? getRandomOffers(offers) : null,
    destinationDescription: generateRandomDescription(),
    destinationPhoto: PHOTOS,
    startTime: START_DATE,
    parsedStartDate: parseDate(START_DATE),
    endTime: END_DATE,
    timeDiff: DATE_DIFF,
    action: eventTypeActionsMap[EVENT],
    isFavorite: Boolean(getRandomInteger(0, 1)),
    price: getRandomInteger(10, 1000),
    id: nanoid(),
  };
};

export const generateEvents = (count) => {
  return new Array(count).fill(``).map(getTripEventData);
};
