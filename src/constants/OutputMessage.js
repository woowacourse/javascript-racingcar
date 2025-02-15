export const OUTPUT_MESSAGE = Object.freeze({
  raceResultHeader: '\n실행 결과',
  lineBreak: '',
});

export const OUTPUT_FORMAT = Object.freeze({
  raceResultPhrase: (name, raceResult) => `${name} : ${raceResult}`,
  winnerPhrase: (winner) => `최종 우승자: ${winner}`,
});
