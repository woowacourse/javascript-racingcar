import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline/promises';
import { format } from '../constants/Messages';

const rl = readline.createInterface({ input, output });

const Console = {
  readline(query, ...args) {
    this.printf(query, ...args);
    return rl.question('');
  },

  close() {
    rl.close();
  },

  printf(message, ...args) {
    this.print(format(message, ...args));
  },

  print(message) {
    // eslint-disable-next-line no-console
    console.log(message);
  },
};

export default Console;
