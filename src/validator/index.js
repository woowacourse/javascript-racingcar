const Car = require('./Car');
const Common = require('./Common');
const Inputs = require('./Inputs');

const Validator = { ...Common };

module.exports = Object.assign(Validator, { Car, Inputs });
