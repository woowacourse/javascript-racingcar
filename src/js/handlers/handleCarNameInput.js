import { $ } from '../views/utils/querySelector.js';
import { createCarElements } from '../views/showCarPlayers.js';
import { showElement } from '../views/utils/showElement.js';
import { clearInput } from '../views/utils/clearInput.js';
import { generateCarInstances } from '../models/generateCarInstances.js';
import { validateCarNames } from '../models/validateCarNames.js';

export function handleCarNameInput() {
  const $carNameInput = $('#car-name-input');
  this.cars = generateCarInstances($carNameInput.value);
  const errorMessage = validateCarNames(this.cars);

  if (errorMessage) {
    alert(errorMessage);
    clearInput($carNameInput);
    return;
  }
  createCarElements(this.cars);
  showElement($('#racing-count-section'));
}
