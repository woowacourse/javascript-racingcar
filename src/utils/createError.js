import { ERROR_PREFIX } from "../constants/constants.js";

export const createError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}`);
};
