import {VALID} from '../constants/constant.js';

export const isCountExist = (count) => {
  return !!count;
};

export const isCountNaN = (count) => {
  return isNaN(parseInt(count, 10));
};

export const isCountUnderMinCount = (count) => {
  return parseInt(count, 10) < VALID.COUNT_MIN_NUM;
};

export const isCountFloat = (count) => {
  return parseInt(count, 10) !== parseFloat(count);
};
