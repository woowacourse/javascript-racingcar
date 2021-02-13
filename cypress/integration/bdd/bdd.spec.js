/// <reference types="cypress" />

context("bdd", () => {
	beforeEach(() => {
		cy.visit("http://127.0.0.1:5500/index.html");
	});

	it("이름 입력 칸과 확인 버튼만 있다.", () => {
		cy.get("#name-input").should("exist");
		cy.get("#name-submit-button").should("exist");
		cy.get("#count-input").should("not.exist");
		cy.get("#count-submit-button").should("not.exist");
	});

	it("이름 입력 칸에 placeholder('자동차 이름')가 있다.", () => {
		cy.get("#name-input").should("have.attr", "placeholder", "자동차 이름");
	});

	it("이름 입력 칸에 이름을 입력하고 확인 버튼을 누르면 칸이 비워지고, 횟수 입력 칸이 나온다.", () => {
		cy.get("#name-input").type("EAST, WEST, SOUTH, NORTH", { force: true });
		cy.get("#name-submit-button").click();
		cy.get("#count-input").should("exist");
		cy.get("#count-submit-button").should("exist");
	});

	it("이름 입력 칸은 알파벳, 한글, ‘,’만 입력 가능하다.", () => {
		cy.get("#name-input").type("EA45ST3?S가!능", { force: true });
		cy.get("#name-input").should("have.value", "EASTS가능");
		cy.reload();
		cy.get("#name-input").type("1234자동차", { force: true });
		cy.get("#name-input").should("have.value", "자동차");
		cy.reload();
		cy.get("#name-input").type("!@#1자동#$,123차", { force: true });
		cy.get("#name-input").should("have.value", "자동,차");
	});

	it("횟수 입력 칸에 placeholder('시도 횟수')가 있다.", () => {
		cy.get("#name-input").type("EAST, WEST, SOUTH, NORTH", { force: true });
		cy.get("#name-submit-button").click();
		cy.get("#count-input").should("have.attr", "placeholder", "시도 횟수");
	});

	it("횟수 입력 칸에 횟수를 입력하고 확인 버튼을 누르면 칸이 비워진다.", () => {
		cy.get("#name-input").type("EAST, WEST, SOUTH, NORTH", { force: true });
		cy.get("#name-submit-button").click();

		cy.get("#count-input").type("3", { force: true });
		cy.get("#count-submit-button").click();
		cy.get("#count-input").should("have.value", "");
	});

	it("횟수 입력 칸에 횟수를 입력하고 확인 버튼을 누르면 진행창/결과창/리셋 버튼이 나온다.", () => {
		cy.get("#name-input").type("EAST, WEST, SOUTH, NORTH", { force: true });
		cy.get("#name-submit-button").click();

		cy.get("#count-input").type("3", { force: true });
		cy.get("#count-submit-button").click();

		cy.get("#race-progress-container").should("exist");
		cy.get("#result-container").should("exist");
		cy.get("#reset-button").should("exist");
	});

	it("이름 확인 버튼을 연달아 눌러도 횟수 입력 칸과 버튼은 한 번만 나온다.", () => {
		cy.get("#name-input").type("EAST, WEST, SOUTH, NORTH", { force: true });
		cy.get("#name-submit-button").click();

		cy.get("#setting-container")
			.children()
			.should(($children) => {
				expect($children.length).to.eq(3);
			});

		cy.get("#name-input").type("EAST, WEST, SOUTH, NORTH", { force: true });
		cy.get("#name-submit-button").click();

		cy.get("#setting-container")
			.children()
			.should(($children) => {
				expect($children.length).to.eq(3);
			});
	});

	it("횟수 확인 버튼을 연달아 눌러도 진행창/결과창/리셋 버튼은 한 번만 나온다.", () => {
		cy.get("#name-input").type("EAST, WEST, SOUTH, NORTH", { force: true });
		cy.get("#name-submit-button").click();

		cy.get("#count-input").type("3", { force: true });
		cy.get("#count-submit-button").click();

		cy.get("#app")
			.children()
			.should(($children) => {
				expect($children.length).to.eq(3);
			});

		cy.get("#count-input").type("3", { force: true });
		cy.get("#count-submit-button").click();
		cy.get("#count-input").type("3", { force: true });
		cy.get("#count-submit-button").click();
		cy.get("#count-input").type("3", { force: true });
		cy.get("#count-submit-button").click();

		cy.get("#app")
			.children()
			.should(($children) => {
				expect($children.length).to.eq(3);
			});
		cy.wait(10);
		cy.reload();
	});

	it("입력한 이름이 ‘,’를 기준으로 진행창에 출력된다.", () => {
		cy.get("#name-input").type("EAST,WEST,SOUTH", { force: true });
		cy.get("#name-submit-button").click();

		cy.get("#count-input").type("3", { force: true });
		cy.get("#count-submit-button").click();

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
		cy.get("#name-input").type("EAST,WEST,SOUTH", { force: true });
		cy.get("#name-submit-button").click();

		cy.get("#count-input").type("100", { force: true });
		cy.get("#count-submit-button").click();

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
		cy.get("#name-input").type("EAST,WEST,SOUTH", { force: true });
		cy.get("#name-submit-button").click();

		cy.get("#count-input").type("10", { force: true });
		cy.get("#count-submit-button").click();

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
		cy.get("#name-input").type(carNames.join(","), { force: true });
		cy.get("#name-submit-button").click();

		cy.get("#count-input").type("3", { force: true });
		cy.get("#count-submit-button").click();

		cy.get("#result-container")
			.find("section")
			.find("h2")
			.then(($resultH2) => {
				const winners = $resultH2[0].innerText.slice(10, -2).split(",");
				expect(winners.length <= carNames.length).to.equal(true);
			});
	});

	it("리셋 버튼을 누르면 초기 상태로 돌아간다.", () => {
		cy.get("#name-input").type("EAST,WEST,SOUTH", { force: true });
		cy.get("#name-submit-button").click();

		cy.get("#count-input").type("3", { force: true });
		cy.get("#count-submit-button").click();

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
		cy.get("#name-input").should("exist");
		cy.get("#name-submit-button").should("exist");
		cy.get("#count-input").should("not.exist");
		cy.get("#count-submit-button").should("not.exist");

		cy.get("#name-input").type("안,녕", { force: true });
		cy.get("#name-submit-button").click();
		cy.get("#count-input").should("exist");
		cy.get("#count-submit-button").should("exist");
		cy.get("#count-input").type("3", { force: true });
		cy.get("#count-submit-button").click();

		cy.get("#race-progress-screen>div>.car-player")
			.eq(0)
			.should("have.text", "안");
		cy.get("#race-progress-screen>div>.car-player")
			.eq(1)
			.should("have.text", "녕");
	});

	it("이름 입력 칸에 어떤 문자열을 붙여넣어도 알파벳, 한글, ','만 붙여넣어진다.", () => {
		cy.get("#name-input")
			.clear()
			.invoke("val", "a!b@c#,$d%e^f,g&*()")
			.trigger("input");
		cy.get("#name-input").should("have.value", "abc,def,g");

		cy.get("#name-input")
			.clear()
			.invoke("val", "123가,456나,     789다")
			.trigger("input");
		cy.get("#name-input").should("have.value", "가,나,다");
	});

	it("빈 문자인 이름을 등록하면 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();

		cy.on("window:alert", stub);

		cy.get("#name-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(
					"빈 문자인 이름은 등록할 수 없습니다."
				);
			});
		cy.reload();

		cy.get("#name-input").type("EAST,,SOUTH", { force: true });

		cy.get("#name-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(
					"빈 문자인 이름은 등록할 수 없습니다."
				);
			});
	});

	it("5자 초과인 이름을 등록하면 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();

		cy.on("window:alert", stub);

		cy.get("#name-input").type("bob dylan", { force: true });
		cy.get("#name-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(
					"5자를 넘는 이름은 등록할 수 없습니다."
				);
			});
	});

	it("이름을 등록한 뒤에 다시 이름을 등록하려 할 경우 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();

		cy.on("window:alert", stub);

		cy.get("#name-input").type("sehee", { force: true });
		cy.get("#name-submit-button").click();
		cy.get("#name-input").type("EAST,WEST,SOUTH", { force: true });
		cy.get("#name-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith("이미 이름이 등록되었습니다.");
			});
		cy.reload();

		cy.on("window:alert", stub);

		cy.get("#name-input").type("dawit", { force: true });
		cy.get("#name-submit-button").click();
		cy.get("#count-input").type("3", { force: true });
		cy.get("#count-submit-button").click();
		cy.get("#name-input").type("EAST,WEST,SOUTH", { force: true });
		cy.get("#name-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith("이미 이름이 등록되었습니다.");
			});
	});

	it("횟수를 설정한 뒤에 다시 횟수를 설정하려 할 경우 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();

		cy.on("window:alert", stub);

		cy.get("#name-input").type("sehee", { force: true });
		cy.get("#name-submit-button").click();
		cy.get("#count-input").type("3", { force: true });
		cy.get("#count-submit-button").click();
		cy.get("#count-input").type("909", { force: true });
		cy.get("#count-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith("이미 횟수를 설정하였습니다.");
			});
	});

	it("횟수를 설정하려 할 때 횟수가 자연수가 아닐 경우 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();

		cy.on("window:alert", stub);

		cy.get("#name-input").type("sehee", { force: true });
		cy.get("#name-submit-button").click();
		cy.get("#count-input").type("-8", { force: true });
		cy.get("#count-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(
					"자연수만 설정할 수 있습니다."
				);
			});
		cy.reload();

		cy.on("window:alert", stub);

		cy.get("#name-input").type("sehee", { force: true });
		cy.get("#name-submit-button").click();
		cy.get("#count-input").type("e", { force: true });
		cy.get("#count-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(
					"자연수만 설정할 수 있습니다."
				);
			});
		cy.reload();

		cy.on("window:alert", stub);

		cy.get("#name-input").type("sehee", { force: true });
		cy.get("#name-submit-button").click();
		cy.get("#count-input").type("4.4", { force: true });
		cy.get("#count-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(
					"자연수만 설정할 수 있습니다."
				);
			});
		cy.reload();

		cy.on("window:alert", stub);

		cy.get("#name-input").type("sehee", { force: true });
		cy.get("#name-submit-button").click();
		cy.get("#count-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(
					"자연수만 설정할 수 있습니다."
				);
			});
		cy.reload();
	});
	it("중복된 이름을 포함할 경우 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();

		cy.on("window:alert", stub);

		cy.get("#name-input").type("sehee,sehee", { force: true });
		cy.get("#name-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(
					"중복된 이름은 등록할 수 없습니다."
				);
			});
	});

	it("횟수를 너무 큰 숫자(최대 20000으로 설정)로 설정하려 할 경우 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();

		cy.on("window:alert", stub);

		cy.get("#name-input").type("sehee,dawit", { force: true });
		cy.get("#name-submit-button").click();
		cy.get("#count-input").type("30000", { force: true });
		cy.get("#count-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(
					"원활한 게임을 위해 횟수는 20000 이하로 제한하고 있습니다."
				);
			});
	});

	it("너무 많은 이름(최대 9개로 설정)을 등록하려 할 경우 alert 메시지를 표시한다.", () => {
		const stub = cy.stub();

		cy.on("window:alert", stub);

		cy.get("#name-input").type("a,b,c,d,e,f,g,h,i,j", { force: true });
		cy.get("#name-submit-button")
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith(
					"가로 스크롤 생성을 방지하기 위해 이름 등록은 9개 이하로 제한하고 있습니다."
				);
			});
	});
});
