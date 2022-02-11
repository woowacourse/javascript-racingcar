function splitCarNameList(names) {
  if (names.indexOf(',') === -1) {
    return [names];
  }

  return names.split(',');
}

function trimNameList(nameList) {
  const output = [];
  nameList.forEach((name) => {
    output.push(name.trim());
  });

  return output;
}

const nameStringToArray = (userInput) => {
  let output = splitCarNameList(userInput);
  output = trimNameList(output);

  return output;
};

export default nameStringToArray;
