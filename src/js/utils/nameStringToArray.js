function splitCarNameList(names) {
  return names.split(',');
}

function trimNameList(nameList) {
  return nameList.map((name) => {
    name.trim();
  });
}

const nameStringToArray = (userInput) => {
  const output = splitCarNameList(userInput);
  return trimNameList(output);
};

export default nameStringToArray;
