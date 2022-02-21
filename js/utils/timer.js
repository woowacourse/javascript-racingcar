export const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const repeatAction = (action, intervalMs, canRepeat) => {
  return new Promise((resolve) => {
    const timer = setInterval(() => {
      if (!canRepeat()) {
        clearInterval(timer);
        resolve();
        return;
      }
      action();
    }, intervalMs);
  });
};
