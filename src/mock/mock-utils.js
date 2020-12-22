import {getDateDiffer, getEndDate, getRandomDataArr, getRandomInteger, getRandomStartDate} from "../utils";
import {eventDestinations, eventTypes, infoDescriptions, offers} from "./route-waypoint-data-mock";

const generateRandomDescription = () => {
  const count = getRandomInteger(1, 5);
  let items = ``;

  for (let i = 0; i <= count; i++) {

    items += infoDescriptions[i];
  }

  return items;
};

const generateRandomPhoto = () => {
  const generatePhoto = () => {

    return `http://picsum.photos/248/152?r=` + getRandomInteger(0, 999);
  };

  return new Array(getRandomInteger(1, 4)).fill().map(generatePhoto);
};

const getRouteWaypointData = () => {
  const hasOffers = Math.random() > 0.5;
  const startDate = getRandomStartDate();
  const endDate = getEndDate(startDate);

  return {
    eventType: getRandomDataArr(eventTypes),
    eventDestination: getRandomDataArr(eventDestinations),
    eventOffers: hasOffers === true ? offers : ``,
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
