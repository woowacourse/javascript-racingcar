import readline from 'readline';
import OutputView from '../view/OutputView.js';

export async function readLineAsync(query) {
  return new Promise((resolve, reject) => {
    if (arguments.length !== 1) {
      reject(new Error('arguments must be 1'));
    }

    if (typeof query !== 'string') {
      reject(new Error('query must be string'));
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(query, input => {
      rl.close();
      resolve(input);
    });
  });
}

export async function retryUntilSuccess(callbackFn) {
  try {
    return await callbackFn();
  } catch (error) {
    OutputView.printErrorMessage(error);
    return retryUntilSuccess(callbackFn);
  }
}

export function getRandomInteger(maxValue) {
  return Math.floor(Math.random() * (maxValue + 1));
}
