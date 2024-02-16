import deepFreeze from '../../utils/deepFeeze.js';

const PROGRESS_MESSAGE = deepFreeze({
  input_car_names: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  input_attempt_numbers: '시도할 횟수는 몇 회인가요?\n',
  round_result: (name, move) => `${name} : ${'-'.repeat(move)}`,
  final_winner: (winners) => `최종 우승자: ${winners.join(', ')}`,
});

export default PROGRESS_MESSAGE;
