import View from './view.js';
import Model from './model.js';

import { validateNameInput, validateCountInput } from './utils/validator.js';
import { trimInArray } from './utils/common.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.setEventHandler();
  }

  setEventHandler() {
    this.view.setOnSubmitName(this.onSubmitName.bind(this));
    this.view.setOnSubmitCount(this.onSubmitCount.bind(this));
    this.view.setOnClickReset(this.onClickReset.bind(this));
  }

  onSubmitName(carNames) {
    try {
      const carNamesArray = trimInArray(carNames.split(','));
      validateNameInput(carNamesArray);
      this.view.displayCountForm();
      this.model.createAndSaveCarList(carNamesArray);
    } catch (error) {
      alert(error.message);
    }
  }

  onSubmitCount(count) {
    try {
      const carList = this.model.getCarList();
      validateCountInput(count);
      this.model.startRace(count);
      this.view.updateResultDOM(carList, this.makeWinnerList(carList));
      this.ShowResult(carList);
    } catch (error) {
      alert(error.message);
    }
  }

  onClickReset() {
    this.model.resetCarList();
  }

  findMaxStep(carList) {
    const steps = carList.map((car) => car.step);
    return Math.max(...steps);
  }

  ShowResult(carList) {
    const runningTime = this.findMaxStep(carList) * 1000;
    this.view.displayStepSection();
    this.view.showArrowOneRace();
    this.setArrowInterval(runningTime);
    this.setWinnerTimeOut(runningTime);
  }

  setArrowInterval(runningTime) {
    const ArrowInterval = this.startArrowInterval();
    const ArrowTimeOut = setTimeout(() => {
      clearInterval(ArrowInterval);
      clearTimeout(ArrowTimeOut);
    }, runningTime);
  }

  startArrowInterval() {
    return setInterval(() => {
      this.view.showArrowOneRace();
    }, 1000);
  }

  setWinnerTimeOut(afterTime) {
    const winnerTimeOut = setTimeout(() => {
      this.view.displayWinnerAndResetButton();
      clearTimeout(winnerTimeOut);
    }, afterTime);
  }

  makeWinnerList(carList) {
    const maxStep = this.findMaxStep(carList);
    const winnerCarList = carList.filter((car) => car.step === maxStep);
    return winnerCarList.map((car) => car.name);
  }
}
