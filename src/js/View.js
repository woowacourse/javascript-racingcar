import { ID } from "./constants.js"
import {
	getCarNameDiv,
	appendRecursiveChild,
	getArrowElement,
} from "./utils.js"

class View {
	initialzeRender($parentElement) {
		$parentElement.innerHTML = `
        <div class="d-flex justify-center mt-5">
            <div id="setting-container">
                <section>
                    <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
                    <p>
                        5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
                        예시) EAST, WEST, SOUTH, NORTH
                    </p>
                </section>
                <section>
                    <div class="d-flex">
                        <input type="text" id="name-input" class="w-100 mr-2" placeholder="자동차 이름" />
                        <button type="button" id="name-submit-button" class="btn btn-cyan">확인</button>
                    </div>
                </section>
            </div>
        </div>`
	}

	countSectionRender($settingContainer) {
		$settingContainer.insertAdjacentHTML(
			"beforeend",
			`
        <section calss="mt-5">
            <p>시도할 횟수를 입력해주세요.</p>
            <div class="d-flex">
                <input type="number" id="count-input" class="w-100 mr-2" placeholder="시도 횟수" />
                <button type="button" id="count-submit-button" class="btn btn-cyan">확인</button>
            </div>
        </section>`
		)
	}

	progressContainerRender() {
		const $app = document.getElementById(ID.APP)
		$app.insertAdjacentHTML(
			"beforeend",
			`
        <div id="race-progress-container" class="d-flex justify-center mt-5">
            <section class="mt-4">
                <div id="race-progress-screen" class="d-flex">
                </div>
            </section>
        </div>`
		)
		$app.insertAdjacentHTML(
			"beforeend",
			`
        <div id="result-container" class="d-flex justify-center mt-5">
            <section>
                <h2 id="winner-text"></h2>
                <div class="d-flex justify-center">
                    <button id="reset-button" type="button" class="btn btn-cyan">다시 시작하기</button>
                </div>
            </section>
        </div>`
		)
	}

	progressCarsRender(cars) {
		const $raceProgressScreen = document.getElementById(ID.RACE_PROGRESS_SCREEN)
		cars.forEach((car) => {
			const $container = document.createElement("div")
			const $carPlayer = getCarNameDiv(car.name)
			appendRecursiveChild($raceProgressScreen, [$container, $carPlayer])
		})
	}

	arrowRender(boolsAboutMovement) {
		const $cars = document.getElementById("race-progress-screen").children
		boolsAboutMovement.forEach((moved, i) => {
			const $arrow = getArrowElement()
			moved && $cars[i].appendChild($arrow)
		})
	}

	winnerRender(winners) {
		const $resultH2 = document.getElementById(ID.WINNER_TEXT)
		$resultH2.innerText = `🏆 최종 우승자: ${winners.join(", ")} 🏆`
	}
}

export default View
