import RacingCar from "../class/racingCar.js";
import { $ } from "../dom/dom.js";
import isCarNameInputValid from "./isCarNameInputValid.js";
import isRacingCountInputValid from "./isRacingCountInputValid.js";
import RacingCarView from "../views/racingCarView.js";

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
            this.racingCarView.renderRaceGameCountElement();
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
        this.racingCarView.renderRacingContent(racingCar.playGame(this.racingGameInfo.carNameArray,this.racingGameInfo.raceCount));
        this.racingCarView.renderGameWinners(racingCar.getGameWinners());
        addRestartButtonEvent();
    }
    const addRestartButtonEvent = () => {
        $('.restart-button').addEventListener('click', () => {
            location.reload();
        })
    }
    
}