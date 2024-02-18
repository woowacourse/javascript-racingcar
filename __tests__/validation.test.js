import CarValidator from "../src/domain/validator/CarValidator.js";
import TryCountValidator from "../src/domain/validator/TryCountValidator.js";
import Car from "../src/domain/Car.js";
import Message from "../src/constant/Message.js";

const { ERROR } = Message;

describe("자동차 이름 유효성 테스트", () => {
  test("자동차 대수가 2대 미만이면 에러가 발생한다.", () => {
    const input = ["파슬리"];
    expect(() => CarValidator.validCount(input)).toThrow(ERROR.CAR_COUNT);
  });

  test.each(["", "파슬리쑤쑤쿠키썬데이"])(
    "자동차 이름이 1자 미만 또는 5자 초과면 에러가 발생한다.",
    (input) => {
      expect(() => CarValidator.validNameRange(input)).toThrow(ERROR.CAR_NAME_RANGE);
    }
  );

  test("자동차 이름이 중복되면 에러가 발생한다.", () => {
    const input = ["파슬리", "파슬리", "쑤쑤"];
    const cars = input.map((car) => new Car(car));

    expect(() => CarValidator.duplicateName(cars)).toThrow(ERROR.CAR_NAME_DUPLICATE);
  });
});

describe("경주 횟수 유효성 테스트", () => {
  test.each(["ㄱ", "a", "0", "-1", "5.5", "&"])(
    "경주 횟수로 자연수가 아닌 값이 입력되면 에러가 발생한다.",
    (input) => {
      expect(() => TryCountValidator.naturalNumber(Number(input))).toThrow(ERROR.TRY_COUNT_RANGE);
    }
  );
});
