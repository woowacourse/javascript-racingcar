const { readLine } = require('./readLine');

const close = () => {
  readLine.close();
};

module.exports = { close };
