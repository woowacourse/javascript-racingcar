import asyncFunctionHandlerWithError from './asyncFunctionHandlerWithError.js';
import readline from 'readline';

const readLineAsyncSeperatedFromType = (query, type = 'string') => {
	return new Promise((resolve, reject) => {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		asyncFunctionHandlerWithError(query, type, resolve, rl);
	});
};

export default readLineAsyncSeperatedFromType;
