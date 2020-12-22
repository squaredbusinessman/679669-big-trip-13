const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomDataArr = (arr) => {

  return arr[getRandomInteger(0, arr.length - 1)];
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const getRandomStartDate = () => {
  const year = getRandomInteger(2020, 2021);
  const month = getRandomInteger(1, 12);
  const day = getRandomInteger(1, 31);
  const hour = getRandomInteger(0, 23);
  const minutes = getRandomInteger(0, 59);

  return new Date(year, month, day, hour, minutes);
};

const getEndDate = (startDate) => {
  return new Date(Date.parse(startDate) + getRandomInteger(1, 3) * 3600000);
};

const getDateDiffer = (startDate, endDate) => {
  return endDate - startDate;
};

const renderDestinationOptions = (destinations) => {
  return destinations.map((destination) => {
    return `<option value="${destination}"></option>`;
  })
    .join(`\n`);
};

const renderPhotos = (photos) => {
  return photos.map((photo) => {
    return `<img class="event__photo" src="${photo}" alt="Event photo">`;
  });
};

export {getRandomInteger, getRandomDataArr, getRandomStartDate, getEndDate, getDateDiffer, renderTemplate, renderDestinationOptions, renderPhotos};
