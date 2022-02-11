export const splitString = (str, separator) => str.split(separator);

export const isNumberBelowZero = (number) => number <= 0;

export const checkStringLength = (str, standard) => str.length <= standard;

export const pickNumberInRange = (min, max) => Math.random() * (max - min) + min;
