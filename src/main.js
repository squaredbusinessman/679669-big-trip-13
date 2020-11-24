import {createTripInfoTemplate} from "./view/trip-info";
import {createMenuTemplate} from "./view/menu";
import {createFilterTemplate} from "./view/filter";
import {createSortingTemplate} from "./view/sorting";
import {createWaypointTemplate} from "./view/waypoint";

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-main`);
// вставляем маршрут и стоимость
renderTemplate(tripMainElement, createTripInfoTemplate(), `beforeend`);

const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripControlsFirstChildHeader = tripControlsElement.querySelector(`h2`);
// 1- меню 2- фильтры
renderTemplate(tripControlsFirstChildHeader, createMenuTemplate(), `afterend`); // меню
renderTemplate(tripControlsElement, createFilterTemplate(), `beforeend`);// фильтры

const tripEventsElement = document.querySelector(`.trip-events`);
// 1- сортировка 2- контент
renderTemplate(tripEventsElement, createSortingTemplate(), `beforeend`);
renderTemplate(tripEventsElement, createWaypointTemplate(), `beforeend`);

// Скажу сразу это естественно не финальная модульность, и я буду еще бить их или даже создавать более мелкие структуры
// импортировать в более крупные, а дальше уже в мэйн.жс
