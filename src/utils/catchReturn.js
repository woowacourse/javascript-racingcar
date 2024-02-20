import errorHandler from "./errorHandler";

const catchReturn = async (callback) => {
  while (true) {
    try {
      const result = await callback();
      return result;
    } catch (err) {
      errorHandler(err);
    }
  }
};

export default catchReturn;
