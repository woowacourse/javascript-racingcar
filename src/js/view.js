class RacingCarView {
  showCount() {
    style.display = "block";
    innerHTML = `<input /><button>....</button>`;
  }

  showProcess(cars) {}

  showResult(winners) {
    style.display = "block";
    innerHTML = `<h2>${winners.join(",")}</h2>`;
  }

  hideCount() {}

  hideProcess() {}

  hideResult() {}
}
