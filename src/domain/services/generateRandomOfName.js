import RANDOM_NAME_CONFIG from '../../constants/configs/randomNameConfig.js';
import trimmedString from '../../utils/trimmedString.js';

const generateRandomOfName = (carNames) => {
  let generateOfNumber = 0;
  return trimmedString(carNames).map((car) => (car.length ? car : `${RANDOM_NAME_CONFIG.DEFAULT_NAME}${++generateOfNumber}`));
};

export default generateRandomOfName;
