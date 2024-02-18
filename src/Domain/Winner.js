class Winner {
	#carNames;
	#distance;

	constructor(carNames, distance) {
		this.#carNames = carNames;
		this.#distance = distance;
	}

	decideWinnerAndReturnNames() {
		this.decideWinnerIndex();
		const winnersNames = this.changeIdxToNames(winnerIndexArr);
		return winnersNames;
	}

	decideWinnerIndex() {
		const winnerIndexArr = [];
		const maxValue = Math.max(...this.#distance);

		this.#distance.forEach((position, i) => {
			if (position === maxValue) {
				winnerIndexArr.push(i);
			}
		});
		return winnerIndexArr;
	}

	changeIdxToNames(indexArr) {
		return indexArr.map(e => this.#carNames[e]);
	}
}

export default Winner;
