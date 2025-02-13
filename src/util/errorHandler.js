import { ERROR_HEADER } from "../constant/constant.js";

const errorHandler = (error) => {
  console.log(`${ERROR_HEADER} ${error.message}\n`);
};

export default errorHandler;
