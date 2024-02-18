import handleIO from "../utils/handleIO.js";

const CAR_NAMES_PROMPT = "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n";
const TRY_COUNT_PROMPT = "시도할 횟수는 몇 회인가요?\n";

const InputView = {
  async readCarNames() {
    return handleIO.read(CAR_NAMES_PROMPT);
  },

  async readTryCount() {
    return handleIO.read(TRY_COUNT_PROMPT);
  },
};

export default InputView;
