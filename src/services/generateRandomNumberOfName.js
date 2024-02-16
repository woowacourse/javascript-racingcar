import RANDOM_NAME_CONFIG from '../constants/configs/randomNameConfig.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const generateRandomNumberOfName = (carNames) => {
	const formattedCarNames = carNames.map((car, index) => {
		if (!car.length) {
			carNames[index] = `${RANDOM_NAME_CONFIG.DEFAULT_NAME}${generateRandomNumber() + 1}`;
		}
	});

	return formattedCarNames;
};

export default generateRandomNumberOfName;
