import { ERROR } from '../../constant/strings.js';

const ExceptionHandler = {
  throwError(errorMessage) {
    throw new Error(`${ERROR.prefix} ${errorMessage}`);
  },

  throwErrorIfInvalid(condition, errorMessage) {
    if (!condition) ExceptionHandler.throwError(errorMessage);
  },

  // eslint-disable-next-line max-lines-per-function
  async retryAsyncWithErrorLogging(asyncFunc, maxRetries = Infinity) {
    let retries = 0;
    let errorMessage;

    while (retries <= maxRetries) {
      try {
        return await asyncFunc();
      } catch (error) {
        errorMessage = error.message;
        console.log(error.message);
        retries += 1;
      }
    }

    this.throwError(errorMessage);

    return null;
  }
};

export default ExceptionHandler;
