const { DOMAIN: RACING } = require("./CONSTANT");

const Run = {
    isCarGo(car, makeRandomFunction) {
        const randomNum = makeRandomFunction(
            RACING.RANDOM_MIN,
            RACING.RANDOM_MAX
        );
        if (this.goStop(randomNum)) car.go();
    },

    goStop(num) {
        return num >= RACING.GO_POINT;
    },
};

module.exports = Run;
