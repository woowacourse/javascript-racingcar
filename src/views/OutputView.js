import { ErrorMessages, Messages } from '../constants/Messages';
import Console from '../utils/Console';

const OutputView = {
  printWinners(winnerCars) {
    const winners = winnerCars.map((car) => car.getRaceState().name).join(', ');
    Console.print(`${winners}${Messages.PRINT_WINNERS_SUFFIX}`);
    Console.close();
  },

  printRaceStateTitle() {
    Console.print('');
    Console.print(Messages.PRINT_RACE_STATE_TITLE);
  },

  printRaceState(cars) {
    const carResults = cars.map((car) => {
      const { name, position } = car.getRaceState();
      const progressBar = '-'.repeat(position);
      return `${name} : ${progressBar}`;
    });

    carResults.forEach((result) => Console.print(result));
    Console.print('');
  },

  printError(error) {
    Console.print(`${ErrorMessages.PREFIX} ${error.message}`);
  },
};

export default OutputView;
