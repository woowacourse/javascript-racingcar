export const selectDOM = (selector, parent = document) => parent.querySelector(selector);

export const splitString = (str, separator) => str.split(separator);

export const isNumberBelowZero = (number) => number <= 0;

export const checkStringInRange = (str, min, max) => str.length >= min && str.length <= max;

export const pickNumberInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const createElementWithClass = ({ tag = 'div', className }) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

export const createElementWithId = ({ tag = 'div', id }) => {
  const element = document.createElement(tag);
  element.id = id;
  return element;
};

// 기능 요구 사항
// 1. id는 중복될 수 없다.
// 2. id는 6개의 숫자로 구성된 문자열이다.
const generateRandomIdString = () => pickNumberInRange(0, 999999).toString().padStart(6, 0);

export const generateId = (idSet) => {
  let idStr = generateRandomIdString();
  while (idSet.has(idStr)) {
    idStr = generateRandomIdString();
  }
  return idStr;
};
