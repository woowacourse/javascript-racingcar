import handleIO from "./handleIO.js";

const catchReturn = async (callback) => {
  let result;

  while (1) {
    try {
      result = await callback();
      return result;
    } catch (e) {
      handleIO.print(e.message);
    }
  }
};

export default catchReturn;
