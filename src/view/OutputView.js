import { Converter } from '../utils/index.js';

const OutputView = {
  printResultMessage() {
    console.log(RESULT_MESSAGE.opening);
  },

  printErrorMessage(message) {
    console.log(message);
  },

  printRoundResult(roundResult) {
    const templates = roundResult.map(({ name, position }) => {
      const positionScore = Converter.numberToDash(position);

      return `${name} : ${positionScore}`;
    });

    const result = Converter.arrayToString(templates, '\n');

    console.log(`${result}\n`);
  },

  printFinalResult(winners) {
    const winnersName = Converter.arrayToString(winners, ', ');

    console.log(`${winnersName}${RESULT_MESSAGE.ending}`);
  },
};

const RESULT_MESSAGE = {
  opening: '\n실행 결과',
  ending: '(이)가 최종 우승했습니다.',
};

export default OutputView;
