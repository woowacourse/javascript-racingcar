const ERROR_CODE = require('../constants/errorCode');
const ERROR_MESSAGE = require('../constants/errorMessage');

const createParams = ({ code, payload = null }, value) => {
  if (!ERROR_MESSAGE[code]) {
    return [
      ERROR_MESSAGE[ERROR_CODE.WRONG_ERROR_CODE](),
      { cause: { code: ERROR_CODE.WRONG_ERROR_CODE, value: code } },
    ];
  }

  return [ERROR_MESSAGE[code](payload), { cause: { code, value } }];
};

class InputError extends Error {
  constructor(about, value = null) {
    super(...createParams(about, value));
  }
}

module.exports = { InputError, ERROR_CODE };
