import { RANDOM_NUMBER } from "./constants.js";

// minInteger와 maxInteger를 사용하지 않고 매개변수인 min, max 를 그대로 사용하여 반환값을 계산하는 경우에는
// min 이하 또는 max 이상의 정수가 반환될 가능성이 있다.
// 잘못된 예시) min = 2.5   max = 6.3  => 반환값의 범위: [2, 7]
export const getRandomIntInclusive = (min, max) => {
  const minInteger = Math.ceil(min);
  const maxInteger = Math.floor(max);

  return Math.floor(Math.random() * (maxInteger - minInteger + 1) + minInteger);
};

const canMoveForward = () => {
  const {
    RANGE: { MIN, MAX },
    MOVING_POINT,
  } = RANDOM_NUMBER;

  return getRandomIntInclusive(MIN, MAX) >= MOVING_POINT;
};

export const getLapResult = (numberCars) =>
  Array.from(Array(numberCars), canMoveForward);

export const splitCarName = (str) =>
  str.match(/(?<=\s*)([^\s,]+?)(?=,\s*|\s*$)/g) || [];

export const $ = (selector) => document.querySelector(selector);
