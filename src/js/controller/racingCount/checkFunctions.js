export const isInteger = input => {
  if (Number.isNaN(input) || Number(input) % 1 !== 0) {
    return false;
  }
  return true;
};
