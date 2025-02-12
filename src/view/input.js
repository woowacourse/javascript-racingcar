import retryUntilValid from "../utils/retryUntilValid";

export const getCarNames = async () => {
    return retryUntilValid("🚗 자동차 이름을 입력하세요 (쉼표로 구분, 5자 이하): ", validateCarNames);
};