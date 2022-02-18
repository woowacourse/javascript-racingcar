const setIntervalX = (times, delay, before, after, end) => {
  if (!times) {
    end();
    return;
  }
  before();
  setTimeout(() => {
    after();
    setIntervalX(times - 1, delay, before, after, end);
  }, delay);
};

export default setIntervalX;
