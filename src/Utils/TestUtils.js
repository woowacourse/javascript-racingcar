const mockQuestions = inputs => {
	readLineAsync = jest.fn();

	readLineAsync.mockImplementation(() => {
		const input = inputs.shift();

		return Promise.resolve(input);
	});
};

const mockRandoms = numbers => {
	makeRandomNum = jest.fn();
	numbers.reduce((acc, num) => {
		return acc.mockReturnValueOne(num);
	}, makeRandomNum);
};

const getLogSpy = () => {
	const logSpy = jest.spyOn();
};
