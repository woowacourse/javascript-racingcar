import { $ } from './utils/querySelector.js';
import { hideElement } from './utils/hideElement.js';
import { clearElement } from './utils/clearElement.js';
import { clearInput } from './utils/clearInput.js';

export const setToInitialView = () => {
  clearElement($('#game-process-screen'));
  clearInput($('#car-name-input'));
  clearInput($('#racing-count-input'));
  hideElement($('#racing-count-section'));
  hideElement($('#game-process-section'));
  hideElement($('#game-result-section'));
};
