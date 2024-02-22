import { CAR } from '../constants/setting';

const isForward = (randomNumber) => {
  return randomNumber >= CAR.FORWARD_MIN;
};

export default isForward;
