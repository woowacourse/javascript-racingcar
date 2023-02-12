const Console = require('./Console');

const errorCheckFor = (tryFn, catchFn) => {
  try {
    tryFn();
  } catch (error) {
    Console.print(error.message);
    catchFn();
  }
};

module.exports = errorCheckFor;
