const { NUMBER } = require("../utils/Constant");

const RandomNumberGenerator = {
    makeRandomNumber(){
        return Math.floor(
            Math.random() * (NUMBER.MAX_RANDOM - NUMBER.MIN_RANDOM) + NUMBER.MIN_RANDOM
          );
    }
}

module.exports = RandomNumberGenerator