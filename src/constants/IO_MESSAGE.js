const IO_MESSAGE = Object.freeze({
  getCarName:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  getTryCount: '시도할 횟수는 몇 회인가요?\n',
  resultHeader: '\n실행 결과',
  getRaceResult: (name, raceResult) => `${name} : ${raceResult}`,
  getWinner: (winner) => `최종 우승자: ${winner}`,
  lineBreak: '',
});

export default IO_MESSAGE;
