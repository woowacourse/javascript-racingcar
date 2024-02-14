import Console from '../utils/Console.js';

const RESULT_TITLE = '\n실행 결과';
const COLON = ':';
const ADVANCE = '-';
export const COMMA = ',';
const WINNER_TITLE = '최종 우승자';

class OutputView {
  printResultTitle() {
    Console.print(RESULT_TITLE);
  }

  printCarResult(carName, carAdvance) {
    Console.print(`${carName} ${COLON} ${ADVANCE.repeat(carAdvance)}`);
  }

  printRacingResult(cars) {
    cars.forEach(({ name, location }) => {
      this.printCarResult(name, location);
    });
    Console.print(' ');
  }

  printWinners(names) {
    Console.print(`${WINNER_TITLE}${COLON} ${names.join(COMMA + ' ')}`);
  }
}

export default OutputView;
