const { RANDOM } = require("../utils/Constant");

const RandomNumberGenerator = {
    makeRandomNumber(){
        return Math.floor(
            Math.random() * (RANDOM.MAXNUMBER - RANDOM.MINNUMBER) + RANDOM.MINNUMBER
          );
    }
}

module.exports = RandomNumberGenerator