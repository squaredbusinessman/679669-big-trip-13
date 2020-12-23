import {RenderPositions} from "./const";

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomDataArr = (arr) => {

  return arr[getRandomInteger(0, arr.length - 1)];
};

export const createElement = (template) => { // позволяет получить элемент для вставки в дом-дерево
  const newElement = document.createElement(`div`);

  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const renderElement = (container, element, place) => {
  switch (place) {

    case RenderPositions.AFTERBEGIN:
      container.prepend(element);
      break;

    case RenderPositions.AFTEREND:
      container.after(element);
      break;

    case RenderPositions.BEFOREBEGIN:
      container.before(element);
      break;

    case RenderPositions.BEFOREEND:
      container.append(element);
      break;
  }
};

export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const renderPhotos = (photos) => {
  return photos.map((photo) => {
    return `<img class="event__photo" src="${photo}" alt="Event photo">`;
  });
};
