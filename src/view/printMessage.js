import { FORWARD_DASH, GAME_MESSAGE } from '../constants/systemMessages.js';

const Printer = Object.freeze({
  printMessage(content) {
    console.log(content);
  },

  printBlank() {
    console.log();
  },

  printRaceStatus(racing) {
    racing.carList.forEach((car) => {
      const { name, position } = car.getCarStatus();
      Printer.printMessage(`${name} : ${FORWARD_DASH.repeat(position)}`);
    });
  },

  printRaceWinner(racing) {
    Printer.printMessage(`${GAME_MESSAGE.WINNER} ${racing.getWinner()}`);
  },
});

export default Printer;
