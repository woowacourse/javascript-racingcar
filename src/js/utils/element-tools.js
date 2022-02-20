import { SELECTOR } from '../constants/selector.js';

const $APP = document.querySelector(SELECTOR.APP);

const $ = (selector) => $APP.querySelector(selector);
const $$ = (selector) => $APP.querySelectorAll(selector);

const createElement = (tagName, nodeProperty = {}) => {
  const $create = document.createElement(tagName);
  Object.entries(nodeProperty).forEach(([key, value]) => {
    if (typeof $create[key] !== 'string') {
      return;
    }

    $create[key] = value;
  });

  return $create;
};

export { $, $$, createElement };
