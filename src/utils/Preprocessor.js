const preprocessor = {
  process(input, funcs) {
    return funcs.reduce((value, func) => {
      if (Array.isArray(func)) {
        const [f, ...args] = func;
        return f.apply(this, [value, ...args]);
      }
      return func.call(this, value);
    }, input);
  },

  applyFunctionToInput(input, func) {
    return Array.isArray(input) ? input.map(func) : func(input);
  },

  convertStringToNumber(input) {
    return this.applyFunctionToInput(input, (str) => Number(str));
  },

  filterOutEmptyStrings(input) {
    return input.filter((str) => str !== '');
  },

  splitStringByDelimiter(input, delimiter) {
    return this.applyFunctionToInput(input, (str) => str.split(delimiter));
  },

  trimEdgeWhitespaces(input) {
    return this.applyFunctionToInput(input, (str) => str.trim());
  }
};

export default preprocessor;
