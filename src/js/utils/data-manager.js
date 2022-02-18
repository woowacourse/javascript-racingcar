const nameStringToArray = (userInput) => {
  const splitCarNameList = (names) => names.split(',');
  const trimNameList = (nameList) => nameList.map((value) => value.trim());

  const output = splitCarNameList(userInput);
  return trimNameList(output);
};

const getRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * maxNumber) + minNumber;

export { nameStringToArray, getRandomNumber };
