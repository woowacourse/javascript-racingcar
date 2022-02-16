import { MIN_CAR_COUNT, MIN_RACE_COUNT } from "./games.js";

export const EXCEPTIONS = {
  INVALID_CAR_NAMES: `조건에 맞게 중복 없이 ${MIN_CAR_COUNT}대 이상을 입력해주세요.`,
  INVALID_RACE_COUNT: `${MIN_RACE_COUNT} 이상의 정수를 입력해주세요.`,
};
