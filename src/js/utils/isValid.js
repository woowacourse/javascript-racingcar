export const isNaturalNumber = (value, min = 0, max = -1) =>
  /^[0-9]*$/g.test(value) && value > min && ((max >= 0 && value <= max) || max === -1);

export const isWithComma = (value) => value.indexOf(',') > -1;

export const isArrayItemLengthRange = (values, min, max) =>
  values.every((item) => item.length >= min && item.length <= max);

export const isUniqueWord = (values) => values.length === new Set(values).size;
