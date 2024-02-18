import readline from 'readline';
import asyncFunctionHandlerWithError from './asyncFunctionHandlerWithError.js';

const readLineAsyncSeperatedFromType = (query, type = 'string') =>
  new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    asyncFunctionHandlerWithError(query, type, resolve, rl);
  });

export default readLineAsyncSeperatedFromType;
