const Controller = require('./controller/Controller');
const validation = require('./validation');

// new Controller().play();

console.log(validation.attempt(1));
// console.log(validation.attempt(true));
// console.log(validation.attempt(false));
// console.log(validation.attempt([1]));
// console.log(validation.attempt([1, 2]));
// console.log(validation.attempt(['as']));
console.log(validation.attempt('asd'));
