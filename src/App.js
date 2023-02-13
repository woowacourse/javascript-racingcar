const RacingGame = require('./domain/controller/RacingGame');
const { isNotNumber } = require('./domain/validation');

new RacingGame().play();

console.log(parseInt(true));
console.log(parseInt(null));
console.log(parseInt(undefined));
console.log(parseInt([1]));
console.log(parseInt([3, 2]));

console.log(isNotNumber([1]));
