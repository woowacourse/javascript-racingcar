import { MAX } from "../constant/constant.js";

const randomNumber = () => {
  return Math.floor(Math.random() * MAX.RANDOM_NUMBER);
};

export default randomNumber;
