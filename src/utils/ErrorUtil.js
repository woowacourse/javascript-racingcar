import { print } from "./ConsoleUtil.js";

const tryUntilSuccess = (func) => {
  const repeatable = async (...args) => {
    while (true) {
      try {
        return await func(...args);
      } catch (error) {
        print(error.message);
      }
    }
  };

  return repeatable;
};

export { tryUntilSuccess };
