import { NUMBER_FOR_MOVE } from './constants.js';

export const $ = (selector) => document.querySelector(`.${selector}`);
export const $$ = (selector) => document.querySelectorAll(`.${selector}`);

export const trimInArray = (array) => {
  return array.map((element) => element.trim());
};

export const makeDOMDisplayNone = (element, classNameForDisplayNone) => {
  element.classList.add(classNameForDisplayNone);
};

export const makeDOMDisplayNotNone = (element, classNameForDisplayNone) => {
  element.classList.remove(classNameForDisplayNone);
};

export const generateRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(
    NUMBER_FOR_MOVE.MIN_NUMBER,
    NUMBER_FOR_MOVE.MAX_NUMBER,
  );
};

export const wait = (delay) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay),
  );
};
