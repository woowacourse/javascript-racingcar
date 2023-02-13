const MESSAGE = Object.freeze({
  WINNERS: '가 최종 우승했습니다.',
});

const QUERY = Object.freeze({
  CAR_NAME:
    '경주할 자동차 이름을 1~5자의 알파벳으로 입력하세요. (이름은 쉼표(,)를 기준으로 구분)\n',
  TRY_COUNT: '시도할 회수는 몇회인가요? (1~10회 입력 가능)\n',
});

module.exports = {
  QUERY,
  MESSAGE,
};
