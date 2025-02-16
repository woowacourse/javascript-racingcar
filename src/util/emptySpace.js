import { EMPTY_SPACE_REGEX } from "../constant/constant.js";

const emptySpaceEraser = (str) => {
  return str.replace(EMPTY_SPACE_REGEX, "");
};

export default emptySpaceEraser;
