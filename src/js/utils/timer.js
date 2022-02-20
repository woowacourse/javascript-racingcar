const setIntervalX = ({ times, delay, before, after, end }) => {
  if (!times) {
    end && end();
    return;
  }
  before && before();
  setTimeout(() => {
    after && after();
    setIntervalX({
      times: times - 1,
      delay,
      before,
      after,
      end,
    });
  }, delay);
};

export default setIntervalX;
