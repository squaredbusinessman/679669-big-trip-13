// функция фиксации необходимого нам контекста

export const bindContext = function (context, fn) {
  return function (...args) {
    return fn.call(context, ...args);
  };
};
