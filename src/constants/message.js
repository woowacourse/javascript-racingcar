import { applyFunctionToValues } from "../utils/applyFunctionToObject.js";

const addErrorPrefix = (message) => `[ERROR] ${message}`;

const RAW_ERROR_MESSAGE = {
  invalidCarNameLength: "이름은 5자 이하여야 합니다.",
  invalidCarLength: "자동차는 2대 이상 100대 이하만 가능합니다.",
  duplicateCarName: "중복되지 않은 이름을 입력해주세요.",
  notCarType: "Car 인스턴스만 가능합니다.",

  notInteger: "정수를 입력해주세요.",
  invalidRoundNumber: "1 이상, 100 이하의 숫자를 입력해주세요.",
};

const CONSOLE_MESSAGE = Object.freeze({
  carNamesQuery: "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).",
  roundNumberQuery: "시도할 횟수는 몇 회인가요?",

  resultIntro: "실행 결과",
  mileageBoardForm: (name, mileage) => `${name} : ${"-".repeat(mileage)}`,
  winnerForm: (winner) => `최종 우승자 : ${winner.join(", ")}`,
});

const ERROR_MESSAGE = Object.freeze(applyFunctionToValues(RAW_ERROR_MESSAGE, addErrorPrefix));

export { ERROR_MESSAGE, CONSOLE_MESSAGE };
