import handleIO from "./handleIO";

const errorHandler = (error) => {
  handleIO.print(error.message);
};

export default errorHandler;
