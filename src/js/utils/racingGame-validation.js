import {
  isWithComma,
  isLengthLimit,
  isUniqueWord,
  isOnlyNumbers,
} from './validator.js';

import nameStringToArray from './nameStringToArray.js';

const isCarNameInputCheck = (value) => {
  if (!isWithComma(value)) {
    alert(
      '자동차 이름을 최소 2개 이상 입력해주세요.\n(자동차 이름은 콤마로 구분합니다.)'
    );
    return false;
  }

  const names = nameStringToArray(value);
  if (!isLengthLimit(names, 1, 5)) {
    alert('자동차 이름은 1자에서 5자까지 입력할 수 있습니다.');
    return false;
  }

  if (!isUniqueWord(names)) {
    alert('중복되는 자동차 이름이 있습니다.');
    return false;
  }

  return true;
};

const isRaceTimeCheck = (value) => {
  if (!isOnlyNumbers(value)) {
    alert('시도 횟수는 1 이상의 숫자만 입력할 수 있습니다.');
    return false;
  }

  return true;
};

export { isCarNameInputCheck, isRaceTimeCheck };
