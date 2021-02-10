import { CAR } from '../utils/constant.js';

export const isValidLength = (name) => {
  return name.length <= CAR.MAX_NAME_LENGTH;
};

export const isBlank = (name) => {
  return name.length < CAR.MIN_NAME_LENGTH;
};
