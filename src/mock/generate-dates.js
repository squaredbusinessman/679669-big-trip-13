import {MONTH_DAYS, timeConvertToMs} from "../const";
import {getRandomInteger} from "../utils";

export const generateStartDate = () => {
  const thisMoment = new Date();
  const thisMomentMonth = thisMoment.getMonth();
  const thisMomentYear = thisMoment.getFullYear();

  const randomMinutes = getRandomInteger(0, 59);
  const randomHour = getRandomInteger(0, 23);
  const randomDay = getRandomInteger(1, MONTH_DAYS[thisMomentMonth.toString()]);

  return new Date(thisMomentYear, thisMomentMonth, randomDay, randomHour, randomMinutes);
};

export const generateEndDate = (startDate) => {
  const parsedStartDate = Date.parse(startDate);

  const generateTimeDifference = () => {
    const minMinuteDifference = 15;
    const randomHours = getRandomInteger(1, 48);
    return ((minMinuteDifference * randomHours)) * timeConvertToMs.MINUTE;
  };

  const endDateMs = parsedStartDate + generateTimeDifference();

  return new Date(endDateMs);
};
