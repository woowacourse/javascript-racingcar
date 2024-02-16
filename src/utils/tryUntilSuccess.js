import { print } from "./console.js";

const tryUntilSuccess = (func) => {
  const repeat = async (...args) => {
    while (true) {
      try {
        return await func(...args);
      } catch (error) {
        print(error.message);
      }
    }
  };

  return repeat;
};

export { tryUntilSuccess };
