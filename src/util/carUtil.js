// 관심사 분리를 한건 좋은데, 요 함수는 어디다 두는게 좋을까요?

export function getCarStatus(car) {
  return `${car.name} : ${"-".repeat(car.position)}`;
}
