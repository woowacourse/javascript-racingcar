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

export function checkIsValidate(length, query, reject) {
  isValidArgumentsLength(length, reject);
  isValidQueryType(query, reject);
}

export function createReadLineInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}
