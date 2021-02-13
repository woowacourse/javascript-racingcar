import View from "./View.js";

class Model {
	constructor() {
		this.cars = [];
		this.count = 0;
	}

	initializeCars(inputValue) {
		this.cars = inputValue.split(",").map((name) => ({ name, score: 0 }));
	}

	isAlreadyCountClicked($settingContainer) {
		return $settingContainer.childElementCount !== 2;
	}

	setCount(value) {
		this.count = value;
	}

	runArrowRenderByCount() {
		for (let i = 0; i < this.count; i++) {
			const boolsAboutMovement = this.getBoolsAboutMovement();
			View.arrowRender(boolsAboutMovement);
		}
	}

	getBoolsAboutMovement() {
		const previousScores = [...this.cars].map((car) => car.score);
		this.iterateByCarsToMove();
		const boolsAboutMovement = this.cars.map(
			(car, i) => car.score !== previousScores[i]
		);
		return boolsAboutMovement;
	}

	iterateByCarsToMove() {
		const moveOrNot = (car) => {
			const randomNumber = this.getRandomNumber({
				startNumber: 0,
				endNumber: 9,
			});
			this.isInMovableRange(randomNumber, 4, 9) && this.move(car);
		};
		this.cars.forEach(moveOrNot);
	}

	getRandomNumber({ startNumber, endNumber }) {
		return (
			startNumber + Math.floor(Math.random() * (endNumber - startNumber + 1))
		);
	}

	isInMovableRange(number, min, max) {
		return number >= min && number <= max;
	}

	move(car) {
		car.score++;
	}

	getResultText() {
		const winners = this.getWinners();
		return `🏆 최종 우승자: ${winners.join(", ")} 🏆`;
	}

	getWinners() {
		const maxScore = this.getMaxScore();
		const carObjectsWithMaxScore = this.getCarObjectsWithMaxScore(maxScore);
		return carObjectsWithMaxScore.map((car) => car.name);
	}

	getMaxScore() {
		return this.cars.reduce(
			(maxScore, car) => (car.score > maxScore ? car.score : maxScore),
			0
		);
	}

	getCarObjectsWithMaxScore(maxScore) {
		return this.cars.filter((car) => car.score === maxScore);
	}

	clearStates() {
		this.cars = [];
		this.count = 0;
	}

	validateName(inputValue) {
		const names = inputValue.split(",");

		if (this.cars.length !== 0) {
			return { validity: false, alertMessage: "이미 이름이 등록되었습니다." };
		} else if (names.includes("")) {
			return {
				validity: false,
				alertMessage: "빈 문자인 이름은 등록할 수 없습니다.",
			};
		} else if (names.length > 9) {
			return {
				validity: false,
				alertMessage:
					"가로 스크롤 생성을 방지하기 위해 이름 등록은 9개 이하로 제한하고 있습니다.",
			};
		} else if (names.some((name) => name.length > 5)) {
			return {
				validity: false,
				alertMessage: "5자를 넘는 이름은 등록할 수 없습니다.",
			};
		} else if ([...new Set(names)].length !== names.length) {
			return {
				validity: false,
				alertMessage: "중복된 이름은 등록할 수 없습니다.",
			};
		} else return { validity: true, alertMessage: null };
	}

	validateCount(submittedCount) {
		if (this.count !== 0) {
			return { validity: false, alertMessage: "이미 횟수를 설정하였습니다." };
		} else if (
			submittedCount === NaN ||
			submittedCount <= 0 ||
			Number.isInteger(submittedCount) === false
		) {
			return { validity: false, alertMessage: "자연수만 설정할 수 있습니다." };
		} else if (submittedCount > 20000) {
			return {
				validity: false,
				alertMessage:
					"원활한 게임을 위해 횟수는 20000 이하로 제한하고 있습니다.",
			};
		} else return { validity: true, alertMessage: null };
	}
}

export default new Model();
