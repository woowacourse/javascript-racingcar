import { MAX } from "../constant/range.js";

const randomNumber = () => {
  return Math.floor(Math.random() * MAX.RANDOM_NUMBER);
};

export default randomNumber;
