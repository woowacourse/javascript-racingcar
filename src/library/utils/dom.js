export const disableDOMElement = (...elements) => {
  elements.forEach(element => (element.disabled = true));
};

export const $ = selector => document.querySelector(selector);
