import CONDITIONS from '../constant/Conditions.js';

const numberToDistanceSymbol = (num) => {
  return CONDITIONS.distance.repeat(num);
};

export default numberToDistanceSymbol;
