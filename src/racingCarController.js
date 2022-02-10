import RacingCarView from './racingCarView.js';
import RacingCarModel from './racingCarModel.js';
import { isValidCarNames } from './common/validator.js';

export default class RacingCarController {
  constructor() {
    this.view = new RacingCarView();
    this.model = new RacingCarModel();

    this.init();
  }

  init() {
    this.view.renderHeader();
    this.view.renderCarNames();
    this.view.selectCarNamesDOM();
    this.attachGameSettingEvents();
  }

  attachGameSettingEvents() {
    this.view.$carNamesSubmit.addEventListener('click', this.handleCarNames.bind(this));
  }

  handleCarNames(event) {
    event.preventDefault;

    const carNames = this.view.$carNamesInput.value.split(',');

    if (isValidCarNames(carNames)) {
      this.model.setCars(carNames);
      this.view.renderRacingCount();
    } else {
      alert('임시적인 오류 메시지입니다');
    }
  }
}
