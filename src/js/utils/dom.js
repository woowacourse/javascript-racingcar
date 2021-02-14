export const getQuerySelector = (selector) => {
  return document.querySelector(selector);
};

export const setElementDisplay = ($element, displayValue) => {
  $element.style.display = displayValue;
};
