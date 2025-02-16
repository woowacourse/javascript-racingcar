import errorHandler from "./errorHandler.js";
import emptySpaceEraser from "./emptySpace.js";

const tryInput = async (inputFn, validateFn) => {
  try {
    const input = await inputFn();
    const inputWithoutSpace = emptySpaceEraser(input);
    validateFn(inputWithoutSpace);

    return inputWithoutSpace;
  } catch (error) {
    errorHandler(error);
    return tryInput(inputFn, validateFn);
  }
};

export default tryInput;
