import {MONTH_DAYS, TIME_TO_MS} from "../const";
import {getRandomInteger} from "../utils";

export const generateStartDate = () => {
  const thisMoment = new Date();
  const momentMonth = thisMoment.getMonth();
  const momentYear = thisMoment.getFullYear();

  const randomMinutes = getRandomInteger(0, 59);
  const randomHours = getRandomInteger(0, 23);
  const randomDay = getRandomInteger(1, MONTH_DAYS[momentMonth.toString()]);

  return new Date(momentYear, momentMonth, randomDay, randomHours, randomMinutes);
};

export const generateEndDate = (startDate) => {
  const parsedStartDate = Date.parse(startDate);

  const generateTimeDifference = () => {
    const MIN_MINUTE_DIFFERENCE = 15;
    const randomHours = getRandomInteger(1, 48);
    return ((MIN_MINUTE_DIFFERENCE * randomHours)) * TIME_TO_MS.MINUTE;
  };

  const endDateInMs = parsedStartDate + generateTimeDifference();

  return new Date(endDateInMs);
};
