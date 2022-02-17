import { CUSTOM_EVENT, ID } from '../utils/constants.js';
import { disableElements, enableElements } from '../utils/ui.js';
import View from './View.js';

export default class CountInputView extends View {
  setup = () => {
    this.inputElement = this.element.querySelector(`#${ID.RACING_COUNT_INPUT}`);
    this.buttonElement = this.element.querySelector(`#${ID.RACING_COUNT_BUTTON}`);
    this.bindEvent();
    return this;
  };

  bindEvent = () => {
    this.buttonElement.addEventListener('click', this.onClickCountButton);
  };

  onClickCountButton = () => {
    this.emit(CUSTOM_EVENT.SUBMIT_RACING_COUNT, this.inputElement.value);
  };

  resetValue = () => {
    this.inputElement.value = '';
  };

  disableCountInput = () => {
    disableElements(this.inputElement, this.buttonElement);
  };

  enableCountInput = () => {
    enableElements(this.inputElement, this.buttonElement);
  };
}
