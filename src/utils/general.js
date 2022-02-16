const getTimeInSecond = time => Math.floor(time / 1000);

const delayedAlert = (message, delay) => {
  setTimeout(() => alert(message), delay);
};
export { getTimeInSecond, delayedAlert };
