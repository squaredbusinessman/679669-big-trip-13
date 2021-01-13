import {timeConvertToMs} from "../const";
import {getEventsDates} from "../utils";


export const createDayCounters = (days) => {
  const daysCounterArr = [];
  const startCounterNumber = 0;

  for (let i = days.length - 1; i > 0; i--) {
    const dayDiff = (days[i] - days[i - 1]) / timeConvertToMs.DAY;
    daysCounterArr.push(dayDiff);
  }

  return daysCounterArr.reverse().unshift(startCounterNumber);
};

export const getTripDays = (daysCounters) => {
  const tripDaysArr = Array.of(1);

  for (let i = 1; i < daysCounters.length; i++) {
    tripDaysArr.push(tripDaysArr[i - 1] + daysCounters[i]);
  }

  return tripDaysArr;
};

export const getDaysWithDates = (tripDays, tripEventsDates) => {
  return tripDays.map((day, index) => {
    return {
      counter: day,
      date: tripEventsDates[index]
    };
  });
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

