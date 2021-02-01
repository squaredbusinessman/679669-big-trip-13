// склад ненужных функций на случай если они понадобятся)

import {render, replace} from "./render";
import {KEY_CODE} from "../const";
import TripEventView from "../view/trip-event";
import RenderEventFormView from "../view/edit-form";

// функция фиксации необходимого нам контекста
export const bindContext = function (context, fn) {
  return function (...args) {
    return fn.call(context, ...args);
  };
};

export const addEventToList = (eventsContainer, event) => {
  const eventToFormReplaceHandler = () => {
    replace(tripForm, tripEvent);
  };

  const formToEventReplaceHandler = () => {
    replace(tripEvent, tripForm);
  };

  const escKeyDownButtonHandler = (evt) => {
    if (evt.code === KEY_CODE.ESC) {
      formToEventReplaceHandler();
      document.removeEventListener(`keydown`, escKeyDownButtonHandler);
    }
  };

  const tripEvent = new TripEventView(event);

  tripEvent.setClickHandler(() => {
    eventToFormReplaceHandler();
    document.addEventListener(`keydown`, escKeyDownButtonHandler);
  });

  const tripForm = new RenderEventFormView(event, event.id);

  tripForm.setSubmitHandler(() => {
    formToEventReplaceHandler();
    document.removeEventListener(`keydown`, escKeyDownButtonHandler);
  });

  render(eventsContainer, tripEvent);
};
