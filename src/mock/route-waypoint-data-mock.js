import {getRandomInteger, getRandomDataArr, getEndDate, getDateDiffer, getRandomStartDate} from "../utils";

export const eventTypes = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`,
  `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];

export const eventDestinations = [`Amsterdam`, `Chamonix`, `Geneva`, `Vladivostok`, `New York`, `London`, `Paris`, `Bruxelles`];

export const infoDescriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];


export const offers = [
  {
    title: `Add luggage`,
    price: 30,
  },
  {
    title: `Switch to comfort class`,
    price: 100,
  },
  {
    title: `Add meal`,
    price: 15,
  },
  {
    title: `Choose seats`,
    price: 5,
  },
  {
    title: `Travel by train`,
    price: 40,
  }];

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

