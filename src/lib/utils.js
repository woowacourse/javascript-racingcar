export const splitString = (str, separator) => str.split(separator);

export const isNumberBelowZero = (number) => number <= 0;

export const checkStringLength = (str, standard) => str.length <= standard;

export const pickNumberInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

// include types in JSDoc 라면 String Set은 어떻게 표현할 수 있나요 ?
/**
 * @params {Set<string>} idSet - 이미 존재하는 유저 아이디 Set
 * @returns {string} idStr - 유저 아이디(숫자 문자열)
 */
export const generateId = (idSet) => {
  let idStr = pickNumberInRange(0, 999999).toString().padStart(6, 0);
  while (idSet.has(idStr)) {
    idStr = pickNumberInRange(0, 999999).toString().padStart(6, 0);
  }
  return idStr;
};

export const findElement = (surfix, selector) => document.querySelector(`${surfix}${selector}`);

export const sleep = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));
