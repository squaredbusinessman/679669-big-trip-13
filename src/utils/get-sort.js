import {SORT_TYPE} from "../const";

export const getSortedTripEvents = (tripEvents, sortType = SORT_TYPE.PRICE) => {

  let sortedTripEvents = [];
  const tripEventsCopy = tripEvents.slice();

  switch (sortType) { // кейсы сортировки
    case sortType.DAY:
      sortedTripEvents = tripEventsCopy.sort((a, b) => a.startTime - b.startTime);
      break; // сортировка по дате старта
    case sortType.TIME:
      sortedTripEvents = tripEventsCopy.sort((a, b) => (b.endTime - b.startTime) - (a.endTime - a.startTime));
      break; // сортировка по длительности
    case sortType.PRICE:
      sortedTripEvents = tripEventsCopy.sort((a, b) => b.price - a.price);
      break; // сортировка по стоимости
  }

  return sortedTripEvents;
};
