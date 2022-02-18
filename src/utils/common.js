import { DISPLAY_NONE } from './constants.js';

export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

export const trimInArray = (array) => {
  return array.map((element) => element.trim());
};

export const displayNoneDOM = (array) => {
  array.forEach((element) => element.classList.add(DISPLAY_NONE));
};

export const displayDOM = (array) => {
  array.forEach((element) => element.classList.remove(DISPLAY_NONE));
};

export const generateRandomNumber = (start, end) => {
  return MissionUtils.Random.pickNumberInRange(start, end);
};
