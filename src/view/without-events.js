import Abstract from "./abstract";

const renderListEmptyElement = () => {
  return (`<p class="trip-events__msg">Click New Event to create your first point</p>`).trim();
};

export default class WithoutEvents extends Abstract {
  getTemplate() {
    return renderListEmptyElement();
  }
}
