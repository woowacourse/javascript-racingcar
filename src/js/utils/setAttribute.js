export const hideElement = (element) => {
  return element.setAttribute('hidden', true);
};

export const showElement = (element) => {
  return element.removeAttribute('hidden');
};

export const disabledElement = (element) => {
  return element.setAttribute('disabled', true);
};

export const enabledElement = (element) => {
  return element.removeAttribute('disabled');
};
