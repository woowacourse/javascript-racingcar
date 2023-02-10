import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  read(query) {
    return new Promise((resolve) => {
      rl.question(query, (input) => resolve(input));
    });
  },
  print(text) {
    console.log(text);
  },
  close() {
    rl.close();
  },
};

export default Console;
