export const getSortedTripEvents = (tripEvents, sortType) => {

  let sortedTripEvents = [];
  const tripEventsCopy = tripEvents.slice();

  switch (sortType) { // кейсы сортировки
    // eslint-disable-next-line no-undef
    case SortType.DAY:
      sortedTripEvents = tripEventsCopy.sort((a, b) => a.startTime - b.startTime);
      break; // сортировка по дате старта
    // eslint-disable-next-line no-undef
    case SortType.TIME:
      sortedTripEvents = tripEventsCopy.sort((a, b) => (b.endTime - b.startTime) - (a.endTime - a.startTime));
      break; // сортировка по длительности
    // eslint-disable-next-line no-undef
    case SortType.PRICE:
      sortedTripEvents = tripEventsCopy.sort((a, b) => b.price - a.price);
      break; // сортировка по стоимости
  }

  return sortedTripEvents;
};
