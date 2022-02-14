const isOnlyNumbers = (value) => /^[0-9]*$/g.test(value);

const isNumberInRange = (max, value) => value > 0 && value <= max;

const isWithComma = (value) => value.indexOf(',') > -1;

const isLengthLimit = (values, min, max) => {
  if (values.length === 0) return false;
  return values.every((item) => item.length >= min && item.length <= max);
};

const isUniqueWord = (values) => values.length === new Set(values).size;

export {
  isOnlyNumbers,
  isNumberInRange,
  isWithComma,
  isLengthLimit,
  isUniqueWord,
};
