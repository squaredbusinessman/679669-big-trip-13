import {getRandomInteger, getRandomItemArr} from "../utils/common";
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
  const event = getRandomItemArr(eventTypes);
  const startDate = new Date(getRandomStartDate());
  const endDate = getEndDate(startDate);
  const photos = generateRandomPhoto();
  const hasOffers = Math.random() > 0.5;
  const dateDiff = getTimeDiff(startDate, endDate);

  return {
    eventType: event,
    eventDestination: getRandomItemArr(eventDestinations),
    eventOffers: hasOffers ? getRandomOffers(offers) : null,
    destinationDescription: generateRandomDescription(),
    destinationPhoto: photos,
    startTime: startDate,
    parsedStartDate: parseDate(startDate),
    endTime: endDate,
    timeDiff: dateDiff,
    action: eventTypeActionsMap[event],
    isFavorite: Boolean(getRandomInteger(0, 1)),
    price: getRandomInteger(10, 1000),
    id: nanoid(),
  };
};

export const generateEvents = (count) => {
  return new Array(count).fill(``).map(getTripEventData);
};
