import { RULES } from '../constants/index.js';

export const convertToNumber = (value) => parseInt(value, 10);

export const isNotNaturalNumber = (number) => {
  return number < 1 || Math.floor(number) !== number;
};

export const isEmpty = (value) => {
  return value === '';
};

export const isExceedLength = (value) => {
  return value.length > RULES.MAX_CAR_NAME_LENGTH;
};

export const isNotNumberType = (value) => {
  return typeof value !== 'number';
};

export const generateRandomNumber = () => Math.floor(Math.random() * 10);

export const delay = (miliSecond) => new Promise((resolve) => setTimeout(resolve, miliSecond));
