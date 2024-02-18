import readline from 'readline';

function isValidArgumentsLength(argumentsLength, reject) {
  if (argumentsLength !== 1) {
    reject(new Error('arguments must be 1'));
  }
}

function isValidQueryType(query, reject) {
  if (typeof query !== 'string') {
    reject(new Error('query must be string'));
  }
}

function checkIsValidate(length, query, reject) {
  isValidArgumentsLength(length, reject);
  isValidQueryType(query, reject);
}

function createReadLineInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function readLineAsync(query) {
  return new Promise((resolve, reject) => {
    checkIsValidate(arguments.length, query, reject);
    const rl = createReadLineInterface();
    rl.question(query, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

export default readLineAsync;
