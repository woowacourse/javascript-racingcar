const handleError = (functionToTest, functionOnError) => {
  try {
    functionToTest();
  } catch (error) {
    functionOnError(error);
  }
};

export default handleError;
