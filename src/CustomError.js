import { ERROR_PREFIX } from "./constants/errors/prefix.js";

class CustomError extends Error {
  constructor(message) {
    super(`${ERROR_PREFIX} ${message}`);
  }
}

export default CustomError;
