import { DOM_ID } from '../constants/selector.js';

const templateProgress = () => {
  const $container = document.createElement('DIV');
  $container.classList.add(DOM_ID.PROGRESS);

  const $progress = document.createElement('DIV');
  $progress.classList.add(DOM_ID.PROGRESS_INNER);
  $container.append($progress);

  return $container;
};

export { templateProgress };
