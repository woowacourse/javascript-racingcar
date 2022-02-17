import { validateCarNames, validateCount } from '../utils/validation.js';
import { SELECTOR, CAR } from '../constants/constants.js';
import RacingGameModel from '../model/RacingGameModel.js';
import RacingView from '../view/RacingView.js';
import RandomUtils from '../utils/random.js';

export default class RacingController {
  constructor() {
    this.model = new RacingGameModel();
    this.view = new RacingView();
  }

  app() {
    document
      .getElementById(SELECTOR.ID.CAR_NAMES_BUTTON)
      .addEventListener('click', this.submitNameHandler.bind(this));
    document
      .getElementById(SELECTOR.ID.RACING_COUNT_SUBMIT)
      .addEventListener('click', this.submitCountHandler.bind(this));
  }

  submitNameHandler(e) {
    e.preventDefault();
    const nameList = RacingController.getCarNameList();

    try {
      validateCarNames(nameList);
      this.model.cars = nameList;
      this.view.deactivateNamesForm();
      this.view.activateCountForm();
    } catch (error) {
      alert(error.message);
    }
  }

  submitCountHandler(e) {
    e.preventDefault();
    const racingCount = RacingController.getRacingCount();

    try {
      validateCount(racingCount);
      this.model.round = Number(racingCount);
      this.view.deactivateNamesForm();
      this.startRacingGame();
      // this.activateRestartButton();
    } catch (error) {
      alert(error.message);
    }
  }

  startRacingGame() {
    this.view.deactivateCountForm();
    this.view.renderName(this.model.getCarsName());
    this.playNext();
  }

  playNext() {
    this.play();
    this.view.renderResult(this.model.winners);
    this.activateRestartButton();

    // const { round } = this.model;
    // let progressingRound = 1;
    // const playIntervalId = setInterval(() => {
    //   this.play();
    //   progressingRound += 1;
    //   if (progressingRound >= round) {
    //     clearInterval(playIntervalId);
    //     this.view.renderResult(this.model.winners);
    //     this.activateRestartButton();
    //   }
    // }, 1000);
  }

  moveOrNot() {
    const randomNumber = RandomUtils.pickRandomNumber();
    if (randomNumber >= CAR.REFERENCE_POINT_FOR_MOVEMENT) {
      return 1;
    }
    return 0;
  }

  play() {
    const moves = this.model.cars.map(() => {
      return this.moveOrNot();
    });
    this.model.moveCars(moves);
    this.view.renderProgress(this.model.cars);
  }

  activateRestartButton() {
    document
      .getElementById(SELECTOR.ID.RESTART_BUTTON)
      .addEventListener('click', this.restartGame.bind(this));
  }

  restartGame() {
    console.log('restart');
    this.view.reset();
    this.model.reset();
  }

  static getCarNameList() {
    const nameList = document
      .getElementById(SELECTOR.ID.CAR_NAMES_INPUT)
      .value.split(',');
    return nameList.map((name) => name.trim());
  }

  static getRacingCount() {
    return document.getElementById(SELECTOR.ID.RACING_COUNT_INPUT).value;
  }
}
