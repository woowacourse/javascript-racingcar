import Race from "./domain/Race.js";
import InputHandler from "./input/InputHandler.js";
import OutputView from "./views/OutputView.js";
import { LINE_BREAK, OUTPUT_MESSAGE } from "./constants/Constants.js";

class App {
  async run() {
    const carList = await InputHandler.getCarNameList();
    const attemptCount = await InputHandler.getAttemptCount();
    const race = new Race(carList)

    OutputView.print(OUTPUT_MESSAGE.RESULT);
    OutputView.print(LINE_BREAK);

    for(let i = 0; i < attemptCount; i++){
      const carListStatus = race.executeTurn();
      carListStatus.forEach((car)=>{
        OutputView.print(`${car.name} : ${"-".repeat(car.position)}`);
      })
      OutputView.print(LINE_BREAK)
    }

    const winnerList = race.getWinnerName();
    OutputView.print(`${OUTPUT_MESSAGE.WINNER} ${winnerList.join(", ")}`);
  }
}

export default App;
