import Race from "./domain/Race.js";
import InputHandler from "./input/InputHandler.js";
import OutputView from "./views/OutputView.js";
import { LINE_BREAK, OUTPUT_MESSAGE } from "./constants/Constants.js";

class App {
  async run() {
    const carNameList = await InputHandler.getCarNameList();
    const attemptCount = await InputHandler.getAttemptCount();
    const race = new Race(carNameList)

    OutputView.print(OUTPUT_MESSAGE.RESULT);
    for(let i = 0; i < attemptCount; i++){
      race.executeTurn();
      OutputView.print(LINE_BREAK)
    }

    const winnerList = race.getWinnerName();
    OutputView.print(`${OUTPUT_MESSAGE.WINNER} ${winnerList.join(", ")}`);
  }
}

export default App;
