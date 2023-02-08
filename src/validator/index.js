const Car = require('./Car');
const Common = require('./Common');

const Validator = { ...Common };

module.exports = Object.assign(Validator, { Car });
