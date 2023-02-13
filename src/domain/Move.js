const { RACING } = require("./Constant_domain");

const Move = {
    carMove(car, makeRandomFunction) {
        const randomNum = makeRandomFunction(
            RACING.RANDOM_MIN,
            RACING.RANDOM_MAX
        );
        if (this.isMove(randomNum)) car.move();
    },

    isMove(num) {
        return num >= RACING.GO_POINT;
    },
};

module.exports = Move;
