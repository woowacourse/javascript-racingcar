import Car from '../model/Car.js';
import {
  ERROR_MESSAGE,
  RACING_COUNT_RANGE,
  CAR_NAME_LENGTH_RANGE,
  DELIMETER,
} from '../constants.js';
import template from '../templates.js';
import { splitString, trimStringArray } from '../utils/utils.js';

export default class RacingCarGame {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindClickCarNameButton(this.submitCarNames.bind(this));
    this.view.bindClickRacingCountButton(this.submitRacingCount.bind(this));
    this.view.bindClickRestartButton(this.init.bind(this));
  }

  isValidCarNamesLength(carNameList) {
    return carNameList.every(
      (name) =>
        name.length >= CAR_NAME_LENGTH_RANGE.MIN &&
        name.length <= CAR_NAME_LENGTH_RANGE.MAX
    );
  }

  validateCarNameList(carNameList) {
    if (!this.isValidCarNamesLength(carNameList)) {
      this.view.alertErrorMessage(ERROR_MESSAGE.OUT_OF_CAR_NAME_LENGTH_RANGE);
      this.view.initializeInput(this.view.carNameInput);

      return true;
    }

    return false;
  }

  isDuplicatedCarName(carNameList) {
    return carNameList.length !== new Set(carNameList).size;
  }

  validateUniqueCarName(carNameList) {
    if (this.isDuplicatedCarName(carNameList)) {
      this.view.alertErrorMessage(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
      this.view.initializeInput(this.view.carNameInput);

      return true;
    }

    return false;
  }

  submitCarNames() {
    const carNameList = trimStringArray(
      splitString(this.view.carNameInput.value, DELIMETER)
    );

    if (
      this.validateCarNameList(carNameList) ||
      this.validateUniqueCarName(carNameList)
    ) {
      return;
    }

    this.model.carList = carNameList.map((name) => new Car(name));
    this.view.racingCountInputVisibiled();
    this.view.render(
      this.view.racingResult,
      template.renderRacingResult(this.model.carList)
    );
  }

  isValidRacingCount(racingCount) {
    return (
      Number.isInteger(racingCount) &&
      racingCount >= RACING_COUNT_RANGE.MIN &&
      racingCount <= RACING_COUNT_RANGE.MAX
    );
  }

  startRace(racingCount) {
    for (let i = 0; i < racingCount; i += 1) {
      this.model.carList.forEach((car) => car.race());
      this.view.render(
        this.view.racingResult,
        template.renderRacingResult(this.model.carList)
      );
    }
  }

  submitRacingCount() {
    const racingCount = this.view.racingCountInput.valueAsNumber;

    if (!this.isValidRacingCount(racingCount)) {
      this.view.alertErrorMessage(ERROR_MESSAGE.OUT_OF_RACING_COUNT_RANGE);
      this.view.initializeInput(this.view.racingCountInput);

      return;
    }

    this.startRace(racingCount);
    this.view.render(
      this.view.result,
      template.renderResult(this.model.winners)
    );
  }

  init() {
    this.view.carNameInput.value = '';
    this.view.racingCountInput.value = '';
    this.view.carNameInput.focus();
    this.view.racingCountInputInvisibiled();

    this.model.carList = [];
    this.model.winners = [];

    this.view.render(this.view.racingResult, '');
    this.view.render(this.view.result, '');
  }
}
