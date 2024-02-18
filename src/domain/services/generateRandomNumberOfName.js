import RANDOM_NAME_CONFIG from '../../constants/configs/randomNameConfig';
import generateRandomNumber from '../../utils/generateRandomNumber';

const generateRandomNumberOfName = (carNames) => {
  const formattedCarNames = carNames.map((car, index) => {
    if (!car.length) {
      carNames[index] = `${RANDOM_NAME_CONFIG.DEFAULT_NAME}${generateRandomNumber({ from: 0, to: 9 })}`;
    }
  });

  return formattedCarNames;
};

export default generateRandomNumberOfName;
