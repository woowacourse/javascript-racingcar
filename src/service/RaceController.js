import Cars from '../domain/Cars';
import Race from '../domain/Race';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import Console from '../utils/Console';

class RaceController {
  #cars;

  #race;

  async reInput(func) {
    try {
      return await func();
    } catch (err) {
      Console.print(err.message);
      return await this.reInput(func);
    }
  }

  async start() {
    await this.reInput(() => this.#initCars());
    await this.reInput(() => this.#initRace());

    OutputView.printResultMessage();
    for (let i = 0; i < this.#race.attemptNum; i++) {
      this.#cars.moveCars();
      const result = this.#cars.result;
      OutputView.printCarpositionAndName(result);
    }

    const winners = this.#cars.judgeWinner();
    OutputView.printWinners(winners);
  }

  async #initCars() {
    const carsName = await InputView.readCarsName();
    this.#cars = new Cars(carsName);
  }

  //TODO : race가 사라질 수 있음.. 사라지면 initAttemptNum으로 변경
  async #initRace() {
    const attemptNum = await InputView.readAttemptNum();
    this.#race = new Race(attemptNum);
  }
}

export default RaceController;
