import Console from '../utils/Console';

const OutputView = {
  EMPTY_LINE: '',
  ERROR_MESSAGE_PREFIX: '[ERROR]',
  RACE_RESULT_TITLE: '실행 결과',
  WINNER_MESSAGE_SUFFIX: '가 최종 우승했습니다.',

  printWinners(winnerCars) {
    const winners = winnerCars.map((car) => car.getRaceState().name).join(', ');
    Console.print(`${winners}${OutputView.WINNER_MESSAGE_SUFFIX}`);
    Console.close();
  },

  printRaceStateTitle() {
    Console.print(OutputView.EMPTY_LINE);
    Console.print(OutputView.RACE_RESULT_TITLE);
  },

  printRaceState(cars) {
    const carResults = cars.map((car) => {
      const { name, position } = car.getRaceState();
      const progressBar = '-'.repeat(position);
      return `${name} : ${progressBar}`;
    });

    carResults.forEach((result) => Console.print(result));
    Console.print(OutputView.EMPTY_LINE);
  },

  printError(error) {
    Console.print(`${OutputView.ERROR_MESSAGE_PREFIX} ${error.message}`);
  },
};

export default OutputView;
