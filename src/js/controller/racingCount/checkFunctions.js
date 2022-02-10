export const isInteger = input => {
  if (isNaN(input) || Number(input) % 1 !== 0) {
    return false;
  }
  return true;
};
