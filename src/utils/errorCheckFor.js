const Console = require('./Console');

const errorCheckFor = (resolve, reject) => {
  try {
    resolve();
  } catch (error) {
    Console.print(error.message);
    reject();
  }
};

module.exports = {
  errorCheckFor,
};
