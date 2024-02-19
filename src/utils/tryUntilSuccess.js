import { printMessage } from "./console.js";

export const tryUntilSuccess = (func, thisArg) => {
  const repeat = async (...args) => {
    while (true) {
      try {
        return await func.bind(thisArg)(...args);
      } catch (error) {
        printMessage(error.message);
      }
    }
  };

  return repeat;
};
