const OutputMessage = Object.freeze({
  resultHeader: '\n실행 결과',
  getRaceResult: (name, raceResult) => `${name} : ${raceResult}`,
  getWinner: (winner) => `최종 우승자: ${winner}`,
  lineBreak: '',
});

export default OutputMessage;
