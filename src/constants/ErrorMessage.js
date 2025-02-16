import { NUMBER } from "./Number.js";
export const ERROR_MESSAGE = Object.freeze({
  INVALID_NAME_LENGTH: `ERROR : 자동차 이름은 ${NUMBER.MIN_CAR_NAME_LENGTH}이상 ${NUMBER.MAX_CAR_NAME_LENGTH}이하여야 합니다.\n`,
  DUPLICATED_NAME: "ERROR : 자동차 이름은 중복될 수 없습니다.\n",
  INVALID_NAME: "ERROR : 자동차 이름은 특수기호 만으로 구성될 수 없습니다.",
  INVALID_CARS_LENGTH: `ERROR : 자동차 수는 ${NUMBER.MIN_CAR_LIST_LENGTH}이상 ${NUMBER.MAX_CAR_LIST_LENGTH}이하여야 합니다.`,
  TRY_COUNT_NOT_NUMBERIC: "ERROR : 시도 횟수는 숫자여야 합니다.",
  TRY_COUNT_NOT_POSITIVE: "ERROR : 시도 횟수는 양의 정수여야 합니다.",
  TRY_COUNT_NOT_UPPER_THEN_100: `ERROR: 시도 횟수는 ${NUMBER.MAX_TRY_COUNT}이하여야 합니다.`,
});
