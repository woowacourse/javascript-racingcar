import RacingCarView from './racingCarView.js';
import RacingCarModel from './racingCarModel.js';

export default class RacingCarController {
  constructor() {
    this.view = new RacingCarView();
    this.model = new RacingCarModel();

    this.init();
  }

  init() {
    this.view.renderHeader();
    this.view.renderGameSetting();
    this.view.selectGameSettingDOM();
    this.attachGameSettingEvents();
  }

  attachGameSettingEvents() {
    this.view.$carNamesSubmit.addEventListener('click', this.handleCarNames.bind(this));
  }

  handleCarNames(event) {
    event.preventDefault;

    const carNames = this.view.$carNamesInput.value.split(',');
    this.model.setCars(carNames);
  }
}
