import printMessage from './printMessage.js';

async function loopWhileValid(fn, ...args) {
  while (true) {
    try {
      return await fn(...args);
    } catch (error) {
      printMessage(error.message);
      printMessage();
    }
  }
}

export default loopWhileValid;
