import SETTING from "../constants/Setting.js";

function randomNumber() {
  const max = SETTING.maxRandomNumber - SETTING.minRandomNumber + 1;
  const randomNumber =
    Math.floor(Math.random() * max) + SETTING.minRandomNumber;

  return randomNumber;
}

export default randomNumber;
