import Console from '../utils/Console.js';

const REQUEST_MSG = {
  carNames: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  raceRound: '시도할 회수는 몇회인가요?\n',
};

const InputView = {
  readCarNames() {
    return Console.question(REQUEST_MSG.carNames);
  },

  readRaceRound() {
    return Console.question(REQUEST_MSG.raceRound);
  },
};

export default InputView;
