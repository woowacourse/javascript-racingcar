const InputValidator = require('./InputValidator');

const handleError = (error) => {
  alert(error.message);
};

const webInputValidator = new InputValidator(handleError);

module.exports = webInputValidator;
