import { applyFunctionToValues } from "../utils/applyFunctionToValues.js";

const addErrorPrefix = (message) => `[ERROR] ${message}`;

const RAW_ERROR_MESSAGE = {
  invalidCarNameLength: "이름은 5자 이하로 입력해주세요.",
  carNameIsBlank: "이름을 1자 이상 입력해주세요.",
  invalidCarLength: "자동차는 2대 이상 100대 이하만 가능합니다.",
  duplicateCarName: "자동차 이름이 중복되지 않게 입력해주세요.",
  notCarType: "Car 인스턴스만 가능합니다.",

  notInteger: "정수로 입력해주세요.",
  invalidRoundNumber: "1 이상, 100 이하의 숫자를 입력해주세요.",
};

const MILEAGE_MARK = "-";

const CONSOLE_MESSAGE = Object.freeze({
  carNamesQuery:
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).",
  roundNumberQuery: "시도할 횟수는 몇 회인가요?",

  resultIntro: "실행 결과",
  mileageBoardForm: (name, mileage) =>
    `${name} : ${MILEAGE_MARK.repeat(mileage)}`,
  winnersForm: (winners) => `최종 우승자 : ${winners.join(", ")}`,
});

const ERROR_MESSAGE = Object.freeze(
  applyFunctionToValues(RAW_ERROR_MESSAGE, addErrorPrefix)
);

export { ERROR_MESSAGE, CONSOLE_MESSAGE };
