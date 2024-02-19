import { checkIsValidate, createReadLineInterface } from './readLineUtils';

const Console = {
  print(query) {
    if (arguments.length !== 1) {
      throw new Error('arguments must be 1');
    }
    console.log(query);
  },

  readLineAsync(query) {
    return new Promise((resolve, reject) => {
      checkIsValidate(arguments.length, query, reject);
      const rl = createReadLineInterface();
      rl.question(query, (input) => {
        rl.close();
        resolve(input);
      });
    });
  },
};

export default Console;
