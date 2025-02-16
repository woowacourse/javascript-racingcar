import Printer from '../view/printMessage.js';

async function loopWhileValid(fn, ...args) {
  while (true) {
    try {
      return await fn(...args);
    } catch (error) {
      Printer.printMessage(error.message);
      Printer.printBlank();
    }
  }
}

export default loopWhileValid;
