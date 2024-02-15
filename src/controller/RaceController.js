import CarRace from '../domains/CarRace.js';

import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

import carNamesValidator from '../validators/carNamesValidator';
import tryCountValidator from '../validators/tryCountValidator';

class RaceController {
  #carRace;

  constructor() {
    this.#carRace = null;
  }

  async #processCarNames() {
    try {
      const carNames = await InputView.readCarNames();
      carNamesValidator.validate(carNames);
      return carNames;
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.#processCarNames();
    }
  }

  async #processTryCount() {
    try {
      const tryCount = await InputView.readTryCount();
      tryCountValidator.validate(tryCount);
      return tryCount;
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.#processTryCount();
    }
  }

  async #initCarRace() {
    const carNames = await this.#processCarNames();
    this.#carRace = new CarRace(carNames);
  }

  // tryCount 만큼 경주 결과 보드 만들기
  // OutputView에 전달하기

  // plaryRount -> 한 라운드만 담당하는 함수
  async #playCarRace() {
    const tryCount = await this.#processTryCount();

    Array.from({ length: tryCount }, () => {
      const roundResult = this.#carRace.makesRoundResult();
      OutputView.printRoundResult(roundResult);
    });
  }

  #announceWinners() {
    const winners = this.#carRace.judgeWinners();
    OutputView.printWinners(winners);
  }

  // gameStart
  async run() {
    await this.#initCarRace();
    await this.#playCarRace();
    this.#announceWinners();
  }
}

export default RaceController;
