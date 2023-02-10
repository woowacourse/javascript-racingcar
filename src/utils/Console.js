const rl = require('readline');

const Console = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = Console;
