export const MESSAGE = Object.freeze({
  naming: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
  tryCount: '시도할 회수는 몇회인가요?',
  resultTitle: '실행 결과',
  carProgress: ({ name, distance }) => `${name} : ${'-'.repeat(distance)}`,
  winner: (winnerList) => `${winnerList.join(', ')}가 최종 우승했습니다.`,
  blank: '',
});

export const MOVE_NUMBER = Object.freeze({
  randomMin: 0,
  randomMax: 9,
  threshold: 4,
});
