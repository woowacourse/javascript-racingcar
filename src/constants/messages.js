import { MAX_CAR_NAME_LENGTH, MIN_TRY_COUNT_NUM } from "./race.js";

export const INPUT = Object.freeze({
  CAR_NAMES: `경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n`,
  TRY_COUNT: `시도할 횟수는 몇 회인가요?\n`,
});

export const OUTPUT = Object.freeze({
  RESULT: `\n실행 결과`,
  FINAL_WINNER: "최종 우승자:",
});

export const ERROR = Object.freeze({
  IS_CAR_NAME_EMPTY: "자동차 이름이 비어있습니다.",
  IS_LENGTH_LONGER_THAN_FIVE: `자동차 이름은 ${MAX_CAR_NAME_LENGTH}글자 이내로 작성주세요.`,
  IS_TRY_COUNT_EMPTY: "시도할 횟수가 비어있습니다.",
  IS_NOT_ZERO: `${MIN_TRY_COUNT_NUM} 이상의 숫자를 입력해주세요.`,
  IS_NOT_NUMBER: "숫자를 입력해주세요.",
});
