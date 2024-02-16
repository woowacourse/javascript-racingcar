//import Condition from "../constant/Condition.js";

const Random = {
  pickNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

export default Random;
