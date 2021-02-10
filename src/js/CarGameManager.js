import CarGameView from './CarGameView.js';
import Car from './Car.js';
import CarNameValidator from './CarNameValidator.js';
import { CAR_NAME_ERROR_MESSAGE, TRY_COUNT_ERROR_MESSAGE } from './constants.js';
import TryCountValidator from './TryCountValidator.js';
import RacingCarGame from './RacingCarGame.js';

export default class CarGameManager {
  constructor($element) {
    this.$element = $element;
    this.carGameView = new CarGameView($element);
    this.cars = [];
    this.carNames = [];
    this.bindInputCarNamesEvent();
    this.bindInputTryCountEvent();
    this.bindResetEvent();
  }

  initGame() {
    this.carGameView.init();
    this.cars = [];
    this.carNames = [];
  }

  bindInputCarNamesEvent() {
    document.querySelector('#input-car-names > div > button').addEventListener('click', () => {
      this.carNamesInputHandler();
    });
  }

  bindInputTryCountEvent() {
    document.querySelector('#input-try-count > div > button').addEventListener('click', () => {
      this.tryCountInputHandler();
    });
  }

  bindResetEvent() {
    document.querySelector('#display-game-result > div > button').addEventListener('click', () => {
      this.resetHandler();
    });
  }

  validateCarNames() {
    this.carNames = this.carNames.map((name) => name.trim());
    const carNameValidator = new CarNameValidator();

    const checkNameValue = {
      lengthCheck: () => (carNameValidator.isNotValidLength(this.carNames)
        ? alert(CAR_NAME_ERROR_MESSAGE.INVALID_LENGTH) : true),
      blankCheck: () => (carNameValidator.isIncludingBlank(this.carNames)
        ? alert(CAR_NAME_ERROR_MESSAGE.INCLUDE_BLANK) : true),
      duplicateCheck: () => (carNameValidator.isDuplicated(this.carNames)
        ? alert(CAR_NAME_ERROR_MESSAGE.DUPLICATED) : true),
      incompleteWordCheck: () => (carNameValidator.isInCompleteWord(this.carNames)
        ? alert(CAR_NAME_ERROR_MESSAGE.INCOMPLETE_WORD) : true),
    };

    return Object.keys(checkNameValue).every((checker) => checkNameValue[checker]());
  }

  validateTryCount(tryCount) {
    const tryCountValidator = new TryCountValidator(tryCount);

    const checkTryCount = {
      integerCheck: () => (tryCountValidator.isNotInteger()
        ? alert(TRY_COUNT_ERROR_MESSAGE.NOT_INTEGER) : true),
      positiveCheck: () => (tryCountValidator.isNotPositiveNumber()
        ? alert(TRY_COUNT_ERROR_MESSAGE.NOT_POSITIVE) : true),
    };

    return Object.keys(checkTryCount).every((checker) => checkTryCount[checker]());
  }

  carNamesInputHandler() {
    this.carNames = document.querySelector('#input-car-names > div > input').value.split(',');
    if (!this.validateCarNames()) {
      return this.initGame();
    }
    this.carGameView.showView(document.querySelector('#input-try-count'));
  }

  tryCountInputHandler() {
    const tryCount = Number(document.querySelector('#input-try-count > div > input').value);
    if (!this.validateTryCount(tryCount)) {
      document.querySelector('#input-try-count > div > input').value = '';
      this.carGameView.hideView(document.querySelector('#display-game-progress'));
      this.carGameView.hideView(document.querySelector('#display-game-result'));
      return;
    }
    this.createCar();
    const racingCarGame = new RacingCarGame(this.cars, tryCount);
    this.carGameView.displayProgress(racingCarGame.getCars());
    this.carGameView.displayWinners(racingCarGame.getWinners());
    this.carGameView.showView(document.querySelector('#display-game-progress'));

    this.carGameView.showView(document.querySelector('#display-game-result'));
  }

  resetHandler() {
    this.initGame();
  }

  createCar() {
    this.cars = this.carNames.map((name) => new Car(name));
  }
}
