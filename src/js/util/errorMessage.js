import { CAR_NAME_MAX_LENGTH } from './constant.js';

export const ERROR_MESSAGE = {
  EMPTY_CAR_NAME_INPUT:
    '아무 값도 입력하지 않았습니다. 2대 이상의 자동차 이름을 콤마(,)로 구분해 입력해주세요.',
  ONE_CAR_NAME_INPUT:
    '1대의 자동차 이름을 입력하셨습니다. 2대 이상의 자동차 이름을 콤마(,)로 구분해 입력해주세요.',
  EMPTY_STRING_CAR_NAME_INPUT: `자동차 이름은 빈 문자열이 될 수 없습니다. ${CAR_NAME_MAX_LENGTH}자 이하의 자동차 이름을 입력해주세요.`,
  DUPLICATED_CAR_NAME_INPUT: `중복된 자동차 이름은 사용할 수 없습니다. 중복되지 않은 ${CAR_NAME_MAX_LENGTH}자 이하의 자동차 이름을 입력해주세요.`,
  OVER_MAX_LENGTH_CAR_NAME_INPUT: `자동차 이름은 ${CAR_NAME_MAX_LENGTH}자를 넘을 수 없습니다. ${CAR_NAME_MAX_LENGTH}자 이하의 자동차 이름을 입력해주세요.`,
  NOT_NATURAL_NUMBER:
    '입력한 값은 자연수가 아닙니다. 시도횟수를 자연수로 입력해주세요.',
};
