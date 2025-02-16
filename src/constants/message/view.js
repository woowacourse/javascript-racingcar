import { CAR_RULE } from "../rule/car.js";

export const VIEW_MESSAGE = Object.freeze({
  CAR_NAME_INPUT: `경주할 자동차 이름을 입력하세요(이름은 구분자(${CAR_RULE.NAME_SEPARATOR})를 기준으로 구분).`,
  ATTEMPT_COUNT: "시도할 횟수는 몇회인가요?",
  EXECUTION_RESULT: "실행 결과",
  WINNER_RESULT: "최종 우승자: ",
});
