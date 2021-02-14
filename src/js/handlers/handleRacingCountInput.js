import { $ } from '../views/utils/querySelector.js';
import { showElement } from '../views/utils/showElement.js';
import { clearInput } from '../views/utils/clearInput.js';
import { validateRacingCount } from '../models/validateRacingCount.js';
import { handleGameResult } from './handleGameResult.js';

export function handleRacingCountInput() {
  const $racingCountInput = $('#racing-count-input');
  const racingCount = $racingCountInput.value;
  const errorMessage = validateRacingCount(racingCount);

  if (errorMessage) {
    alert(errorMessage);
    clearInput($racingCountInput);
    return;
  }
  this.cars.forEach((car) => car.resetForwardCount());
  showElement($('#game-process-section'));
  handleGameResult(this.cars, racingCount);
}
