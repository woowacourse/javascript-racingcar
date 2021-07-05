export const isValidLength = (word, minLength, maxLength) =>
  word.length <= maxLength && word.length >= minLength;

export const isIncludingBlank = (word) => word.includes(' ');

export const isDuplicated = (words) =>
  words.some((word) => words.indexOf(word) !== words.lastIndexOf(word));

export const isCompleteWord = (word) => /[가-힣a-zA-Z0-9]/.test(word);

export const isInteger = (number) => Number.isInteger(number);

export const isPositiveNumber = (number) => number > 0;
