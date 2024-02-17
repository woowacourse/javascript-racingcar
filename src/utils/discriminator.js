import { CAR } from '../constants/setting';

const discriminator = (randomNumber) => {
  const isForward = randomNumber >= CAR.FORWARD_MIN;
  return isForward;
};

export default discriminator;
