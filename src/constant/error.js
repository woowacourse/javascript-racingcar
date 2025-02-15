import { MIN, MAX } from "./range.js";

const ERROR = Object.freeze({
  HEADER: "[⛔️WARNING⛔️]",
  MIN_CAR_COUNT: `자동차는 최소 ${MIN.CAR_COUNT}대 이상 필요합니다. 쉼표(,)를 기준으로 구분해주세요.`,
  NAME_LENGTH: `이름은 ${MIN.NAME_LENGTH}자 이상 ${MAX.NAME_LENGTH}자 이하만 가능합니다.`,
  RACE_COUNT: `횟수는 ${MIN.RACE_COUNT}이상 필요합니다.`,
  RACE_COUNT_INTEGER: "횟수는 정수여야 합니다.",
  RACE_COUNT_NUMBER: "횟수는 숫자여야 합니다.",
});

export default ERROR;
