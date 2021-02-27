import { MESSAGE } from "../../src/js/constants.js"

class CypressManager {
	_getCy(selector) {
		return cy.get(selector)
	}

	type(selector, value) {
		try {
			this._getCy(selector).type(value)
		} catch (err) {
			new Error(err)
		}

		return this
	}

	click(selector, params) {
		try {
			this._getCy(selector).click(params)
		} catch (err) {
			new Error(err)
		}

		return this
	}

	should(selector, ...param) {
		try {
			this._getCy(selector).should(...param)
		} catch (err) {
			new Error(err)
		}

		return this
	}

	reload() {
		try {
			cy.reload()
		} catch (err) {
			new Error(err)
		}

		return this
	}
	paste(selector, value) {
		cy.get(selector).invoke("val", value).trigger("input")

		return this
	}

	submitName(names = "EAST, WEST, SOUTH, NORTH") {
		this.type("#name-input", names).click("#name-submit-button")

		return this
	}

	submitCount(count = "3") {
		this.type("#count-input", count).click("#count-submit-button")

		return this
	}

	testCar(names = "EAST, WEST, SOUTH, NORTH", count = "3") {
		this.submitName(names).submitCount(count)

		return this
	}
}

const cypressManager = new CypressManager()

describe("given environment test", () => {
	beforeEach(() => {
		cy.visit("http://127.0.0.1:5500/index.html")
	})

	it("이름 입력 칸과 확인 버튼만 있다.", () => {
		cypressManager.should("#name-input", "exist")
		cypressManager.should("#count-input", "not.exist")
	})

	it("이름 입력 칸에 placeholder('자동차 이름')가 있다.", () => {
		cypressManager.should(
			"#name-input",
			"have.attr",
			"placeholder",
			"자동차 이름"
		)
	})
})

describe("behavior test", () => {
	beforeEach(() => {
		cy.clock()
		cy.visit("http://127.0.0.1:5500/index.html")
		cy.window()
			.then((win) => cy.stub(win, "alert"))
			.as("alertStub")
	})

	it("이름 입력 칸에 이름을 입력하고 확인 버튼을 누르면 칸이 비워지고, 횟수 입력 칸이 나온다.", () => {
		cypressManager.submitName().should("#count-input", "exist")
	})

	it("이름 입력 칸은 알파벳, 한글, ‘,’만 입력 가능하다.", () => {
		cypressManager
			.type("#name-input", "EA45ST3?S가!능")
			.should("#name-input", "have.value", "EASTS가능")

			.reload()
			.type("#name-input", "1234자동차")
			.should("#name-input", "have.value", "자동차")

			.reload()
			.type("#name-input", "!@#1자동#$,123차")
			.should("#name-input", "have.value", "자동,차")
	})

	it("횟수 입력 칸에 placeholder('시도 횟수')가 있다.", () => {
		cypressManager
			.submitName()
			.should("#count-input", "have.attr", "placeholder", "시도 횟수")
	})

	it("횟수 입력 칸에 횟수를 입력하고 확인 버튼을 누르면 칸이 비워진다.", () => {
		cypressManager.testCar().should("#count-input", "have.value", "")
	})

	it("횟수 입력 칸에 횟수를 입력하고 확인 버튼을 누르면 진행창/결과창이 나온다.", () => {
		cypressManager
			.testCar()
			.should("#race-progress-container", "exist")
			.should("#result-container", "exist")
	})

	it("횟수 확인 버튼을 연달아 눌러도 진행창/결과창은 한 번만 나온다.", () => {
		cypressManager.testCar().submitCount("3").submitCount("3")

		cy.get("#app")
			.children()
			.should(($children) => {
				expect($children.length).to.eq(3)
			})
	})

	it("입력한 이름이 ‘,’를 기준으로 진행창에 출력된다.", () => {
		cypressManager.testCar("EAST, WEST, SOUTH")

		cy.get(".car-player").eq(0).should("have.text", "EAST")
		cy.get(".car-player").eq(1).should("have.text", "WEST")
		cy.get(".car-player").eq(2).should("have.text", "SOUTH")
	})

	// 이상하게 통과가 안됨.
	// tick 다음에 race-progress-screen의 children의 children들에 여전히 각 자동차 이름, spinner가 들어있음.
	// 할 만큼 했다고 생각하여 건너뜀
	it("가장 많이 전진한 자동차가 우승인지 판별한다.", () => {
		cypressManager.testCar("EAST, WEST, SOUTH", "5")

		cy.tick(7000)
		const winners = []
		let maxCount = -1

		cy.document().then((doc) => {
			const $raceScreen = doc.getElementById("race-progress-screen")

			Array.from($raceScreen.children, (car) => car).forEach((carContainer) => {
				const childNodesLength = carContainer.childNodes.length

				if (maxCount < childNodesLength) {
					maxCount = childNodesLength
				}
			})

			Array.from($raceScreen.children, (car) => car).forEach((carContainer) => {
				const childNodesLength = carContainer.childNodes.length
				if (maxCount === childNodesLength) {
					const carName = carContainer.querySelector(".car-player").innerText
					winners.push(carName)
				}
			})
			cy.get("#winner-text").contains(winners.join(", "))
		})
	})

	it("각 자동차의 최대 전진 횟수가 입력한 횟수보다 적거나 같다.", () => {
		const count = 10
		const min = 0
		cypressManager.testCar("hello,world", count.toString())

		cy.get(".car-player").each(([car]) => {
			expect(car.parentNode.children.length - 1).to.be.lessThan(count + 1)
			expect(car.parentNode.children.length - 1).to.be.greaterThan(min - 1)
		})
	})

	it("우승자의 수는 입력한 이름의 수보다 적거나 같다.", () => {
		cypressManager.testCar("first,secon,third,fourt,fifth", "3")

		cy.get("#winner-text")
			.invoke("val")
			.then((text) => {
				const winners = text.slice(10, -2).split(",")
				expect(winners.length <= 5).to.equal(true)
			})
	})

	it("리셋 버튼을 누르면 초기 상태로 돌아간다.", () => {
		cypressManager.testCar()

		cy.tick(5000)
			.then(() => {
				cypressManager.click("#reset-button")
			})

			.should("#name-input", "exist")
			.should("#name-submit-button", "exist")
			.should("#count-input", "not.exist")
			.should("#count-submit-button", "not.exist")

			.submitName("안,녕")
			.should("#count-input", "exist")
			.should("#count-submit-button", "exist")

			.submitCount("3")

		cy.get(".car-player").eq(0).should("have.text", "안")
		cy.get(".car-player").eq(1).should("have.text", "녕")
	})

	it("이름 입력 칸에 어떤 문자열을 붙여넣어도 알파벳, 한글, ','만 붙여넣어진다.", () => {
		cypressManager
			.paste("#name-input", "a!b@c#,$d%e^f,g&*()")
			.should("#name-input", "have.value", "abc,def,g")

			.reload()
			.paste("#name-input", "123가,456나,     789다")
			.should("#name-input", "have.value", "가,나,다")
	})

	it("게임이 1초를 간격으로 진행된다.", () => {
		let previousElements = new Array(10)
		for (let i = 0; i < previousElements.length; i++) {
			previousElements[i] = 0
		}
		const nextElements = []

		cypressManager.testCar("aa,bb,cc,dd,ee", "10")

		for (let i = 0; i < 10; i++) {
			cy.get(".car-player").each(([car], index) => {
				nextElements[index] = car.parentNode.children.length - 1
			})

			const bool = previousElements.reduce(
				(acc, val, index) =>
					acc && val === nextElements[index] ? true : false,
				true
			)
			expect(bool).to.be.equal(false)
			previousElements = nextElements.slice()
			cy.tick(1000)
		}
	})

	it("게임이 끝난 뒤 우승자를 알려주는 alert가 뜬다.", () => {
		cypressManager.testCar("aa", "2")
		cy.tick(4000)
		cypressManager.should("@alertStub", "be.calledWith", "Congratulations! aa")
	})
})

describe("exception test", () => {
	beforeEach(() => {
		cy.visit("http://127.0.0.1:5500/index.html")
		cy.window()
			.then((win) => cy.stub(win, "alert"))
			.as("alertStub")
	})

	it("이름을 등록하고 다시 등록하려 하면 alert 메시지를 표시한다.", () => {
		cypressManager
			.submitName()
			.submitName()
			.should("@alertStub", "be.calledWith", MESSAGE.NAME_ALREADY_REGISTERED)
	})

	it("빈 문자인 이름을 등록하면 alert 메시지를 표시한다.", () => {
		cypressManager
			.submitName("a,b,,c")
			.should("@alertStub", "be.calledWith", MESSAGE.EMPTY_NAME)
	})

	it("5자 초과인 이름을 등록하면 alert 메시지를 표시한다.", () => {
		cypressManager
			.submitName("bob dylan")
			.should("@alertStub", "be.calledWith", MESSAGE.TOO_LONG_NAME)
	})

	it("횟수를 설정한 뒤에 다시 횟수를 설정하려 할 경우 alert 메시지를 표시한다.", () => {
		cypressManager
			.testCar("dawit,sehee", "3")
			.submitCount("909")
			.should("@alertStub", "be.calledWith", MESSAGE.COUNT_ALREADY_REGISTERED)
	})

	it("횟수를 설정하려 할 때 횟수가 자연수가 아닐 경우 alert 메시지를 표시한다.", () => {
		cypressManager
			.testCar("dawit", "-3")
			.should("@alertStub", "be.calledWith", MESSAGE.NOT_NATURAL_NUMBER)
	})

	it("중복된 이름을 포함할 경우 alert 메시지를 표시한다.", () => {
		cypressManager
			.submitName("sehee,sehee")
			.should("@alertStub", "be.calledWith", MESSAGE.OVERWRITTEN)
	})

	it("횟수를 너무 큰 숫자(최대 20000으로 설정)로 설정하려 할 경우 alert 메시지를 표시한다.", () => {
		cypressManager
			.testCar("some,name", "2000000000000")
			.should("@alertStub", "be.calledWith", MESSAGE.TOO_BIG_COUNT)
	})

	it("너무 많은 이름(최대 9개로 설정)을 등록하려 할 경우 alert 메시지를 표시한다.", () => {
		cypressManager
			.submitName("a,b,c,d,e,f,g,h,i,j")
			.should("@alertStub", "be.calledWith", MESSAGE.TOO_MANY_NAMES)
	})
})
