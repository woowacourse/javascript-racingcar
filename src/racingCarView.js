import { $ } from './common/DOMHelper.js';
import { headerTemplate, gameSettingTemplate } from './common/template.js';

export default class RacingCarView {
  constructor() {
    this.$app = $('#app');
  }

  renderHeader() {
    this.$app.innerHTML = headerTemplate();
  }

  renderGameSetting() {
    this.$app.innerHTML += gameSettingTemplate();
  }

  selectGameSettingDOM() {
    this.$carNamesInput = $('#car-names-input');
    this.$carNamesSubmit = $('#car-names-submit');
  }
}
