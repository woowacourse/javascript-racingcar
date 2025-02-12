import { MAX_RANDOM_NUMBER } from "../constant/constant.js";

const randomNumber = () => {
  return Math.floor(Math.random() * MAX_RANDOM_NUMBER);
};

export default randomNumber;
