export const sortTripEvents = (events) => {
  return events.slice().sort((a, b) => a.start - b.start);
};

export const getEventsDates = (events) => {
  return events.map((event) => {
    return new Date(event.start.getFullYear(), event.start.getMonth(), event.start.getDate());
  });
};

export const createTripDays = (dates) => {
  const tripDays = [];

  dates.forEach((date) => {
    if (tripDays.indexOf(Date.parse(date)) === -1) {
      tripDays.push(Date.parse(date));
    }
  });

  tripDays.sort((a, b) => a - b).forEach((date) => date);
  return tripDays;
};

