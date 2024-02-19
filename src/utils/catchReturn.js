import handleIO from "./handleIO.js";

const catchReturn = async (callback) => {
  while (true) {
    try {
      const result = await callback();
      return result;
    } catch (err) {
      handleIO.print(err.message);
    }
  }
};

export default catchReturn;
