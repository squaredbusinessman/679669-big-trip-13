export const getEventsDates = (events) => {
  return events.map((event) => {
    return new Date(event.startTime.getFullYear(), event.startTime.getMonth(), event.startTime.getDate());
  });
};

export const getDateFormFormat = (date) => {
  const year = date.getFullYear().toString().slice(2, 4);

  const dateValues = Array.of(date.getDate(), date.getMonth(), date.getHours(), date.getMinutes()).map((value) => {
    return value < 10 ? `0` + value : value;
  });

  const [day, month, hours, minutes] = dateValues;

  return day + `/` + month + `/` + year + ` ` + hours + `:` + minutes;
};
