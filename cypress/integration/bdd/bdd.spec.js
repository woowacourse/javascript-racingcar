import { MESSAGES } from "../../../src/js/constants.js";

/// <reference types="cypress" />

context("bdd", () => {
	beforeEach(() => {
		cy.visit("http://127.0.0.1:5500/index.html");
	});

	const typeName = (names) => {
		cy.get("#name-input").clear().type(names, { force: true });
	};

	const typeNameAndSubmit = (names) => {
		typeName(names);
		cy.get("#name-submit-button").click();
	};

	const typeCount = (count) => {
		cy.get("#count-input").clear().type(count, { force: true });
	};

	const typeCountAndSubmit = (count) => {
		typeCount(count);
		cy.get("#count-submit-button").click();
	};

	const nameShould = (chainer, type) => {
		if (type !== undefined) {
			cy.get("#name-input").should(chainer, type);
		} else {
			cy.get("#name-input").should(chainer);
		}
	};

	const countShould = (chainer, type) => {
		if (type !== undefined) {
			cy.get("#count-input").should(chainer, type);
		} else {
			cy.get("#count-input").should(chainer);
		}
	};

	const checkAlertAfterNameSubmit = (alertMessage, stub) => {
		cy.get("#name-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(alertMessage);
			});
	};

	const checkAlertAfterCountSubmit = (alertMessage, stub) => {
		cy.get("#count-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(alertMessage);
			});
	};

	const pasteName = (names) => {
		cy.get("#name-input").clear().invoke("val", names).trigger("input");
	};

	it("이름 입력 칸과 확인 버튼만 있다.", () => {
		nameShould("exist");
		countShould("not.exist");
	});

	it("이름 입력 칸에 placeholder('자동차 이름')가 있다.", () => {
		cy.get("#name-input").should("have.attr", "placeholder", "자동차 이름");
	});

	it("이름 입력 칸에 이름을 입력하고 확인 버튼을 누르면 칸이 비워지고, 횟수 입력 칸이 나온다.", () => {
		typeNameAndSubmit("EAST, WEST, SOUTH, NORTH");
		countShould("exist");
	});

	it("이름 입력 칸은 알파벳, 한글, ‘,’만 입력 가능하다.", () => {
		typeName("EA45ST3?S가!능");
		nameShould("have.value", "EASTS가능");

		typeName("1234자동차");
		nameShould("have.value", "자동차");

		typeName("!@#1자동#$,123차");
		nameShould("have.value", "자동,차");
	});

	it("횟수 입력 칸에 placeholder('시도 횟수')가 있다.", () => {
		typeNameAndSubmit("EAST, WEST, SOUTH, NORTH");
		cy.get("#count-input").should("have.attr", "placeholder", "시도 횟수");
	});

	it("횟수 입력 칸에 횟수를 입력하고 확인 버튼을 누르면 칸이 비워진다.", () => {
		typeNameAndSubmit("EAST, WEST, SOUTH, NORTH");
		typeCountAndSubmit("3");
		countShould("have.value", "");
	});

	it("횟수 입력 칸에 횟수를 입력하고 확인 버튼을 누르면 진행창/결과창/리셋 버튼이 나온다.", () => {
		typeNameAndSubmit("EAST, WEST, SOUTH, NORTH");
		typeCountAndSubmit("3");

		cy.get("#race-progress-container").should("exist");
		cy.get("#result-container").should("exist");
		cy.get("#reset-button").should("exist");
	});

	it("이름 확인 버튼을 연달아 눌러도 횟수 입력 칸과 버튼은 한 번만 나온다.", () => {
		typeNameAndSubmit("EAST, WEST, SOUTH, NORTH");

		cy.get("#setting-container")
			.children()
			.should(($children) => {
				expect($children.length).to.eq(3);
			});

		typeNameAndSubmit("EAST, WEST, SOUTH, NORTH");

		cy.get("#setting-container")
			.children()
			.should(($children) => {
				expect($children.length).to.eq(3);
			});
	});

	it("횟수 확인 버튼을 연달아 눌러도 진행창/결과창/리셋 버튼은 한 번만 나온다.", () => {
		typeNameAndSubmit("EAST, WEST, SOUTH, NORTH");
		typeCountAndSubmit("3");

		cy.get("#app")
			.children()
			.should(($children) => {
				expect($children.length).to.eq(3);
			});

		typeCountAndSubmit("3");
		typeCountAndSubmit("3");
		typeCountAndSubmit("3");

		cy.get("#app")
			.children()
			.should(($children) => {
				expect($children.length).to.eq(3);
			});
	});

	it("입력한 이름이 ‘,’를 기준으로 진행창에 출력된다.", () => {
		typeNameAndSubmit("EAST, WEST, SOUTH");
		typeCountAndSubmit("3");

		cy.get("#race-progress-screen>div>.car-player")
			.eq(0)
			.should("have.text", "EAST");
		cy.get("#race-progress-screen>div>.car-player")
			.eq(1)
			.should("have.text", "WEST");
		cy.get("#race-progress-screen>div>.car-player")
			.eq(2)
			.should("have.text", "SOUTH");
	});

	it("가장 많이 전진한 자동차가 우승인지 판별한다.", () => {
		typeNameAndSubmit("EAST, WEST, SOUTH");
		typeCountAndSubmit("30");

		cy.get(".car-player").then((cars) => {
			const carObjects = [...cars].map((car) => ({
				name: car.innerText,
				score: car.parentNode.children.length - 1,
			}));

			const maxScore = Math.max(...carObjects.map((car) => car.score));
			const winners = carObjects.reduce(
				(winnerCars, currentCar) =>
					currentCar.score === maxScore
						? winnerCars.concat(currentCar.name)
						: winnerCars,
				[]
			);
			const winnerResult = winners.join(", ");
			cy.get("#result-container")
				.find("section")
				.find("h2")
				.contains(winnerResult);
		});
	});

	it("각 자동차의 최대 전진 횟수가 입력한 횟수보다 적거나 같다.", () => {
		typeNameAndSubmit("EAST, WEST, SOUTH");
		typeCountAndSubmit("10");

		cy.get(".car-player").then((cars) => {
			const carObjects = [...cars].map((car) => ({
				name: car.innerText,
				score: car.parentNode.children.length - 1,
			}));

			const maxScore = Math.max(...carObjects.map((car) => car.score));
			expect(maxScore <= 10).to.equal(true);
		});
	});

	it("우승자의 수는 입력한 이름의 수보다 적거나 같다.", () => {
		const carNames = ["EAST", "WEST", "SOUTH"];
		typeNameAndSubmit("EAST, WEST, SOUTH");
		typeCountAndSubmit("3");

		cy.get("#result-container")
			.find("section")
			.find("h2")
			.then(($resultH2) => {
				const winners = $resultH2[0].innerText.slice(10, -2).split(",");
				expect(winners.length <= carNames.length).to.equal(true);
			});
	});

	it("리셋 버튼을 누르면 초기 상태로 돌아간다.", () => {
		typeNameAndSubmit("EAST, WEST, SOUTH");
		typeCountAndSubmit("3");

		cy.get("#race-progress-screen>div>.car-player")
			.eq(0)
			.should("have.text", "EAST");
		cy.get("#race-progress-screen>div>.car-player")
			.eq(1)
			.should("have.text", "WEST");
		cy.get("#race-progress-screen>div>.car-player")
			.eq(2)
			.should("have.text", "SOUTH");

		cy.get("#reset-button").click();

		nameShould("exist");
		cy.get("#name-submit-button").should("exist");
		countShould("not.exist");
		cy.get("#count-submit-button").should("not.exist");

		typeNameAndSubmit("안,녕");
		cy.get("#count-input").should("exist");
		cy.get("#count-submit-button").should("exist");
		typeCountAndSubmit("3");

		cy.get("#race-progress-screen>div>.car-player")
			.eq(0)
			.should("have.text", "안");
		cy.get("#race-progress-screen>div>.car-player")
			.eq(1)
			.should("have.text", "녕");
	});

	it("이름 입력 칸에 어떤 문자열을 붙여넣어도 알파벳, 한글, ','만 붙여넣어진다.", () => {
		pasteName("a!b@c#,$d%e^f,g&*()");
		nameShould("have.value", "abc,def,g");

		pasteName("123가,456나,     789다");
		nameShould("have.value", "가,나,다");
	});

	it("빈 문자인 이름을 등록하면 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();
		cy.on("window:alert", stub);

		checkAlertAfterNameSubmit(MESSAGES.EMPTY_NAME, stub);
		typeName("EAST,,SOUTH");
		checkAlertAfterNameSubmit(MESSAGES.EMPTY_NAME, stub);
	});

	it("5자 초과인 이름을 등록하면 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();
		cy.on("window:alert", stub);

		typeName("bob dylan");
		checkAlertAfterNameSubmit(MESSAGES.TOO_LONG_NAME, stub);
	});

	it("이름을 등록한 뒤에 다시 이름을 등록하려 할 경우 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();
		cy.on("window:alert", stub);

		typeNameAndSubmit("sehee");
		typeName("EAST,WEST,SOUTH");

		checkAlertAfterNameSubmit(MESSAGES.NAME_ALREADY_REGISTERED, stub);

		cy.reload();
		cy.on("window:alert", stub);

		typeNameAndSubmit("dawit");
		typeCountAndSubmit("3");

		typeName("EAST,WEST,SOUTH");
		checkAlertAfterNameSubmit(MESSAGES.NAME_ALREADY_REGISTERED, stub);
	});

	it("횟수를 설정한 뒤에 다시 횟수를 설정하려 할 경우 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();
		cy.on("window:alert", stub);

		typeNameAndSubmit("sehee");
		typeCountAndSubmit("3");
		typeCount("909");
		checkAlertAfterCountSubmit(MESSAGES.COUNT_ALREADY_REGISTERED, stub);
	});

	it("횟수를 설정하려 할 때 횟수가 자연수가 아닐 경우 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();
		cy.on("window:alert", stub);

		typeNameAndSubmit("sehee");
		typeCount("-8");
		checkAlertAfterCountSubmit(MESSAGES.NOT_NATURAL_NUMBER, stub);

		cy.reload();
		cy.on("window:alert", stub);

		typeNameAndSubmit("sehee");
		typeCount("e");
		checkAlertAfterCountSubmit(MESSAGES.NOT_NATURAL_NUMBER, stub);

		cy.reload();
		cy.on("window:alert", stub);

		typeNameAndSubmit("sehee");

		console.error("ERROR: 통과되면 안되는 테스트가 통과됨.");
		typeCount("2000000000000");
		checkAlertAfterCountSubmit(MESSAGES.NOT_NATURAL_NUMBER, stub);

		cy.reload();
		cy.on("window:alert", stub);

		typeNameAndSubmit("sehee");
		checkAlertAfterCountSubmit(MESSAGES.NOT_NATURAL_NUMBER, stub);
	});

	it("중복된 이름을 포함할 경우 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();
		cy.on("window:alert", stub);

		typeName("sehee,sehee");
		checkAlertAfterNameSubmit(MESSAGES.OVERWRITED, stub);
	});

	it("횟수를 너무 큰 숫자(최대 20000으로 설정)로 설정하려 할 경우 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();
		cy.on("window:alert", stub);

		typeNameAndSubmit("sehee,dawit");

		typeCount("30000");
		checkAlertAfterCountSubmit(MESSAGES.TOO_BIG_COUNT, stub);
	});

	it("너무 많은 이름(최대 9개로 설정)을 등록하려 할 경우 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();
		cy.on("window:alert", stub);

		typeName("a,b,c,d,e,f,g,h,i,j");
		checkAlertAfterNameSubmit(MESSAGES.TOO_MANY_NAMES, stub);
	});
});
