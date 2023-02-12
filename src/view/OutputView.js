import Console from '../util/Console';

const OutputView = {
  EMPTY_LINE: '',
  ERROR_MESSAGE_PREFIX: '[ERROR]',
  RACE_RESULT_TITLE: '실행 결과',
  WINNER_MESSAGE_SUFFIX: '가 최종 우승했습니다.',

  printWinners(winnerNames) {
    Console.print(`${winnerNames.join(', ')}${OutputView.WINNER_MESSAGE_SUFFIX}`);
  },

  printRaceTitle() {
    Console.print(OutputView.EMPTY_LINE);
    Console.print(OutputView.RACE_RESULT_TITLE);
  },

  printRaceState(raceStates) {
    raceStates.forEach(({ name, position }) => {
      Console.print(`${name}: ${'-'.repeat(position)}`);
    });

    Console.print(OutputView.EMPTY_LINE);
  },

  printError(error) {
    Console.print(`${OutputView.ERROR_MESSAGE_PREFIX} ${error.message}`);
  },
};

export default OutputView;
