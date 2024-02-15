const applyFunctionToValues = (object, fn) => {
  const result = {};
  for (const key in object) {
    result[key] = fn(object[key]);
  }

  return result;
};

export { applyFunctionToValues };
