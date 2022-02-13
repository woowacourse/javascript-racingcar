export const splitString = (str, separator) => str.split(separator);

export const isNumberBelowZero = (number) => number <= 0;

export const checkStringLengthOver = (str, standard) => str.length <= standard;

export const pickNumberInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

// 기능 요구 사항
// 1. id는 중복될 수 없다.
// 2. id는 6개의 숫자로 구성된 문자열이다.

const generateRandomIdString = () => pickNumberInRange(0, 999999).toString().padStart(6, 0);

/**
 * props : idArr(id 객체, 로직의 복잡도가 커짐을 고려)
 * return : id 문자열
 */
export const generateId = (idSet) => {
  let idStr = generateRandomIdString();
  while (idSet.has(idStr)) {
    idStr = generateRandomIdString();
  }
  return idStr;
};
