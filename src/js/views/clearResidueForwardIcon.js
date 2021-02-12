import { $$ } from './utils/querySelector.js';

export const clearResidueForwardIcon = () => {
  $$('.forward-icon').forEach(($arrow) => $arrow.remove());
};
