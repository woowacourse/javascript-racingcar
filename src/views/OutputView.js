import { ErrorMessages, Messages } from '../constants/Messages';
import Console from '../utils/Console';

class OutputView {
  static printWinners(winnerCars) {
    const winners = winnerCars.map((car) => car.getName()).join(', ');
    Console.printf(Messages.PRINT_WINNERS, winners);
  }

  static printRaceStateTitle() {
    Console.print('');
    Console.print(Messages.PRINT_RACE_STATE_TITLE);
  }

  static printRaceState(cars) {
    const carResults = cars.map((car) => {
      const progressBar = '-'.repeat(car.getPosition());
      return `${car.getName()} : ${progressBar}`;
    });
    carResults.forEach((result) => Console.print(result));
    Console.print('');
  }

  static printError(error) {
    Console.print(`${ErrorMessages.PREFIX} ${error.message}`);
  }
}

export default OutputView;
