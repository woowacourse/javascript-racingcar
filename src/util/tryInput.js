import errorHandler from "./errorHandler.js";

const tryInput = async (inputFn, validateFn) => {
  try {
    const input = await inputFn();
    validateFn(input);

    return input;
  } catch (error) {
    errorHandler(error);
    return tryInput(inputFn, validateFn);
  }
};

export default tryInput;
