import $ from './utils/dom.js';
import { showElement } from './utils/setAttribute.js';
import { SELECTORS } from './constants/constants.js';

export function showCountInput() {
  showElement($(SELECTORS.RACING_COUNT_FORM));
}
