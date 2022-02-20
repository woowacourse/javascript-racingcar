import { DOM_NAME } from '../constants/selector.js';
import { createElement } from '../utils/element-tools.js';

const templateProgress = () => {
  const $container = createElement('DIV', {
    className: DOM_NAME.CLASS.PROGRESS_CONTAINER,
  });
  const $progress = createElement('DIV', {
    className: DOM_NAME.CLASS.PROGRESS,
  });
  $progress.setAttribute('style', '--value: 0');

  $container.append($progress);
  return $container;
};

// eslint-disable-next-line import/prefer-default-export
export { templateProgress };
