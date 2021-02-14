// 랜덤 값 만들기 ( 0~9)
export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const $ = selector => {
  return document.querySelector(selector);
};

export const $$ = selector => {
  return document.querySelectorAll(selector);
};
