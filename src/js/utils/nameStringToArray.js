function splitCarNameList(names) {
  return names.split(',');
}

function trimNameList(nameList) {
  return nameList.map((value) => value.trim());
}

const nameStringToArray = (userInput) => {
  let output = splitCarNameList(userInput);
  output = trimNameList(output);

  return output;
};

export default nameStringToArray;
