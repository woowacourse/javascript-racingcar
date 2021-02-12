import { $ } from '../views/utils/querySelector.js';
import { showCarPlayers } from '../views/showCarPlayers.js';
import { showElement } from '../views/utils/showElement.js';
import { clearInput } from '../views/utils/clearInput.js';
import { generateCarInstances } from '../models/generateCarInstances.js';
import { validateCarNames } from '../models/validateCarNames.js';
import { handleRacingCountInput } from './handleRacingCountInput.js';

export const handleCarNameInput = () => {
  const $carNameInput = $('#car-name-input');
  const cars = generateCarInstances($carNameInput.value);
  const errorMessage = validateCarNames(cars);

  if (errorMessage) {
    alert(errorMessage);
    clearInput($carNameInput);
    return;
  }
  showCarPlayers(cars);
  $('#racing-count-submit').addEventListener('click', () =>
    handleRacingCountInput(cars),
  );
  showElement($('#racing-count-section'));
};
