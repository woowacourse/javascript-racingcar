import { OutputView } from '../view/OutputView.js';
export const withTryCatch = (fn) => (input) => {
  try {
    return fn(input);
  } catch (error) {
    OutputView.printError(error);
  }
};
