const { readLine } = require('./readLine');

const input = (question, callback) => {
  readLine.question(question, callback);
};

module.exports = { input };
