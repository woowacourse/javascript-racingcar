import { POSITION_SYMBOL } from "../constant/constant.js";

const positionToStr = (position) => {
  return POSITION_SYMBOL.repeat(position);
};

export default positionToStr;
