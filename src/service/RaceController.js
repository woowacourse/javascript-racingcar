import Cars from '../domain/Cars';
import Race from '../domain/Race';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';

class RaceController {
  #cars;

  #race;

  async start() {
    const carsName = await InputView.readCarsName();
    this.#cars = new Cars(carsName);

    const attemptNum = await InputView.readAttemptNum();
    this.#race = new Race(attemptNum);

    for (let i = 0; i < this.#race.attemptNum; i++) {
      this.#cars.moveCars();
      const result = this.#cars.result;
      OutputView.printResultMessage();
      OutputView.printCarpositionAndName(result);
    }

    const winners = this.#cars.judgeWinner();
  }

  racinggg() {}
}

export default RaceController;
