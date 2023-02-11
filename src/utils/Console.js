import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline/promises';

const rl = readline.createInterface({ input, output });

const Console = {
  print(message) {
    console.log(message);
  },

  readline(query) {
    this.print(query);
    return rl.question('');
  },

  close() {
    rl.close();
  },
};

export default Console;
