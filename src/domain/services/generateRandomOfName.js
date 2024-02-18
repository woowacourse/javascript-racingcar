import RANDOM_NAME_CONFIG from '../../constants/configs/randomNameConfig';

const generateRandomOfName = (carNames) => {
  let generateOfNumber = 0;
  const formattedCarNames = carNames.map((car) => {
    if (!car.length) {
      generateOfNumber += 1;
      return `${RANDOM_NAME_CONFIG.DEFAULT_NAME}${generateOfNumber}`;
    }
    return car;
  });

  return formattedCarNames;
};

export default generateRandomOfName;
