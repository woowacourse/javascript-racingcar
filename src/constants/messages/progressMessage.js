import deepFreeze from '../../utils/deepFeeze.js';

const PROGRESS_MESSAGE = deepFreeze({
  INPUT_CAR_NAMES: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  INPUT_ATTEMPT_NUMBERS: '시도할 횟수는 몇 회인가요?\n',
  FINAL_WINNER: '최종 우승자:',
});

export default PROGRESS_MESSAGE;
