import { $ } from "./dom/dom.js";
import { ARROW_RENDER_DELAY_TIME, RESULT_RENDER_DELAY_TIME } from "./constants/constants.js";

import RacingCar from "./class/racingCar.js";
import RacingCarView from "./views/racingCarView.js";

import isCarNameInputValid from "./modules/isCarNameInputValid.js";
import isRacingCountInputValid from "./modules/isRacingCountInputValid.js";

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
    const handleRacingCarModel =  () => {
        const carInstanceArray = this.racingCarModel.playGame(this.racingGameInfo.carNameArray, this.racingGameInfo.raceCount);
        this.racingCarView.renderRacingContent(carInstanceArray);
        handleOneStepRenderEvent(carInstanceArray);
    }
    const handleOneStepRenderEvent = (carInstanceArray) => {
        handleSpinningRenderEvent(carInstanceArray);
        let stepCount = 1; 
        const timer = setInterval(() => {
            if(stepCount === carInstanceArray.map(car => car.forwardCount).sort((a,b) => b - a)[0]){
                clearInterval(timer);
                gameEnd();
            }
            handleForwardCountEvent(stepCount, carInstanceArray);
            stepCount++;
        },ARROW_RENDER_DELAY_TIME);
    }
    const handleSpinningRenderEvent = (carInstanceArray) => {
        carInstanceArray.forEach((car, index) => {
            if(car.forwardCount !== 0){
                this.racingCarView.renderSpinningContent(index, car.forwardCount);
            }
        })
    }
    const handleForwardCountEvent = (stepCount, carInstanceArray) => {
        carInstanceArray.forEach((car ,index) => {
            if(car.forwardCount >= stepCount && car.forwardCount !== 0){
                this.racingCarView.renderArrowContent(`.step-${index}`, stepCount -1 );
            }
        });
    }
    const gameEnd = () => {
        this.racingCarView.renderGameWinners(this.racingCarModel.getGameWinners());
        addRestartButtonEvent();
        showWinnerAlert();
    }
    const addRestartButtonEvent = () => {
        $('.restart-button').addEventListener('click', () => {
            $('.race-count-input-container').classList.toggle('is-active');
            location.reload();
        })
    }

    const showWinnerAlert = () => {
        setTimeout(() => {
            alert(`게임의 우승자인 ${this.racingCarModel.getGameWinners()} 축하합니다`)
        }, RESULT_RENDER_DELAY_TIME);
        clearTimeout();
    }
    

}
