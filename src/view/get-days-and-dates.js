export const getEventsDates = (events) => {
  return events.map((event) => {
    return new Date(event.startTime.getFullYear(), event.startTime.getMonth(), event.startTime.getDate());
  });
};
