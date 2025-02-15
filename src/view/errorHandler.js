import ERROR from "../constant/error.js";

const errorHandler = (error) => {
  console.log(`${ERROR.HEADER} ${error.message}\n`);
};

export default errorHandler;
