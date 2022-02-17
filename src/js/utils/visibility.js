export const hideElement = (element) => {
  return element.setAttribute('hidden', true);
};

export const showElement = (element) => {
  return element.removeAttribute('hidden');
};
