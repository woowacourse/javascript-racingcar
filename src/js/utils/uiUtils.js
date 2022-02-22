export const disableElement = (...args) => {
  args.forEach((arg) => {
    arg.disabled = true;
  });
};

export const enableElement = (...args) => {
  args.forEach((arg) => {
    arg.disabled = false;
  });
};
