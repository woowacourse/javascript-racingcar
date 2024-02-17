import { RANDOM } from '../constants/setting';

const randomNumberGenerator = () => {
  const START = RANDOM.MIN;
  const END = RANDOM.MAX;
  const randomNumber = Math.floor(START + Math.random() * END);
  return randomNumber;
};

export default randomNumberGenerator;
