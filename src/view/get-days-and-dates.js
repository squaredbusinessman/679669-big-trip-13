export const getDateAndTimeFormFormat = (date) => {
  const year = date.getFullYear().toString().slice(2, 4);

  const dateValues = Array.of(date.getDate(), date.getMonth() + 1, date.getHours(), date.getMinutes()).map((value) => {
    return value < 10 ? `0` + value : value;
  });

  const [day, month, hours, minutes] = dateValues;

  return day + `/` + month + `/` + year + ` ` + hours + `:` + minutes;
};

export const getEventsDates = (events) => {
  return events.map((event) => {
    return new Date(event.startTime.getFullYear(), event.startTime.getMonth(), event.startTime.getDate());
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

