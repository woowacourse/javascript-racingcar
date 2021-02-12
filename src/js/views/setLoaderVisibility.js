import { $$ } from '../utils/querySelector.js';
import { setVisibility } from '../views/utils/setVisibility.js';

export const showLoader = () => {
  $$('.spinner-container').forEach((spinner) => setVisibility(spinner, true));
};

export const hideLoader = () => {
  $$('.spinner-container').forEach((spinner) => setVisibility(spinner, false));
};
