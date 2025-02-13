import retryUntilValid from "../utils/retryUntilValid.js";
import { validateCarNames } from "../utils/validateCarNames.js";
import { validateMoveCount } from "../utils/validateMoveCount.js";

const PROMPT = {
  GET_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  GET_MOVE_COUNT: "시도할 횟수는 몇 회인가요?\n"
};

export const getCarNames = async () => {
  return retryUntilValid(PROMPT.GET_CAR_NAMES, validateCarNames);
};

export const getMoveCount = async () => {
  return retryUntilValid(PROMPT.GET_MOVE_COUNT, validateMoveCount);
};
