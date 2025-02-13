const Output = {
  print(arg) {
    console.log(arg);
  },
  printLineBreak() {
    console.log();
  },
  printRaceStart() {
    console.log("\n실행 결과");
  },
  printRace(name, count) {
    console.log(`${name} : ${"-".repeat(count)}`);
  },
  printWinner(winners) {
    console.log(`최종 우승자: ${winners.join(", ")}`);
  },
};

export default Output;
