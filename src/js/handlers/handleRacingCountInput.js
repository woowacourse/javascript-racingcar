import { $ } from '../views/utils/querySelector.js';
import { showElement } from '../views/utils/showElement.js';
import { clearInput } from '../views/utils/clearInput.js';
import { validateRacingCount } from '../models/validateRacingCount.js';
import { handleGameResult } from './handleGameResult.js';

export const handleRacingCountInput = (cars) => {
  const $racingCountInput = $('#racing-count-input');
  const racingCount = $racingCountInput.value;
  const errorMessage = validateRacingCount(racingCount);

  if (errorMessage) {
    alert(errorMessage);
    clearInput($racingCountInput);
    return;
  }
  showElement($('#game-process-section'));
  cars.forEach((car) => car.resetForwardCount());
  handleGameResult(cars, racingCount);
};
