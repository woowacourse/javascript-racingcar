function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
}

module.exports = generateRandomNumber;

console.log(generateRandomNumber());
