import readLineAsync from "../utils/readLineAsync.js";

export const getCarNames = async () => {
    const name = await readLineAsync("자동차 이름을 입력하세요 > ");
}