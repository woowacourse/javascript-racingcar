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
}