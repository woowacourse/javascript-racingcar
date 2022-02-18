const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const createElement = (tagName, nodeProperty) => {
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
