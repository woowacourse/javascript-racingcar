import { SELECTOR } from "../constants.js"
import { $, isNodeList } from "../utils.js"

class View {
	initialRender($parentElement) {
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

	renderCountSection($settingContainer) {
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

	renderProgressContainer(cars) {
		const $app = $(SELECTOR.APP)
		$app.insertAdjacentHTML(
			"beforeend",
			`
        <div id="race-progress-container" class="d-flex justify-center mt-5">
            <section class="mt-4">
                <div id="race-progress-screen" class="d-flex">
				${cars
					.map(
						(car) => `                        
                        <div>
                            <div class="car-player mr-2">${car.name}</div>
                            <div class="spinner-container-container d-flex justify-center mt-4 "></div>
                        </div>`
					)
					.join("")}
                </div>
            </section>
        </div>
		<div id="result-container" class="d-flex justify-center mt-5">
            <section>
                <h2 id="winner-text"></h2>
                <div class="d-flex justify-center">
                </div>
            </section>
        </div>
		`
		)
	}

	renderArrow(movedCars) {
		const $carNames = $(SELECTOR.CAR_PLAYER)

		movedCars.forEach((moved, i) => {
			if (!moved) return
			isNodeList($carNames)
				? $carNames[i].insertAdjacentHTML(
						"afterend",
						`<div class="forward-icon mt-2">⬇️</div>`
				  )
				: $carNames.insertAdjacentHTML(
						"afterend",
						`<div class="forward-icon mt-2">⬇️</div>`
				  )
		})
	}

	renderWinner(winners) {
		const $resultH2 = $(SELECTOR.WINNER_TEXT)
		$resultH2.innerText = `🏆 최종 우승자: ${winners.join(", ")} 🏆`
		const $resultContainer = $(`${SELECTOR.RESULT_CONTAINER} .justify-center`)
		$resultContainer.insertAdjacentHTML(
			"beforeend",
			`<button id="reset-button" type="button" class="btn btn-cyan">다시 시작하기</button>`
		)
	}

	addSpinner() {
		const $spinnerContainerContainers = $(SELECTOR.SPINNER_CONTAINER_CONTAINER)
		if (isNodeList($spinnerContainerContainers)) {
			$spinnerContainerContainers.innerHTML = `
		    <div class="relative spinner-container">
		        <span class="material spinner"></span>
		    </div>
		        `
			return
		}
		$spinnerContainerContainers.forEach(($spinnerContainerContainer) => {
			$spinnerContainerContainer.innerHTML = `
		    <div class="relative spinner-container">
		        <span class="material spinner"></span>
		    </div>
		        `
		})
	}

	removeSpinner() {
		const $spinnerContainerContainers = $(SELECTOR.SPINNER_CONTAINER_CONTAINER)
		if (isNodeList(spinnerContainerContainers)) {
			return $spinnerContainerContainers.remove()
		}
		$spinnerContainerContainers.forEach(($spinnerContainerContainer) => {
			$spinnerContainerContainer.remove()
		})
	}
}

export default View
