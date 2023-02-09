const hasError = (validator, callback) => {
  try {
    validator();
  } catch (error) {
    Utils.print(error);
    callback();
    return true;
  }
  return false;
};

module.exports = { hasError };
