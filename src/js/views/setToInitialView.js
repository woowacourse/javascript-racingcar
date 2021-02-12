import { $ } from '../utils/querySelector.js';
import { setVisibility } from './utils/setVisibility.js';

export const setToInitialView = () => {
  $('#game-process-screen').innerHTML = '';
  $('#car-name-input').value = '';
  $('#racing-count-input').value = '';
  setVisibility($('#racing-count-section'), false);
  setVisibility($('#game-process-section'), false);
  setVisibility($('#game-result-section'), false);
};
