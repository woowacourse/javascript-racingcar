import { printMessage } from "./console.js";

export const tryUntilSuccess = (func) => {
  const repeat = async (...args) => {
    while (true) {
      try {
        return await func(...args);
      } catch (error) {
        printMessage(error.message);
      }
    }
  };

  return repeat;
};
