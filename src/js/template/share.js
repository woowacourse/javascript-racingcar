import { DOM_ID } from '../constants/selector.js';
import { createElement } from '../utils/element-tools.js';

const templateProgress = () => {
  const $container = createElement('DIV', { className: DOM_ID.PROGRESS });
  const $progress = createElement('DIV', { className: DOM_ID.PROGRESS_INNER });

  $container.append($progress);
  return $container;
};

export { templateProgress };
