import Car from './Car.js';
import {
  ERROR_MESSAGE,
  SELECTOR,
  RACING_COUNT_RANGE,
  CAR_NAME_LENGTH_RANGE,
  DELIMETER,
} from './constants.js';
import TEMPLATE from './templates.js';

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return document.querySelectorAll(selector);
}

class RacingCarGame {
  constructor() {
    this.$app = $(SELECTOR.$APP);
    this.$carNameInput = $(SELECTOR.$CAR_NAME_INPUT);
    this.$carNameButton = $(SELECTOR.$CAR_NAME_BUTTON);
    this.$racingCountInput = $(SELECTOR.$RACING_COUNT_INPUT);
    this.$racingCountButton = $(SELECTOR.$RACING_COUNT_BUTTON);
    this.carList = [];
    this.winners = [];
  }

  splitCarNames() {
    return this.$carNameInput.value.split(DELIMETER);
  }

  trimStringArray(array) {
    return array.map((string) => string.trim());
  }

  initializeInput(clearElement, focusElement = clearElement) {
    clearElement.value = '';
    focusElement.focus();
  }

  renderRacingResult() {
    $(SELECTOR.$RACING_RESULT).innerHTML = TEMPLATE.RENDER_RACING_RESULT(
      this.carList
    );
  }

  renderResult() {
    $(SELECTOR.$RESULT).innerHTML = TEMPLATE.RENDER_RESULT(this.winners);
  }

  bindEventListener(type, selector, callback) {
    const children = [...$all(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$app.addEventListener(type, (e) => {
      if (!isTarget(e.target)) return;

      e.preventDefault();
      callback(e);
    });
  }

  restart() {
    this.$carNameInput.value = '';
    this.$racingCountInput.value = '';
    this.$carNameInput.focus();

    this.carList = [];
    this.winners = [];

    this.renderRacingResult();
    this.renderResult();
  }

  submitCarNames() {
    const carNameList = this.trimStringArray(this.splitCarNames());

    if (
      !carNameList.every(
        (name) =>
          name.length >= CAR_NAME_LENGTH_RANGE.MIN &&
          name.length <= CAR_NAME_LENGTH_RANGE.MAX
      )
    ) {
      alert(ERROR_MESSAGE.OUT_OF_CAR_NAME_LENGTH_RANGE);
      this.initializeInput(this.$carNameInput);

      return;
    }

    if (carNameList.length !== new Set(carNameList).size) {
      alert(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
      this.initializeInput(this.$carNameInput);

      return;
    }

    this.carList = carNameList.map((name) => new Car(name));

    this.renderRacingResult();
  }

  submitRacingCount() {
    const racingCount = this.$racingCountInput.valueAsNumber;

    if (
      !Number.isInteger(racingCount) ||
      racingCount <= RACING_COUNT_RANGE.MIN ||
      racingCount > RACING_COUNT_RANGE.MAX
    ) {
      alert(ERROR_MESSAGE.OUT_OF_RACING_COUNT_RANGE);
      this.initializeInput(this.$racingCountInput);

      return;
    }

    if (!this.carList.length) {
      alert(ERROR_MESSAGE.CAR_NAME_SHOULD_COME_FIRST);
      this.initializeInput(this.$racingCountInput, this.$carNameInput);

      return;
    }

    for (let i = 0; i < racingCount; i += 1) {
      this.carList.forEach((car) => car.race());
      this.renderRacingResult();
    }

    const maxDistance = Math.max(...this.carList.map((car) => car.distance));
    this.winners = this.carList
      .filter((car) => car.distance === maxDistance)
      .map((winner) => winner.name);

    this.renderResult();
  }

  main() {
    this.bindEventListener(
      'click',
      SELECTOR.$CAR_NAME_BUTTON,
      this.submitCarNames.bind(this)
    );

    this.bindEventListener(
      'click',
      SELECTOR.$RACING_COUNT_BUTTON,
      this.submitRacingCount.bind(this)
    );

    this.bindEventListener(
      'click',
      SELECTOR.$RESTART_BUTTON,
      this.restart.bind(this)
    );
  }
}

const racingCarGame = new RacingCarGame();
racingCarGame.main();
