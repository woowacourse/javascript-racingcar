const readline = require('readline');

const makeNewReadlineInterface = () => readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  async readLine(query) {
    const rl = makeNewReadlineInterface();
    const answer = await new Promise((resolve) => {
      rl.question(query, resolve);
    });
    rl.close();
    return answer;
  },

  print(message) {
    console.log(message);
  },
};

module.exports = Console;
