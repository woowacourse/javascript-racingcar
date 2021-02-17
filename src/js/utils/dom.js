export const $ = (selector, all = false) => {
  const $element = all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);

  $element.show = () => {
    all
      ? $element.forEach(($elem) => ($elem.style.display = 'block'))
      : ($element.style.display = 'block');
  };

  $element.hide = () => {
    all
      ? $element.forEach(($elem) => ($elem.style.display = 'none'))
      : ($element.style.display = 'none');
  };

  return $element;
};
