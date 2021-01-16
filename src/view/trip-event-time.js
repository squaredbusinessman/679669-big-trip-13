// import {timeConvertToMs} from "../const";

export const getTimeDiff = (start, end) => {
  const diffInMs = end - start;

  const days = diffInMs / timeConvertToMs.DAY;
  const daysString = days > 0 ? days + `D ` : ``;

  const hours = diffInMs % timeConvertToMs.DAY / timeConvertToMs.HOUR;
  const hoursString = hours > 0 ? hours + `H ` : ``;

  const minutes = diffInMs % timeConvertToMs.DAY % timeConvertToMs.HOUR / timeConvertToMs.MINUTE;
  const minutesString = minutes > 0 ? minutes + `M` : ``;

  return daysString + hoursString + minutesString;
};

export const getEventTimeFormat = (time) => {
  const timeValueArr = Array.of(time.getHours(), time.getMinutes());

  return timeValueArr.join(`:`);
};
