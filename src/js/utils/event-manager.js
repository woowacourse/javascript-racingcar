const setDelay = (millisecond) =>
  new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });

const runAnimation = () =>
  new Promise((resolve) => {
    requestAnimationFrame(resolve);
  });

export { setDelay, runAnimation };
