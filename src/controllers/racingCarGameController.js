import { $ } from "../dom/dom.js";
import {
  ARROW_RENDER_DELAY_TIME,
  FORWARD_MARK_NUMBER,
  RESULT_RENDER_DELAY_TIME,
} from "../constants/constants.js";

import RacingCarModel from "../models/racingCarModel.js";
import RacingCarView from "../views/racingCarView.js";

import isCarNameInputValid from "../modules/isCarNameInputValid.js";
import isRacingCountInputValid from "../modules/isRacingCountInputValid.js";
import generateRandomNumber from "../modules/generateRandomNumber.js";

export default function racingCarGameController() {
  this.racingGameInfo = {
    carNameArray: [],
    raceCount: 0,
  };
  this.carInstanceArray = [];
  this.racingCarView = new RacingCarView();
  this.racingCarModel = new RacingCarModel();

  this.init = () => {
    addCarNameEvent();
  };
  const addCarNameEvent = () => {
    $("#car-name-button").addEventListener("click", onCarNameButtonClick);
  };
  const onCarNameButtonClick = (event) => {
    event.preventDefault();
    if (isCarNameInputValid($("#car-name-input").value)) {
      this.racingGameInfo.carNameArray = $("#car-name-input")
        .value.split(",")
        .map((carName) => carName.trim());
      $("#car-name-input").disabled = true;
      $("#car-name-button").disabled = true;
      $(".race-count-input-container").classList.toggle("is-active");
      addRacingCountEvent();
    }
  };
  const addRacingCountEvent = () => {
    $("#race-count-button").addEventListener("click", onRacingCountButtonClick);
  };
  const onRacingCountButtonClick = (event) => {
    event.preventDefault();
    if (isRacingCountInputValid($("#race-count-input").value)) {
      this.racingGameInfo.raceCount = Number($("#race-count-input").value);
      $("#race-count-input").disabled = true;
      $("#race-count-button").disabled = true;
      playGame();
    }
  };
  const playGame = () => {
    this.racingCarView.renderRacingContent(this.racingGameInfo);
    this.racingCarModel.generateCarInstanceArray(
      this.racingGameInfo.carNameArray
    );
    handleStepDelayRenderEvent();
  };

  this.successCount = [];
  const handleStepDelayRenderEvent = () => {
    this.successCount = new Array(this.racingGameInfo.carNameArray.length).fill(
      0
    );
    let stepCount = 0;
    updateForwardCount(stepCount);
    addSpinningEvent(stepCount);
    const stepTimer = setInterval(() => {
      handleArrowRenderEvent(stepCount);
      if (stepCount === this.racingGameInfo.raceCount - 1) {
        clearInterval(stepTimer);
        gameEnd();
      }
      stepCount++;
      updateForwardCount(stepCount);
      addSpinningEvent(stepCount);
    }, ARROW_RENDER_DELAY_TIME);
  };

  const updateForwardCount = (stepCount) => {
    if (stepCount >= this.racingGameInfo.raceCount) {
      return;
    }
    this.racingCarModel.getCarInstanceArray().forEach((item, index) => {
      if (generateRandomNumber() >= FORWARD_MARK_NUMBER) {
        this.racingCarModel.updateCarForwardCount(index);
        this.successCount[index] = this.successCount[index] + 1;
      }
    });
  };

  const addSpinningEvent = (stepCount) => {
    if (stepCount === 0) {
      this.successCount.forEach((count, index) => {
        if (count > 0) {
          this.racingCarView.renderSpinningEvent(count - 1, index);
        }
      });
      return;
    }
    if (stepCount > this.racingGameInfo.raceCount - 1) {
      return;
    }
    this.successCount.forEach((count, index) => {
      if (count > 0) {
        this.racingCarView.renderSpinningEvent(count - 1, index);
      }
    });
  };

  const handleArrowRenderEvent = (stepCount) => {
    if (stepCount === 0) {
      this.successCount.forEach((count, index) => {
        if (count > 0) {
          this.racingCarView.renderArrowContent(count, index);
        }
      });
      return;
    }
    if (stepCount > this.racingGameInfo.raceCount - 1) {
      return;
    }
    this.successCount.forEach((count, index) => {
      if (count > 0) {
        this.racingCarView.renderArrowContent(count, index);
      }
    });
  };
  const gameEnd = () => {
    const winners = this.racingCarModel
      .getGameWinners()
      .map((car) => car.name)
      .join(",");
    this.racingCarView.renderGameWinners(winners);
    addRestartButtonEvent();
    showWinnerAlert(winners);
  };
  const addRestartButtonEvent = () => {
    $(".restart-button").addEventListener("click", () => {
      $(".race-count-input-container").classList.toggle("is-active");
      location.reload();
    });
  };

  const showWinnerAlert = (winners) => {
    setTimeout(() => {
      alert(`게임의 우승자인 ${winners} 축하합니다`);
    }, RESULT_RENDER_DELAY_TIME);
  };
}
