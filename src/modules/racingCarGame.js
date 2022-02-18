import { $ } from "../dom/dom.js";
import { ARROW_RENDER_DELAY_TIME } from "../constants/constants.js";

import RacingCar from "../class/racingCar.js";
import RacingCarView from "../views/racingCarView.js";

import isCarNameInputValid from "./isCarNameInputValid.js";
import isRacingCountInputValid from "./isRacingCountInputValid.js";

export default function racingCarGame() {
    this.racingGameInfo = {
        carNameArray : [],
        raceCount : 0,
    };
    this.racingCarView = new RacingCarView();
    this.racingCarModel = new RacingCar();
    
    this.init = () => {
        addCarNameEvent();
    };
    const addCarNameEvent = () => {
        $('#car-name-button').addEventListener('click', (e) => {
            e.preventDefault();  
            onCarNameButtonClick();
        });
    }
    const onCarNameButtonClick = () => {
        if(isCarNameInputValid($('#car-name-input').value)){
            this.racingGameInfo.carNameArray = $('#car-name-input').value.split(',').map(carName => carName.trim());
            $('.race-count-input-container').classList.toggle('is-active');
            addRacingCountEvent();
        }
    }
    const addRacingCountEvent = () => {
        $('#race-count-button').addEventListener('click', (e) => {
            e.preventDefault();
            onRacingCountButtonClick();
        })
    }
    const onRacingCountButtonClick = () => {
        if(isRacingCountInputValid($('#race-count-input').value)){
            this.racingGameInfo.raceCount = Number($('#race-count-input').value);
            handleRacingCarModel();
        }
    }
    const handleRacingCarModel = () => {
        const racingCar = new RacingCar();
        const carInstanceArray = racingCar.playGame(this.racingGameInfo.carNameArray, this.racingGameInfo.raceCount);
        this.racingCarView.renderRacingContent(carInstanceArray);
        handleOneStep(carInstanceArray);
        this.racingCarView.renderGameWinners(racingCar.getGameWinners());
        addRestartButtonEvent();
    }
    const addRestartButtonEvent = () => {
        $('.restart-button').addEventListener('click', () => {
            $('.race-count-input-container').classList.toggle('is-active');
            location.reload();
        })
    }

    const handleOneStep = (carInstanceArray) => {
        carInstanceArray.forEach((car,index) => {
            if(car.forwardCount !== 0){
                handleOneCarArrowContent(index, car.forwardCount);
            }
        })
    }
    const handleOneCarArrowContent = (elementIndex, forwardCount) => {
        this.racingCarView.renderSpinningContent(elementIndex, forwardCount);
        let stepIndex = 0;
        const timer = setInterval(() => {
            if(stepIndex === forwardCount - 1){
                clearInterval(timer);
            }
            this.racingCarView.renderArrowContent(`.step-${elementIndex}`,stepIndex);
            stepIndex++;
        }, ARROW_RENDER_DELAY_TIME);
    }

}
