import { $, clearInput, disableElements, enableElements } from '../util/dom.js';
import { CAR_NAME_MAX_LENGTH } from '../util/constant.js';
import { modifyCarNameInputValue } from '../util/game.js';
import { ERROR_MESSAGE } from '../util/message.js';

export default class CarNameInput {
  constructor(props) {
    this.props = props;
    this.selectDOM();

    this.bindEvents();
  }

  selectDOM() {
    this.$target = $('.car-name-input-containter');
    this.$carNameInput = $('.car-name-input-containter input[type=text]');
    this.$carNameSummitBtn = $('.car-name-input-containter button');
  }

  bindEvents() {
    this.$carNameSummitBtn.addEventListener(
      'click',
      this.handleSubmitCarName.bind(this),
    );
  }

  handleSubmitCarName() {
    const { setCars, playGame } = this.props;
    const inputCarName = this.$carNameInput.value;
    const errorMessage = validateInputValue(inputCarName);

    if (errorMessage) {
      alert(errorMessage);
      clearInput(this.$carNameInput);
      return;
    }

    disableElements(this.$carNameInput, this.$carNameSummitBtn);
    setCars(modifyCarNameInputValue(inputCarName));
    playGame();
  }

  resetElements() {
    enableElements(this.$carNameInput, this.$carNameSummitBtn);
    clearInput(this.$carNameInput);
  }
}

const validateInputValue = inputCarName => {
  const carNames = modifyCarNameInputValue(inputCarName);

  if (isEmptyValue(inputCarName.trim())) {
    return ERROR_MESSAGE.EMPTY_CAR_NAME_INPUT;
  }

  if (!isMoreThanOne(carNames)) {
    return ERROR_MESSAGE.ONE_CAR_NAME_INPUT;
  }

  if (isContainEmptyString(carNames)) {
    return ERROR_MESSAGE.EMPTY_STRING_CAR_NAME_INPUT;
  }

  if (isDuplicatedCarName(carNames)) {
    return ERROR_MESSAGE.DUPLICATED_CAR_NAME_INPUT;
  }

  if (isOverMaxLengthCarName(carNames)) {
    return ERROR_MESSAGE.OVER_MAX_LENGTH_CAR_NAME_INPUT;
  }

  return '';
};

const isEmptyValue = value => value === '';

const isMoreThanOne = names => names.length > 1;

const isContainEmptyString = names => names.some(isEmptyValue);

const isDuplicatedCarName = names => names.length !== new Set(names).size;

const isOverMaxLengthCarName = names =>
  names.some(name => name.length > CAR_NAME_MAX_LENGTH);
