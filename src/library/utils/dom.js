export const disableDOMElement = (...elements) => {
  elements.forEach(element => (element.disabled = true));
};
