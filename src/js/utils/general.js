export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const delayedAlert = (message, delay) => {
  setTimeout(() => alert(message), delay);
};
