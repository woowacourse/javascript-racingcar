const OutputView = require('../view/OutputView');
const InputValidator = require('./InputValidator');

const handleError = (error) => {
  OutputView.print(error.message);
};

const terminalInputValidator = new InputValidator(handleError);

module.exports = terminalInputValidator;
