import Car from '../model/Car.js';
import template from '../templates.js';
import {
  ERROR_MESSAGE,
  DELIMETER,
  SELECTOR,
  DELAY_TIME,
} from '../constants.js';
import { splitString, trimStringArray, delay, $all } from '../utils/utils.js';
import {
  isValidCarNamesLength,
  isDuplicatedCarName,
  isValidRacingCount,
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
      this.view.alertMessage(ERROR_MESSAGE.OUT_OF_CAR_NAME_LENGTH_RANGE);
      this.view.initializeInput(this.view.carNameInput);

      return true;
    }

    return false;
  }

  validateUniqueCarName(carNameList) {
    if (isDuplicatedCarName(carNameList)) {
      this.view.alertMessage(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
      this.view.initializeInput(this.view.carNameInput);

      return true;
    }

    return false;
  }

  insertCarName() {
    $all(SELECTOR.$CAR_NAME).forEach((carNameElement, index) => {
      this.view.insertText(carNameElement, this.model.carList[index].name);
    });
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
    this.insertCarName();
    this.view.toggleDisabledButton(this.view.carNameButton);
  }

  moveCars() {
    this.model.carList.forEach((car, index) => {
      car.race();
      if (this.model.previousCarDistanceList[index] >= car.distance) {
        return;
      }

      this.model.previousCarDistanceList[index] = car.distance;
      this.view.render(
        this.view.progressList[index].querySelector(SELECTOR.$SPINNER),
        'beforebegin',
        template.renderProgressList()
      );
    });
  }

  renderSpinnerAnimation() {
    this.view.progressList.forEach((progress) => {
      this.view.render(
        progress,
        'beforeend',
        template.renderLoadingAnimation()
      );
    });
  }

  async startRace(racingCount) {
    this.model.previousCarDistanceList = Array(this.model.carList.length).fill(
      0
    );
    this.renderSpinnerAnimation();

    for (let i = 0; i < racingCount; i += 1) {
      await delay(DELAY_TIME.RACING_PROGRESS);
      this.moveCars();
    }

    this.view.removeElements(this.view.progressList, SELECTOR.$SPINNER);
  }

  async submitRacingCount() {
    const racingCount = this.view.racingCountInput.valueAsNumber;

    if (!isValidRacingCount(racingCount)) {
      this.view.alertMessage(ERROR_MESSAGE.OUT_OF_RACING_COUNT_RANGE);
      this.view.initializeInput(this.view.racingCountInput);

      return;
    }

    this.view.toggleDisabledButton(this.view.racingCountButton);
    await this.startRace(racingCount);
    this.view.render(
      this.view.app,
      'beforeend',
      template.renderRacingResult(this.model.winners)
    );
    this.view.insertText(
      SELECTOR.$WINNERS,
      this.model.winners.join(`${DELIMETER} `)
    );
    this.view.winnersAlertMessage(this.model.winners);
  }

  init() {
    this.model.init();
    this.view.init();
  }
}
