const { DOMAIN } = require("./CONSTANT");

const Run = {

    isCarGo(car, makeRandomFunction) {
        const randomNum = makeRandomFunction(DOMAIN.RANDOM_MIN, DOMAIN.RANDOM_MAX);
        if (this.goStop(randomNum)) car.go();
    },

    goStop(num) {
        return (num >= DOMAIN.GO_POINT)
    },

}

module.exports = Run