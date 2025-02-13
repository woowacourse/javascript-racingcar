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
};

export default Output;
