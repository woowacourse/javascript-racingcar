import { TRY_NUMBER_SETTING, CAR_SETTING } from "./setting.js";

const ERROR_PREFIX = "[ERROR]";

export const ERROR_MESSAGE = {
  carNameLengthOverFive: `${ERROR_PREFIX} 자동차 이름은 ${CAR_SETTING.maxCarName}글자 이하, ${CAR_SETTING.minCarName}이상이어야 합니다.`,
  carCount: `${ERROR_PREFIX} 자동차 갯수는 ${CAR_SETTING.minCarCount}개 이상, ${CAR_SETTING.maxCarCount}개 이하이어야 합니다.`,
  duplicateCarName: `${ERROR_PREFIX} 중복된 자동차 이름은 입력할 수 없습니다.`,
  tryNumberRange: `${ERROR_PREFIX} 시도 횟수는 ${TRY_NUMBER_SETTING.minTryNumber}회 이상, ${TRY_NUMBER_SETTING.maxTryNumber}회 이하이어야 합니다.`,
  tryNumberNotPositiveInteger: `${ERROR_PREFIX} 시도 횟수는 양의 정수여야 합니다.`,
};

export const INPUT_MESSAGE = {
  carName: "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  tryNumber: "시도할 횟수는 몇 회인가요?\n",
};

export const OUTPUT_MESSAGE = {
  raceResult: "실행 결과",
  winners: "최종 우승자:",
};
