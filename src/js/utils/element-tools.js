import { SELECTOR } from '../constants/selector.js';

const $APP = document.querySelector(SELECTOR.APP);

const $ = (parentElement, childSelector = null) => {
  const target = childSelector || parentElement;
  const $parent = childSelector ? parentElement : $APP;

  return $parent.querySelector(target);
};

const $$ = (parentElement, childSelector = null) => {
  const target = childSelector || parentElement;
  const $parent = childSelector ? parentElement : $APP;

  return $parent.querySelectorAll(target);
};

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
