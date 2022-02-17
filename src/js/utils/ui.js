export const disableElements = (...args) => {
  args.forEach((arg) => (arg.disabled = true));
};

export const enableElements = (...args) => {
  args.forEach((arg) => (arg.disabled = false));
};
