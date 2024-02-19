import Garage from "./Garage.js";
import MESSAGE from "../constants/Message.js";
import InputView from "../view/InputView.js";
import StringParser from "../utils/StringParser.js";
import getInputUntilValid from "../utils/getInputUntilValid.js";
import { carValidation } from "./CarValidation.js";
import { attemptValidation } from "./attemptValidation.js";

class RacingCarGame {
  #garage = null;
  #carNameList = [];
  #attempt = 0;

  constructor() {}

  async #setValidCarList() {
    await getInputUntilValid(this.#setCarList.bind(this));
  }

  #setCars(carNames) {
    carNames.forEach((carName) => {
      carValidation.validateCarName(carName);
      this.#carNameList.push(carName);
    });

    this.#garage = new Garage([...this.#carNameList]);
  }

  async #setCarList() {
    const carNameInput = await InputView.readCarNames();
    const parsedCarNames = StringParser.splitCarNames(carNameInput);

    carValidation.validateCarNameList(parsedCarNames);
    this.#setCars(parsedCarNames);
  }

  async #setValidAttempt() {
    await getInputUntilValid(this.#setAttempt.bind(this));
  }

  async #setAttempt() {
    const attemptInput = await InputView.readAttempt();
    attemptValidation.validateAttempt(attemptInput);

    this.#attempt = Number(attemptInput);
  }

  async #setGame() {
    await this.#setValidCarList();
    await this.#setValidAttempt();
  }

  #runAttempts() {
    while (this.#attempt--) {
      this.#garage.runAttempt();
      const carStatusList = this.#garage.getCarStatus();

      console.log(MESSAGE.carStatusListFormat(carStatusList));
      console.log("");
    }
  }

  #printWinners() {
    const winnerNameList = this.#garage.findWinners();
    console.log(
      `${MESSAGE.winnerTitle} : ${StringParser.concatElements(winnerNameList)}`
    );
  }

  #playGame() {
    console.log(MESSAGE.attemptTitle);
    this.#runAttempts();
    this.#printWinners();
  }

  async play() {
    await this.#setGame();
    this.#playGame();
  }
}

export default RacingCarGame;
