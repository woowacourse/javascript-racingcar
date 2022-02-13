import nameStringToArray from './nameStringToArray.js';

const isOnlyNumbers = (value) => /^[0-9]*$/g.test(value) && value > 0;
const isWithComma = (value) => value.indexOf(',') > -1;
const isArrayItemLengthRange = (values, min, max) => {
  return values.every((item) => item.length >= min && item.length <= max);
};
const isUniqueWord = (values) => values.length === new Set(values).size;

export const isCarNameValid = (value) => {
  if (!isWithComma(value)) {
    alert(
      '자동차 이름을 최소 2개 이상 입력해주세요.\n(자동차 이름은 콤마로 구분합니다.)'
    );
    return false;
  }

  const names = nameStringToArray(value);
  if (!isArrayItemLengthRange(names, 1, 5)) {
    alert('자동차 이름은 1자에서 5자까지 입력할 수 있습니다.');
    return false;
  }

  if (!isUniqueWord(names)) {
    alert('중복되는 자동차 이름이 있습니다.');
    return false;
  }

  return true;
};

export const isRaceTimeValid = (value) => {
  if (!isOnlyNumbers(value)) {
    alert('시도 횟수는 1 이상의 숫자만 입력할 수 있습니다.');
    return false;
  }

  return true;
};
