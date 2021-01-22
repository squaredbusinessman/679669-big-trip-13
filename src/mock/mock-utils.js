import {getRandomItemArr, getRandomInteger} from "../utils";
import {infoDescriptions} from "./trip-events-mocks";

export const generateRandomDescription = () => {
  const count = getRandomInteger(1, 5);
  let description = ``;

  for (let i = 0; i <= count; i++) {

    description += infoDescriptions[i];
  }

  return description;
};

export const generateRandomPhoto = () => {
  const generatePhoto = () => {

    return `http://picsum.photos/248/152?r=` + getRandomInteger(0, 999);
  };

  return new Array(getRandomInteger(1, 4)).fill(``).map(generatePhoto);
};

export const getRandomStartDate = () => {
  const YEAR = getRandomInteger(2020, 2022);
  const MONTH = getRandomInteger(1, 12);
  const DAY = getRandomInteger(1, 31);
  const HOUR = getRandomInteger(0, 23);
  const MINUTES = getRandomInteger(0, 59);

  return new Date(YEAR, MONTH, DAY, HOUR, MINUTES);
};

export const getEndDate = (startDate) => {
  return new Date(Date.parse(startDate) + getRandomInteger(1, 3) * 3600000);
};

export const getRandomOffers = (offers) => {
  const OFFERS_COUNT = getRandomInteger(1, 5);
  const RANDOM_OFFERS = [];

  for (let i = 0; i < OFFERS_COUNT; i++) {
    const offer = getRandomItemArr(offers);
    if (RANDOM_OFFERS.indexOf(offer) === -1) {
      RANDOM_OFFERS.push(offer);
    }
  }

  return RANDOM_OFFERS;
};

export const parseDate = (date) => {
  const RECIEVED_DATE = date.getDate();
  const RECIEVED_MONTH = date.getMonth();
  const RECIEVED_YEAR = date.getFullYear();

  return Date.parse((new Date(RECIEVED_YEAR, RECIEVED_MONTH, RECIEVED_DATE)).toString());
};
