import RANDOM_NAME_CONFIG from '../constants/configs/randomNameConfig.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const generateRandomNumberOfName = (carNames) => {
	// if(haveSpace(carNames)){
	//   const randomCarName =  `${RANDOM_NAME_CONFIG.default_name}${generateRandomNumber() + 1}`;

	const formattedCarNames = carNames.map((car, index) => {
		if (!car.length) {
			carNames[index] = `${RANDOM_NAME_CONFIG.default_name}${generateRandomNumber() + 1}`;
		}
	});

	return formattedCarNames;

	console.log(carNames);
};

export default generateRandomNumberOfName;
