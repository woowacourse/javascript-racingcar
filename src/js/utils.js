import { CLASSNAME, RANDOM_NUMBER } from "./constants.js";

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

//공백문자가 포함된 이름의 경우 아래와 같이 처리한다.
// 1. 문자열 처음과 끝에 공백문자가 포함된 경우: 무시한다
// 2. 문자열 내에 공백문자를 포함한 경우:
//  input: "EAST, WEST, SO  UTH, Da L  "
//  expect: ["EAST", "WEST", "SO  UTH", "Da L"]
// => 자동차 이름이 1글자 또는 2글자인 경우, 이는 공백문자와 쉼표(,)가 아니다
// => 자동차 이름이 3글자 이상인 경우, 처음과 끝만 공백문자와 쉼표(,)가 아니다
export const splitCarName = (str) =>
  str.match(/(?<=\s*)([^\s,]|[^\s,]{2}|[^\s,][^,]+[^\s,])(?=,\s*|\s*$)/g) || [];

export const $ = (selector) => document.querySelector(selector);

export const show = (selector) => showElement($(selector));

export const hide = (selector) => hideElement($(selector));

export const showElement = ($element) =>
  $element.classList.remove(CLASSNAME.MODIFIER.HIDDEN);

export const hideElement = ($element) =>
  $element.classList.add(CLASSNAME.MODIFIER.HIDDEN);

export const disable = (selector) => ($(selector).disabled = true);

export const enable = (selector) => ($(selector).disabled = false);

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
