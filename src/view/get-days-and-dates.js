export const getEventsDates = (events) => {
  return events.map((event) => {
    return new Date(event.start.getFullYear(), event.start.getMonth(), event.start.getDate());
  });
};

const getTripDays = (daysCounters) => {
  const tripDaysArr = Array.of(1);

  for (let i = 1; i < daysCounters.length; i++) {
    tripDaysArr.push(tripDaysArr[i - 1] + daysCounters[i]);
  }

  return tripDaysArr;
};

const createTripDays = (sortedDates) => {
  const allTripEventsDates = getEventsDates(sortedDates);
  const tripDays = [];

  allTripEventsDates.forEach((date) => {
    const dateUTCFormat = Date.parse(date);

    if (tripDays.indexOf(dateUTCFormat) === -1) {
      tripDays.push(dateUTCFormat);
    }
  });

  tripDays.sort((a, b) => a - b).forEach((date) => date);

  return tripDays;
};

export const getTripDaysWithDates = (sortedTripEvents) => {
  const uniqueTripEventsDates = createTripDays(sortedTripEvents);
  const tripDays = getTripDays(uniqueTripEventsDates);

  return tripDays.map((day, index) => {
    return {
      counter: day,
      date: uniqueTripEventsDates[index],
    };
  });
};

