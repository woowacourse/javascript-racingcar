import { SYMBOLS } from '../../constants/symbols.js';

// CarNameValidator 디렉터리 내에서만 사용할 것!

export const CAR_NAME_REGEX = /^[a-z0-9A-Z가-힣]+([,][a-z0-9A-Z가-힣]*)*[,]?$/;

export const CAR_LENGTH_RANGE = Object.freeze({
  min: 2,
});

export const CAR_NAME_RANGE = Object.freeze({
  min: 1,
  max: 5,
});

export const ERROR_MESSAGE_REGEX = `자동차 이름은 ${SYMBOLS.comma}로만 구분 가능합니다.`;
export const ERROR_MESSAGE_DUPLICATE = `중복된 자동차 이름이 존재합니다.`;
export const ERROR_MESSAGE_CAR_LENGTH_MIN = `자동차는 ${CAR_LENGTH_RANGE.min}대 이상 부터 가능합니다.`;
export const ERROR_MESSAGE_CAR_NAME_RANGE = `자동차 이름은 ${CAR_NAME_RANGE.min} ~ ${CAR_NAME_RANGE.max}자의 범위만 가능합니다.`;
