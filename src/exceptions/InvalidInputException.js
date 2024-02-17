import { ERROR_MESSAGES } from '../constants/car-race';

class InvalidInputException extends Error {
  constructor(error) {
    super(`${ERROR_MESSAGES.prefix} ${error}`);
  }
}

export default InvalidInputException;
