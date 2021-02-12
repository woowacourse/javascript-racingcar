import { $ } from '../utils/querySelector.js';
import { setVisibility } from '../views/utils/setVisibility.js';
import { validateRacingCount } from '../models/validateRacingCount.js';
import { handleGameResult } from './handleGameResult.js';

export const handleRacingCountInput = (cars) => {
  const $racingCountInput = $('#racing-count-input');
  const racingCount = $racingCountInput.value;
  const errorMessage = validateRacingCount(racingCount);

  if (errorMessage) {
    alert(errorMessage);
    $racingCountInput.value = '';
    return;
  }
  setVisibility($('#game-process-section'), true);
  cars.forEach((car) => car.resetForwardCount());
  handleGameResult(cars, racingCount);
};
