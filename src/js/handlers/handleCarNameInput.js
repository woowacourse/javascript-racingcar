import { $ } from '../utils/querySelector.js';
import { setVisibility } from '../views/utils/setVisibility.js';
import { showCarPlayers } from '../views/showCarPlayers.js';
import { validateCarNames } from '../models/validateCarNames.js';
import { generateCarInstances } from '../models/generateCarInstances.js';
import { handleRacingCountInput } from './handleRacingCountInput.js';

export const handleCarNameInput = () => {
  const $carNameInput = $('#car-name-input');
  const cars = generateCarInstances($carNameInput.value);
  const errorMessage = validateCarNames(cars);

  if (errorMessage) {
    alert(errorMessage);
    $carNameInput.value = '';
    return;
  }
  showCarPlayers(cars);
  $('#racing-count-submit').addEventListener('click', () =>
    handleRacingCountInput(cars),
  );
  setVisibility($('#racing-count-section'), true);
};
