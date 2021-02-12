import { $$ } from './utils/querySelector.js';
import { showElement } from './utils/showElement.js';
import { hideElement } from './utils/hideElement.js';

export const showLoader = () => {
  $$('.spinner-container').forEach((spinner) => showElement(spinner));
};

export const hideLoader = () => {
  $$('.spinner-container').forEach((spinner) => hideElement(spinner));
};
