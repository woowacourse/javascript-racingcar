export const isStringEmpty = (string) => string.trim() === '';

export const isInRange = (value, min, max) => value >= min && value <= max;

export const isMoreThanMax = (value, max) => value > max;

export const isLessThanMin = (value, min) => value < min;

export const isDuplicated = (arr) => new Set(arr).size !== arr.length;

export const isNumber = (number) => !Number.isNaN(number);

export const isInteger = (number) => Number.isInteger(number);
