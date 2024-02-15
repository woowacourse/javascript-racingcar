import Race from '../domain/Race';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import Console from '../utils/Console';

class RaceController {
  #race;

  constructor() {
    this.#race = new Race();
  }

  // TODO: reInput이라는 이름이 어떤 상황에서 재입력을 받는지 나타내고 있지 않음. 함수 이름 변경 제안.
  // TODO: reInput이라는 로직이 컨트롤러에 있는 게 맞을까? util 함수로 분리되어야 하지 않을까?
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
    await this.reInput(() => this.#initAttemptNum());

    this.#gameCycleStart();
    this.#gameCycleEnd();
  }

  async #initCars() {
    const carsName = await InputView.readCarsName();
    this.#race.cars = carsName;
  }

  async #initAttemptNum() {
    const attemptNum = await InputView.readAttemptNum();
    this.#race.attemptNum = attemptNum;
  }

  #gameCycleStart() {
    OutputView.printResultMessage();
    this.#race.gameCycle(cycleResult => OutputView.printNameAndCarPosition(cycleResult));
  }

  #gameCycleEnd() {
    const winners = this.#race.judgeWinner();
    OutputView.printWinners(winners);
  }
}

export default RaceController;
