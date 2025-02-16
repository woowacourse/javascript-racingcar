import { MAX, MIN } from './rules.js';

const ERROR_PREFIX = '[Error]';

export const CAR_NAMES = {
  LENGTH: `${ERROR_PREFIX} 자동차 이름은 ${MAX.CAR_NAME_LENGTH}자 초과 안됩니다.`,
  FORM: `${ERROR_PREFIX} 자동차 이름이 올바르지 않습니다.`,
  DUPLICATED: `${ERROR_PREFIX} 중복된 자동차 이름은 안됩니다.`,
};

export const GAME_COUNT = {
  TYPE: `${ERROR_PREFIX} 시도 횟수는 공백,소수,문자열,NaN,Infinity 안됩니다.`,
  RANGE: `${ERROR_PREFIX} 시도 횟수는 ${MIN.GAME_COUNT}이하, ${MAX.GAME_COUNT}이상 안됩니다.`,
};
