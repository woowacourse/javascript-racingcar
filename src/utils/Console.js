import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline/promises';
import { format } from '../constants/Messages';

const rl = readline.createInterface({ input, output });

class Console {
  static readline(query, ...args) {
    this.printf(query, ...args);
    return rl.question('');
  }

  static close() {
    rl.close();
  }

  static printf(message, ...args) {
    this.print(format(message, ...args));
  }

  static print(message) {
    // eslint-disable-next-line no-console
    console.log(message);
  }
}

export default Console;
