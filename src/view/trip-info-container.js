import Abstract from "./abstract";

const createTripInfoContainerTemplate = () => {
  return (`<section class="trip-main__trip-info  trip-info"></section>`);
};

export default class TripInfoContainer extends Abstract {
  getTemplate() {
    return createTripInfoContainerTemplate();
  }
}
