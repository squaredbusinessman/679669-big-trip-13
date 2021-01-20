import {timeConvertToMs} from "../const";

export const getTimeDiff = (start, end) => {
  const diffInMs = end - start;

  const days = Math.trunc(diffInMs / timeConvertToMs.DAY);
  const daysString = days > 0 ? days + `D ` : ``;

  const hours = Math.trunc(diffInMs % timeConvertToMs.DAY / timeConvertToMs.HOUR);
  const hoursString = hours > 0 ? hours + `H ` : ``;

  const minutes = Math.trunc(diffInMs % timeConvertToMs.DAY % timeConvertToMs.HOUR / timeConvertToMs.MINUTE);
  const minutesString = minutes > 0 ? minutes + `M` : ``;

  return daysString + hoursString + minutesString;
};

export const getEventTimeFormat = (time) => {
  const timeValueArr = Array.of(time.getHours(), time.getMinutes()).map((value) => {
    return value < 10 ? `0` + value : value;
  });

  return timeValueArr.join(`:`);
};
