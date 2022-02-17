const template = {
    step(step) {
        return '<span class="car-step">⬇️️</span>'.repeat(step);
    },
    track(cars) {
        return cars
            .map(
                ({ name, step }) => `<div class="car-track">
                        <div class="car-name">${name}</div>
                        <div class="car-steps">
                            ${this.step(step)}
                        </div>
                    </div>`,
            )
            .join('');
    },
};

export default template;
