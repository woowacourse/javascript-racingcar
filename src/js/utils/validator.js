const isOnlyNumbers = (value) => /^[0-9]*$/g.test(value);

const isNumberInRange = (max, value) => value > 0 && value <= max;

const isWithComma = (value) => value.indexOf(',') > -1;

const hasValidLengthInArray = (array, min, max) => {
  if (isEmptyArray(array)) return false;
  return array.every((item) => item.length >= min && item.length <= max);
};

const isEmptyArray = (array) => array.length === 0;

const isUniqueWord = (values) => values.length === new Set(values).size;

export {
  isOnlyNumbers,
  isNumberInRange,
  isWithComma,
  hasValidLengthInArray,
  isUniqueWord,
};
