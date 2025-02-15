const throwIfInValid = ({ condition, errorMessage }) => {
  if (condition) {
    throw new Error(errorMessage);
  }
  return this;
};

export default throwIfInValid;
