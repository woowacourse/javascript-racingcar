const NO_WINNER_MESSAGE = '최종 우승자는 없습니다.';

const WINNER_PREFIX = '최종 우승자 : ';
const DIVIDE_SYMBOL = ', ';
const MOVE_SYMBOL = '-';
const DISPLAY_CURRENT_DISTANCE = (name, distance) =>
  `${name} : ${MOVE_SYMBOL.repeat(distance)}`;

const OutputView = {
  printCarCurrentDistance(car) {
    const name = car.getName();
    const distance = car.getDistance();

    this.printMessage(DISPLAY_CURRENT_DISTANCE(name, distance));
  },

  printWinner(calculValue) {
    const { hasWinner, winners } = calculValue;
    const message = hasWinner
      ? WINNER_PREFIX + winners.map((car) => car.getName()).join(DIVIDE_SYMBOL)
      : NO_WINNER_MESSAGE;
    this.printMessage(message);
  },

  printMessage(message) {
    // eslint-disable-next-line
    console.log(message);
  },
};

export default OutputView;
