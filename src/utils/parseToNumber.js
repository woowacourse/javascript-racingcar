function parseToNumber(input) {
  if (input === '') {
    return NaN;
  }

  return Number(input);
}

export default parseToNumber;
