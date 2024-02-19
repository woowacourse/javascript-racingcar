import RANDOM_CAR_NAME_CONFIG from '../constants/configs/randomCarNameConfig.js';

const fillEmptyCarNames = (carNames) => {
  let userNumberCount = 1;

  const formattedCarNames = carNames.map((carName) => {
    return carName.length ? carName : `${RANDOM_CAR_NAME_CONFIG.DEFAULT}${userNumberCount++}`;
  });

  return formattedCarNames;
};

export default fillEmptyCarNames;
