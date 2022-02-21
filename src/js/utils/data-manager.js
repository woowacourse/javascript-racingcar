import { MILLISECOND } from '../constants/constants.js';

const nameStringToArray = (userInput) => {
  const splitCarNameList = (names) => names.split(',');
  const trimNameList = (nameList) => nameList.map((value) => value.trim());

  const output = splitCarNameList(userInput);
  return trimNameList(output);
};

const getRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * maxNumber) + minNumber;

const getTimeDiffToPercent = (startTime, currentTime, totalTime = MILLISECOND) =>
  Math.ceil((currentTime - startTime) * (100 / totalTime));

export { nameStringToArray, getRandomNumber, getTimeDiffToPercent };
