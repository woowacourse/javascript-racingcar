export const setVisibility = (target, option) => {
  const options = {
    true: () => target.removeAttribute('hidden'),
    false: () => target.setAttribute('hidden', true),
  };

  return options[option] && options[option]();
};

export const setDisabled = (target, option) => {
  const options = {
    true: () => target.setAttribute('disabled', true),
    false: () => target.removeAttribute('disabled'),
  };

  return options[option] && options[option]();
};
