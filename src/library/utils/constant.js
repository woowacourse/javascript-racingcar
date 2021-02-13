export const RESTRICT = {
  MIN_RACING_TIME: 1,
  MIN_CAR_NAME_LENGTH: 1,
  MAX_CAR_NAME_LENGTH: 5,
}

export const ERROR_MESSAGE = {
  MIN_RACING_TIME: `레이싱 횟수는 1이상이어야 합니다.`,
  RANGE_CAR_NAME_LENGTH: `자동차의 이름은 1자이상, 5자 이하만 가능합니다.`,
  NOT_EXIST_PROPS: `null 값의 prop이 존재합니다.`,
}

export const USER_MESSAGE = {
  NOTIFY_WINNER: "레이싱 게임의 우승자! 축하드립니다 🎊",
}

export const GAME_SETTING = {
  PROCESS_TERM: 1000,
  RENDER_RESULT_TERM: 2000,
}