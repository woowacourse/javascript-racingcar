import { MAX_SUBMITABLE_COUNT, SCROLL_PREVENT_LENGTH, MAX_NAME_LENGTH } from "./constatns.js";

class Validator {
	isFirstSubmittedName(nameLength) {
		return nameLength === 0;
	}

	isIncludeBlank(names) {
		return names.includes("");
	}

	isOverScrollPreventLength(nameLength) {
		return nameLength > SCROLL_PREVENT_LENGTH;
	}

	isOverFiveCharacter(names) {
		return names.some((name) => name.length > MAX_NAME_LENGTH);
	}

	isDuplicatedName(names) {
		return [...new Set(names)].length !== names.length;
	}

	isFirstSubmittedCount(count) {
		return count === 0;
	}

	isValidInteger(submittedCount) {
		return isNaN(submittedCount) === false && submittedCount >= 0 && Number.isInteger(submittedCount);
	}

	isUnderMaxCount(submittedCount) {
		return submittedCount < MAX_SUBMITABLE_COUNT;
	}
}

export default new Validator();
