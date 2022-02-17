import { ID } from '../utils/constants.js';
import { disableElements, enableElements } from '../utils/ui.js';
import View from './View.js';

export default class CarNamesInputView extends View {
  setup = () => {
    this.inputElement = this.element.querySelector(`#${ID.CAR_NAME_INPUT}`);
    this.buttonElement = this.element.querySelector(`#${ID.CAR_NAME_BUTTON}`);
    this.bindEvent();
    return this;
  };

  bindEvent = () => {
    this.buttonElement.addEventListener('click', this.onClickCarNamesButton);
  };

  onClickCarNamesButton = () => {
    this.emit('@submitCarNames', this.inputElement.value);
  };

  resetValue = () => {
    this.inputElement.value = '';
  };

  disableCarNamesInput = () => {
    disableElements(this.inputElement, this.buttonElement);
  };

  enableCarNamesInput = () => {
    enableElements(this.inputElement, this.buttonElement);
  };
}
