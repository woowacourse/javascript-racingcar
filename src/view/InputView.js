import Console from '../utils/Console';

const InputView = {
  CAR_NAMES_QUESTION: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
  RACE_STEP_QUESTION: '시도할 회수는 몇회인가요?',

  async readCarNames() {
    const answer = await Console.readline(InputView.CAR_NAMES_QUESTION);
    const carNames = answer.split(',');

    return carNames;
  },

  async readRaceStep() {
    const answer = await Console.readline(InputView.RACE_STEP_QUESTION);
    const raceStep = Number(answer);

    return raceStep;
  },
};

export default InputView;
