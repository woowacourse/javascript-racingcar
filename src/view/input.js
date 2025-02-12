import retryUntilValid from "../utils/retryUntilValid.js";
import { validateCarNames } from "../utils/validateCarNames.js";
import { validateMoveCount } from '../utils/validateMoveCount.js'

export const getCarNames = async () => {
    return retryUntilValid("🚗 자동차 이름을 입력하세요 (쉼표로 구분, 5자 이하)\n ", validateCarNames);
};

export const getMoveCount = async () => {
    return retryUntilValid("시도할 횟수는 몇 회인가요?\n", validateMoveCount);
};