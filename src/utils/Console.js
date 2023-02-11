import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline/promises';

const rl = readline.createInterface({ input, output });

class Console {
  static readline(query) {
    this.print(query);
    return rl.question('');
  }

  static close() {
    rl.close();
  }

  static print(message) {
    // eslint-disable-next-line no-console
    console.log(message);
  }
}

export default Console;
