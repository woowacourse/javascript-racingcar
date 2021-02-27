// 모델과 뷰에 있는 것들을 조합해서 하나의 기능을 수행하는
// 작은 함수들의 집합입니다.
// 컨트롤러의 핸들러들에서는 이 파일에서 export하는
// 함수들을 이용해 구현됩니다.

import { SELECTOR } from "./constants.js"
import { $, delay } from "./utils.js"

export const isAlreadyCountClicked = ($settingContainer) => {
	return $settingContainer.childElementCount !== 2
}

export const filterCarName = (target) => {
	const RegExp = /[^a-z가-힣A-Z,]/gi
	if (RegExp.test(target.value)) {
		target.value = target.value.replace(RegExp, "")
	}
}

export const getCount = () => {
	return Number($(SELECTOR.COUNT_INPUT).value)
}

export const clearCountInput = () => {
	$(SELECTOR.COUNT_INPUT).value = ""
}

export const alertWinner = (winners) => {
	window.alert && alert(`Congratulations! ${winners.join(", ")}`)
}

export const progressRacing = async ({
	model,
	view,
	addResetButtonHandler,
	_this,
}) => {
	view.addSpinner()
	for (let i = 0; i < model.count; i++) {
		await delay(1000)
		const { movedCars } = model.moveCars()
		view.renderArrow(movedCars)
	}
	view.removeSpinner()

	await delay(2000)

	alertWinner(model.winners)
	view.renderWinner(model.winners)
	addResetButtonHandler.bind(_this)()
}
