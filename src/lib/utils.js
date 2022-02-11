export const splitString = (str, separator) => str.split(separator);

export const isNumberBelowZero = (number) => number <= 0;

export const checkStringLength = (str, standard) => str.length <= standard;

export const pickNumberInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

// 기능 요구 사항
// 1. 아이디는 중복될 수 없다.
// 2. 아이디는 6개의 숫자로 구성된 문자열이다.

/**
 * props : idArr(아이디 객체, 로직의 복잡도가 커짐을 고려)
 * return : 아이디 문자열
 */
export const generateId = (idObj) => {
  let isUnique = false;
  let idStr;
  while (!isUnique) {
    idStr = pickNumberInRange(0, 999999).toString().padStart(6, 0);
    if (!idObj[idStr]) {
      isUnique = true;
    }
  }
  return idStr;
};
