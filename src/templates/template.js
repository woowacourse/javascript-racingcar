const template = {
    loader() {
        return '<span class="car-step loader">load</span>';
    },
    step(step) {
        return '<span class="car-step">⬇️️</span>'.repeat(step);
    },
    emptyTrack(cars) {
        return cars
            .map(({ name }) => (
                `<div class="car-track">
                    <div class="car-name">${name}</div>
                    <div class="car-steps">
                    </div>
                </div>`
            )).join('');
    },
    track(cars) {
        return cars
            .map(({ name, step }) => (
                `<div class="car-track">
                    <div class="car-name">${name}</div>
                    <div class="car-steps">
                    ${this.step(step)}
                    </div>
                </div>`
            )).join('');
    },
};

export default template;
