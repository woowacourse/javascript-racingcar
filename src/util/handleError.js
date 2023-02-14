const handleError = (functionToTry, functionOnError) => {
  try {
    functionToTry();
  } catch (error) {
    functionOnError(error);
  }
};

export default handleError;
