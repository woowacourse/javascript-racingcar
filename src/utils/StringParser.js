import MESSAGE from "../constants/Message.js";

export const splitCarNames = (input) => {
  const carNamesArray = input.split(",");
  const result = [];
  carNamesArray.forEach((carName) => {
    if (carName.trim() !== "") {
      result.push(carName.trim());
    }
  });
  return result;
};

export const concatElements = (array) => {
  return array.join(MESSAGE.championSeparator);
};
