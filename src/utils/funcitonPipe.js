const functionPipe = (data, ...functions) => {
  functions.forEach((func) => {
    func(data);
  });
};

module.exports = functionPipe;
