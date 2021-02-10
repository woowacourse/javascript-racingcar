import { CAR } from '../utils/constant.js';

export const isValidLength = (name) => {
  return name.length <= CAR.MAX_NAME_LENGTH;
};

export const isNotBlank = (name) => {
  return name.length >= CAR.MIN_NAME_LENGTH;
};
