const randomNumberGenerator = () => {
  const START = 0;
  const END = 10;
  const randomNumber = Math.floor(START + Math.random() * END);
  return randomNumber;
};

export default randomNumberGenerator;
