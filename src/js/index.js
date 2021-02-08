export default function RacingCar() {
    const carNames = [];

    const resetUI = () => {
        document.querySelector('.try-count-form').style.display = 'none';
        document.querySelector('.progress-container').style.display = 'none';
        document.querySelector('.result-container').style.display = 'none';
    }

    const getCarNames = () => {
        const carNameInput = document.querySelector('.car-name').value;
        carNameInput.split(',').forEach(name => {
            carNames.push(name.trim());
        });
        console.log(carNames);
        document.querySelector('.try-count-form').style.display = 'block';
    }

    const addListeners = () => {
        document.querySelector('.car-name-btn').addEventListener('click', getCarNames);
    }

    const run = () => {
        addListeners();
        resetUI();
    };

    run();
}

new RacingCar();