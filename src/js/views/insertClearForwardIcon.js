import { $$ } from '../utils/querySelector.js';

export const insertForwardIcon = (index) => {
  $$('.car-player')[index].insertAdjacentHTML(
    'afterEnd',
    forwardIconTemplate(),
  );
};

const forwardIconTemplate = () => {
  return `<div class="forward-icon mt-2">⬇️️</div>`;
};

export const clearResidueForwardIcon = () => {
  $$('.forward-icon').forEach(($arrow) => $arrow.remove());
};
