import { CAR_NAME_LENGTH, MIN_CAR_COUNT, MIN_RACE_COUNT } from "./games.js";

export const EXCEPTIONS = {
  INVALID_CAR_NAMES: `차 이름을 중복 없이 ${MIN_CAR_COUNT}대 이상을 입력해주세요.`,
  INVALID_CAR_NAME_LENGTH: `자동차 이름은 ${CAR_NAME_LENGTH.MIN}자 이상 ${CAR_NAME_LENGTH.MAX}자 이하로 입력해주세요.`,
  DUPLICATED_CAR: "중복된 자동차가 존재합니다!",
  INVALID_RACE_COUNT: `${MIN_RACE_COUNT}이상의 정수를 입력해주세요.`,
};
