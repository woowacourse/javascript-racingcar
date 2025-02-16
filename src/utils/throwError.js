import { ERROR_PREFIX } from "../constants/Constants.js";

const throwError = (errorMessage) => {
  throw new Error(`${ERROR_PREFIX} ${errorMessage}`);
};
export default throwError;
