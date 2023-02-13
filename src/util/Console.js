import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Console {
  static readLine(string, callback) {
    rl.question(string, callback);
  }

  static print(string) {
    console.log(string);
  }

  static close() {
    rl.close();
  }
}

export default Console;
