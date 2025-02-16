import {
  FORWARD_DASH,
  GAME_MESSAGE,
  SEPARATOR,
} from '../constants/systemMessages.js';

const OutputView = Object.freeze({
  printMessage(content) {
    console.log(content);
  },

  printBlank() {
    console.log();
  },

  printRaceStatus(racing) {
    racing.carList.forEach((car) => {
      const { name, position } = car.getCarStatus();
      OutputView.printMessage(`${name} : ${FORWARD_DASH.repeat(position)}`);
    });
  },

  printRaceWinner(racing) {
    OutputView.printMessage(
      `${GAME_MESSAGE.WINNER} ${racing.getWinner().join(`${SEPARATOR} `)}`,
    );
  },
});

export default OutputView;
