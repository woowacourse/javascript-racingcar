const template = {
    step() {
        return '<span class="car-step">⬇️️</span>';
    },
    track(cars) {
        return cars
            .map(
                ({ name }) => `<div class="car-track">
                        <div class="car-name">${name}</div>
                        <div class="car-steps">
                        </div>
                    </div>`,
            )
            .join('');
    },
    loading() {
        return '<div class="loading"></div>';
    },
};

export default template;
