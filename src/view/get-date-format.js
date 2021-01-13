export const getDateAndTimeFormFormat = (date) => {
  const year = date.getFullYear().toString().slice(2, 4);

  const dateValues = Array.of(date.getDate(), date.getMonth() + 1, date.getHours(), date.getMinutes()).map((value) => {
    return value < 10 ? `0` + value : value;
  });

  const [day, month, hours, minutes] = dateValues;

  return day + `/` + month + `/` + year + ` ` + hours + `:` + minutes;
};
