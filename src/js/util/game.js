export const getRandomNumber = ({ max, min }) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const modifyCarNameInputValue = value =>
  value.split(',').map(name => name.trim());

export const delay = ms => {
  return new Promise(res => {
    setTimeout(res, ms);
  });
};
