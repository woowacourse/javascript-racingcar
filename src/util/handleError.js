const handleError = (validateFunction, input) => {
  try {
    validateFunction(input);
    return true;
  } catch (error) {
    OutputView.printErrorMessage(error);
    return false;
  }
};

export default handleError;
