import Console from './Console.js';

const catchReturn = async (callback) => {
  while (true) {
    try {
      return await callback();
    } catch (e) {
      Console.print(e.message);
    }
  }
};

export default catchReturn;
