import {getRandomDataArr, getRandomInteger} from "../utils";
import {infoDescriptions} from "./route-waypoint-data";

export const generateRandomDescription = () => {
  const count = getRandomInteger(1, 5);
  let items = ``;

  for (let i = 0; i <= count; i++) {

    items += infoDescriptions[i];
  }

  return items;
};

export const generateRandomPhoto = () => {
  const generatePhoto = () => {

    return `http://picsum.photos/248/152?r=` + getRandomInteger(0, 999);
  };

  return new Array(getRandomInteger(1, 4)).fill().map(generatePhoto);
};

export const getRandomStartDate = () => {
  const year = getRandomInteger(2020, 2021);
  const month = getRandomInteger(1, 12);
  const day = getRandomInteger(1, 31);
  const hour = getRandomInteger(0, 23);
  const minutes = getRandomInteger(0, 59);

  return new Date(year, month, day, hour, minutes);
};

export const getEndDate = (startDate) => {
  return new Date(Date.parse(startDate) + getRandomInteger(1, 3) * 3600000);
};

export const getDateDiffer = (startDate, endDate) => {
  return endDate - startDate;
};

export const renderDestinationOptions = (destinations) => {
  return destinations.map((destination) => {
    return `<option value="${destination}"></option>`;
  })
    .join(`\n`);
};

export const getRandomOffers = (offers) => {
  const offersCount = getRandomInteger(1, 5);
  const randomOffers = [];

  for (let i = 0; i < offersCount; i++) {
    const offer = getRandomDataArr(offers);
    if (randomOffers.indexOf(offer) === -1) {
      randomOffers.push(offer);
    }
  }

  return randomOffers;
};
