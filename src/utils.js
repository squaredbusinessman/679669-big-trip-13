export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomItemArr = (arr) => {

  return arr[getRandomInteger(0, arr.length - 1)];
};

export const createElement = (template) => { // позволяет получить элемент для вставки в дом-дерево
  const newElement = document.createElement(`div`);

  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const renderElement = (container, element, position = `append`) => {
  const parentContainer = typeof container === `string` ? document.querySelector(container) : container;

  switch (position) {
    case `append`:
      parentContainer.append(element);
      break;
    case `prepend`:
      parentContainer.prepend(element);
      break;
    case `insertBefore`:
      parentContainer.parentNode.insertBefore(element, parentContainer);
      break;
    case `insertAfter`:
      parentContainer.parentNode.insertBefore(element, parentContainer.nextSibling);
      break;
  }
};

export const renderTemplate = (container, template) => {
  container.append(template);
};

export const sortTripEvents = (events) => {
  return events.slice().sort((a, b) => a.start - b.start);
};
