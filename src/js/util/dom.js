export const clearInput = ($target) => {
  $target.value = '';
};

export const disableElements = (...elements) => {
  elements.forEach(($element) => ($element.disabled = true));
};

export const activateElements = (...elements) => {
  elements.forEach(($element) => ($element.disabled = false));
};
