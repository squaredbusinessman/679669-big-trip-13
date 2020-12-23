import {getRandomDataArr, getRandomInteger} from "../utils";
import {getRandomStartDate, getEndDate, getDateDiffer, getRandomOffers, generateRandomDescription, generateRandomPhoto} from "./mock-utils";
import {eventDestinations, eventTypes, offers} from "./route-waypoint-data";

export const getRouteWaypointData = () => {
  const hasOffers = Math.random() > 0.5;
  const startDate = getRandomStartDate();
  const endDate = getEndDate(startDate);

  return {
    eventType: getRandomDataArr(eventTypes),
    eventDestination: getRandomDataArr(eventDestinations),
    eventOffers: hasOffers === true ? getRandomOffers(offers) : ``,
    destinationInfo: {
      description: generateRandomDescription(),
      photo: generateRandomPhoto(),
    },
    eventTime: {
      start: startDate,
      end: endDate,
      differ: getDateDiffer(startDate, endDate),
    },
    isFavorite: Boolean(getRandomInteger(0, 1)),
    price: getRandomInteger(10, 1000)
  };
};

export const generateWaypoints = (count) => {
  return new Array(count).fill(``).map(getRouteWaypointData);
};
