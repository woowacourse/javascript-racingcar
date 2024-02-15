const PREFIX = '[ERROR]';

const ERROR = {
  query: `${PREFIX} 쿼리는 공백이 아닌 문자열이어야 한다.`,
  null: `${PREFIX} 입력은 공백이 될 수 없습니다.`,
  car_count: `${PREFIX} 자동차 대수는 2대 이상만 가능하다.`,
  car_name_duplicate: `${PREFIX} 자동차 이름은 중복될 수 없다.`,
  car_name_range: `${PREFIX} 자동차 이름은 1자 이상, 5자 이하만 가능하다.`,
  try_count_range: `${PREFIX} 시도 횟수는 자연수여야 합니다.`,
};

const INPUT = {
  car_name: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  try_count: '시도할 횟수는 몇 회인가요?\n',
};

const OUTPUT = {
  result: '\n실행 결과',
  winner: '최종 우승자:',
  colon: ':',
  advance: '-',
  combiner: ', ',
};

export default {
  ERROR,
  INPUT,
  OUTPUT,
};
