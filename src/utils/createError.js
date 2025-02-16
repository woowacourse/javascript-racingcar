import { ERROR_PREFIX } from "../constants/message.js";

export const createError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}\n`);
};
