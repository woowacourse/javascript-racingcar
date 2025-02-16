const splitStringToArray = (string, symbol) => string.split(symbol);

const _reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const _pipe =
  (...fns) =>
  (x) =>
    _reduce((v, f) => f(v), x, fns);

export { _reduce, _pipe, splitStringToArray };

