class Winner {
	#carNames;
	#distance;

	constructor(carNames, distance) {
		this.#carNames = carNames;
		this.#distance = distance;
	}

	decideWinnerAndReturnNames() {
		const winnerIndexArr = this.decideWinnerIndex();
		const winnersNames = this.changeIdxToNames(winnerIndexArr);
		return winnersNames;
	}

	decideWinnerIndex() {
		const maxValue = Math.max(...this.#distance);

		const winnerIndexArr = this.#distance.reduce((acc, cur, idx) => {
			if (cur === maxValue) {
				acc.push(idx);
			}
			return acc;
		}, []);
		return winnerIndexArr;
	}

	changeIdxToNames(indexArr) {
		return indexArr.map(e => this.#carNames[e]);
	}
}

export default Winner;
