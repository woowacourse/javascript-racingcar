const processInputWithRetry = async (
  inputCallback,
  validator,
  errorCallback
) => {
  try {
    const input = await inputCallback();
    validator(input);

    return input;
  } catch (error) {
    errorCallback(error.message);
    return await processInputWithRetry(inputCallback, validator, errorCallback);
  }
};

export default processInputWithRetry;
