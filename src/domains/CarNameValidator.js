import { CAR_SETTING } from "../constants/setting.js";
import { ERROR_MESSAGE } from "../constants/message.js";

export default class CarNameValidator {
  static validateCarName(name) {
    if (
      name.length < CAR_SETTING.minCarName ||
      name.length > CAR_SETTING.maxCarName
    ) {
      throw new Error(ERROR_MESSAGE.carNameLength);
    }
  }
}
