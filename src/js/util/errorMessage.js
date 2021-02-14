import { CAR_NAME_MAX_LENGTH } from './constants.js';

export const ERROR_MESSAGE = {
  EMPTY_CAR_NAME_INPUT: '이름이 존재하지 않습니다.',
  ONE_CAR_NAME_INPUT: '2개 이상의 자동차 이름을 입력해주세요.',
  EMPTY_STRING_CAR_NAME_INPUT: '자동차 이름은 빈 문자열이 될 수 없습니다.',
  DUPLICATED_CAR_NAME_INPUT: '중복된 자동차 이름은 사용할 수 없습니다.',
  OVER_MAX_LENGTH_CAR_NAME_INPUT: `자동차 이름은 ${CAR_NAME_MAX_LENGTH}자 이하만 가능합니다.`,
  NOT_NATURAL_NUMBER: '자연수를 입력해주세요.',
};
