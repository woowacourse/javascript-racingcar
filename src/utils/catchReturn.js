import Console from './Console.js';

const catchReturn = async (callback) => {
  let result;

  while (1) {
    try {
      result = await callback();
      return result;
    } catch (e) {
      Console.print(e.message);
    }
  }
};

export default catchReturn;
