import Console from "./Console.js";

const getValidInput = async (inputFn, validateFn) => {
  while (true) {
    try {
      const input = await inputFn();
      return validateFn(input);
    } catch (error) {
      Console.printErrorMessage(error.message);
    }
  }
};

export default getValidInput;
