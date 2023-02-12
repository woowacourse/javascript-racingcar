const { DOMAIN: RACING } = require("./CONSTANT");

const Run = {
    randomNumMakeCarGo(car, makeRandomFunction) {
        const randomNum = makeRandomFunction(
            RACING.RANDOM_MIN,
            RACING.RANDOM_MAX
        );
        if (this.isGoStop(randomNum)) car.go();
    },

    isGoStop(num) {
        return num >= RACING.GO_POINT;
    },
};

module.exports = Run;
