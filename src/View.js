const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const View = {
  input: (question, callback) => {
    rl.question(question, callback);
  },

  output: (data, type = '') => {
    if (!type) return console.log(data);

    if (type === 'movingLog') {
      Object.entries(data).forEach(([key, value]) => {
        console.log(`${key} : ${value ? '-'.repeat(value) : ''}`);
      });
      return console.log();
    }

    if (type === 'winner') {
      return console.log(`${data.join(', ')}가 최종 우승했습니다.`);
    }
  },

  close: () => {
    rl.close();
  },
};

module.exports = { View };
