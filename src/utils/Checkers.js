export const ListChecker = {
  isNoRepeatValue: (list) => list.length !== new Set(list).size,
  isLessThanValue: (list, value) => list.length < value,
};

export const StringChecker = {
  isMoreThanValue: (string, value) => string.length > value,
  isIncludeBlank: (string) => string.includes(' '),
  isNotRegString: (string, regExp) => !regExp.test(string),
};

export const NumberChecker = {
  isMoreThanValue: (number, value) => number > value,
  isLessThanValue: (number, value) => number < value,
};
