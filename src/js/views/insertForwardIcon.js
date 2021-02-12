import { $$ } from './utils/querySelector.js';

export const insertForwardIcon = async (index) => {
  $$('.car-player')[index].insertAdjacentHTML(
    'afterEnd',
    forwardIconTemplate(),
  );
};

const forwardIconTemplate = () => {
  return `<div class="forward-icon mt-2">⬇️️</div>`;
};
