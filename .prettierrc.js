module.exports = {
  printWidth: 80, // 한 줄 최대 문자 수
  tabWidth: 2, // 들여쓰기 시, 탭 너비
  useTabs: false, // 스페이스 대신 탭 사용
  semi: true, // 문장 끝 세미콜론 사용
  singleQuote: true, // 작은 따옴표 사용
  trailingComma: 'all', // 꼬리 콤마 사용
  bracketSpacing: true, // 중괄호 내에 공백 사용
  arrowParens: 'avoid', // 화살표 함수 단일 인자 시, 괄호 생략
  proseWrap: 'never', // 마크다운 포매팅 제외
  endOfLine: 'auto', // 개행문자 유지 (혼합일 경우, 첫 줄 개행문자로 통일)
};

// module.exports = {
//   singleQuote: true,
//   // 문자열은 따옴표로 formatting
//   semi: true,
//   //코드 마지막에 세미콜른이 있게 formatting
//   useTabs: false,
//   //탭의 사용을 금하고 스페이스바 사용으로 대체하게 formatting
//   tabWidth: 2,
//   // 들여쓰기 너비는 2칸
//   trailingComma: 'all',
//   // 자세한 설명은 구글링이 짱이긴하나 객체나 배열 키:값 뒤에 항상 콤마를 붙히도록 	  	//formatting
//   printWidth: 80,
//   // 코드 한줄이 maximum 80칸
//   arrowParens: 'avoid',
//   // 화살표 함수가 하나의 매개변수를 받을 때 괄호를 생략하게 formatting
// };