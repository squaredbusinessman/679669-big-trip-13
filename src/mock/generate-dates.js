import {MONTH_DAYS, TIME_TO_MS} from "../const";
import {getRandomInteger} from "../utils";

export const generateStartDate = () => {
  const THIS_MOMENT = new Date();
  const MOMENT_MONTH = THIS_MOMENT.getMonth();
  const MOMENT_YEAR = THIS_MOMENT.getFullYear();

  const RANDOM_MINUTES = getRandomInteger(0, 59);
  const RANDOM_HOUR = getRandomInteger(0, 23);
  const RANDOM_DAY = getRandomInteger(1, MONTH_DAYS[MOMENT_MONTH.toString()]);

  return new Date(MOMENT_YEAR, MOMENT_MONTH, RANDOM_DAY, RANDOM_HOUR, RANDOM_MINUTES);
};

export const generateEndDate = (startDate) => {
  const PARSED_START_DATE = Date.parse(startDate);

  const generateTimeDifference = () => {
    const MIN_MINUTE_DIFFERENCE = 15;
    const RANDOM_HOURS = getRandomInteger(1, 48);
    return ((MIN_MINUTE_DIFFERENCE * RANDOM_HOURS)) * TIME_TO_MS.MINUTE;
  };

  const END_DATE_MS = PARSED_START_DATE + generateTimeDifference();

  return new Date(END_DATE_MS);
};
