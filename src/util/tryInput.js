const tryInput = async (inputFn, validateFn) => {
  try {
    const input = await inputFn();
    validateFn(input);

    return input;
  } catch (error) {
    console.log(error.message);
    return tryInput(inputFn, validateFn);
  }
};

export default tryInput;
