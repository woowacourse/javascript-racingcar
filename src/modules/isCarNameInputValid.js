import { CARNAME_LENGTH_LIMIT } from "../constants/constants.js";
import { OVER_CARNAME_LENGTH_ERROR } from "../constants/error.js";
import checkUserInputIsEmpty from "./checkUserInputIsEmpty.js";
import { $ } from "../dom/dom.js";

function checkCarNameLength(carNameArray) {
  if (
    carNameArray.filter((carName) => carName.length > CARNAME_LENGTH_LIMIT)
      .length
  ) {
    throw new Error(OVER_CARNAME_LENGTH_ERROR);
  }
  return true;
}

export default function isCarNameInputValid(userCarNameInput) {
  try {
    let isCarNameValid = false;
    if (!checkUserInputIsEmpty(userCarNameInput)) {
      isCarNameValid = checkCarNameLength(
        userCarNameInput.split(",").map((carName) => carName.trim())
      );
    }
    return isCarNameValid;
  } catch (err) {
    $("#car-name-input").value = "";
    alert(err.message);
  }
}
