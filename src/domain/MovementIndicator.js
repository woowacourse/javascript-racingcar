const { MOVEMENT } = require("../constant/Constants");
const { FORWARD_CONDITION_NUMBER, FORWARD_DISTANCE } = MOVEMENT;

const movingDistance = (randomNumber) => {
  return randomNumber >= FORWARD_CONDITION_NUMBER ? FORWARD_DISTANCE : 0;
};

module.exports = movingDistance;
