export const hideElement = element => {
  element.classList.add('hidden');
};

export const showElement = element => {
  element.classList.remove('hidden');
};

export const setElementDisabled = element => {
  element.disabled = true;
};

export const setElementEnable = element => {
  element.disabled = false;
};
