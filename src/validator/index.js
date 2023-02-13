const CarValidator = require('./CarValidator');
const StringValidator = require('./StringValidator');
const InputsValidator = require('./InputsValidator');

module.exports = { ...StringValidator, CarValidator, InputsValidator };
