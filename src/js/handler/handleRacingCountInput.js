import { $ } from '../util-view/querySelector.js';
import { setVisibility } from '../util-view/setVisibility.js';
import { validateRacingCount } from '../util-model/validateRacingCount.js';
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
