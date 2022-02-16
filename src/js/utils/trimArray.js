export const trimArray = prevArray => {
  const trimmedArray = [];

  prevArray.forEach(element => {
    trimmedArray.push(element.trim());
  });

  return trimmedArray;
};
