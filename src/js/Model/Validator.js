import { MAX_SUBMITABLE_COUNT, SCROLL_PREVENT_LENGTH, MAX_NAME_LENGTH } from "./constatns.js";

function isFirstSubmittedName(nameLength) {
	return nameLength === 0;
}

function isIncludeBlank(carNameArray) {
	return carNameArray.includes("");
}

function isOverScrollPreventLength(nameLength) {
	return nameLength > SCROLL_PREVENT_LENGTH;
}

function isHaveNameOverMaxLength(carNameArray) {
	return carNameArray.some((name) => name.length > MAX_NAME_LENGTH);
}

function isDuplicatedName(carNameArray) {
	return [...new Set(carNameArray)].length !== carNameArray.length;
}

function isFirstSubmittedCount(count) {
	return count === 0;
}

function isValidInteger(submittedCount) {
	return isNaN(submittedCount) === false && submittedCount >= 0 && Number.isInteger(submittedCount);
}

function isUnderMaxCount(submittedCount) {
	return submittedCount < MAX_SUBMITABLE_COUNT;
}

export {
	isFirstSubmittedName,
	isIncludeBlank,
	isOverScrollPreventLength,
	isHaveNameOverMaxLength,
	isDuplicatedName,
	isFirstSubmittedCount,
	isValidInteger,
	isUnderMaxCount,
};
