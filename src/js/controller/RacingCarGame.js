import Car from '../model/Car.js';
import template from '../templates.js';
import { ERROR_MESSAGE, DELIMETER, SELECTOR } from '../constants.js';
import { splitString, trimStringArray, sleep, $ } from '../utils/utils.js';
import {
  isValidCarNamesLength,
  isDuplicatedCarName,
  isValidRacingCount,
  isGreaterThanPreviousCarDistance,
} from '../utils/validations.js';

export default class RacingCarGame {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindClickCarNameButton(this.submitCarNames.bind(this));
    this.view.bindClickRacingCountButton(this.submitRacingCount.bind(this));
    this.view.bindClickRestartButton(this.init.bind(this));
  }

  validateCarNameList(carNameList) {
    if (!isValidCarNamesLength(carNameList)) {
      this.view.alertErrorMessage(ERROR_MESSAGE.OUT_OF_CAR_NAME_LENGTH_RANGE);
      this.view.initializeInput(this.view.carNameInput);

      return true;
    }

    return false;
  }

  validateUniqueCarName(carNameList) {
    if (isDuplicatedCarName(carNameList)) {
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
    this.view.racingCountInputVisibled();
    this.view.render(
      this.view.racingProgress,
      'beforeend',
      template.renderRacingProgress(this.model.carList)
    );
    this.view.toggleDisabledButton(this.view.carNameButton);
  }

  moveCars() {
    this.model.carList.forEach((car, index) => {
      car.race();
      if (
        isGreaterThanPreviousCarDistance(
          this.model.previousCarDistanceList[index],
          car.distance
        )
      ) {
        this.model.previousCarDistanceList[index] = car.distance;
        this.view.render(
          this.view.progressList[index].querySelector('.spinner'),
          'beforebegin',
          template.renderProgressList(car.distance)
        );
      }
    });
  }

  setPreviousCarDistanceList() {
    this.model.previousCarDistanceList = Array(this.model.carList.length).fill(
      0
    );
  }

  async startRace(racingCount) {
    this.setPreviousCarDistanceList();

    this.view.progressList.forEach((progress) => {
      this.view.render(
        progress,
        'beforeend',
        template.renderLoadingAnimation()
      );
    });

    for (let i = 0; i < racingCount; i += 1) {
      await sleep(1000);
      this.moveCars();
    }

    this.view.progressList.forEach((progress) => {
      progress.removeChild($('.spinner'));
    });

    console.log(this.model.carList);
  }

  async submitRacingCount() {
    const racingCount = this.view.racingCountInput.valueAsNumber;

    if (!isValidRacingCount(racingCount)) {
      this.view.alertErrorMessage(ERROR_MESSAGE.OUT_OF_RACING_COUNT_RANGE);
      this.view.initializeInput(this.view.racingCountInput);

      return;
    }

    await this.startRace(racingCount);
    this.view.render(
      this.view.app,
      'beforeend',
      template.renderRacingResult(this.model.winners)
    );
    this.view.racingResult = $(SELECTOR.$RACING_RESULT);
    this.view.toggleDisabledButton(this.view.racingCountButton);
  }

  init() {
    this.model.init();
    this.view.init();
  }
}
