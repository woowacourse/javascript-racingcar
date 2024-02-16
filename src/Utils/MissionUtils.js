import readline from 'readline';

export const readLineAsync = query => {
	return new Promise((resolve, reject) => {
		if (typeof query !== 'string') {
			reject(new Error('query must be string'));
		}

		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		rl.question(query, input => {
			rl.close();
			resolve(input);
		});
	});
};

export const makeRandomNum = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
