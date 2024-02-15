const Preprocessor = {
  process(input, funcs) {
    return funcs.reduce((value, func) => {
      if (Array.isArray(func)) {
        const [f, ...args] = func;
        return f.apply(this, [value, ...args]);
      }
      return func.call(this, value);
    }, input);
  },
  filterOutEmptyStrings(input) {
    return input.filter((str) => str !== '');
  },

  trimEdgeWhitespaces(input) {
    return this.applyFunctionToInput(input, (str) => str.trim());
  },
};

export default Preprocessor;
