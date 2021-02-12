import { $$ } from '../utils/querySelector.js';

export const insertArrow = (index) => {
  $$('.car-player')[index].insertAdjacentHTML('afterEnd', arrowTemplate());
};

const arrowTemplate = () => {
  return `<div class="forward-icon mt-2">⬇️️</div>`;
};

export const clearResidueArrow = () => {
  $$('.forward-icon').forEach(($arrow) => $arrow.remove());
};
