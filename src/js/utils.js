export const getRandomNumber = function () {
	return Math.floor(Math.random() * 10);
};

export const isAlphanumeric = function (input) {
	return /^[a-zA-Z0-9]+$/.test(input);
};

export const isNotDuplicatedArray = function (array) {
	return Array.from(new Set(array)).length === array.length;
};

export const $ = function (selector) {
	return document.querySelector(selector);
};

export const sleep = function (seconds) {
	return new Promise(function (resolve, reject) {
		if (seconds <= 0)
			reject(
				new Error(
					'Internal Error : sleep() parameter must be positive.',
				),
			);
		setTimeout(resolve, seconds * 1000);
	});
};
