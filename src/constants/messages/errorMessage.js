import deepFreeze from '../../utils/deepFeeze.js';

const ERROR_MESSAGE = deepFreeze({
	HAVE_DUPLICATION: '중복된 이름이 존재합니다.',
	NOT_NUMBER: '숫자를 입력해주세요.',
	NOT_STRING: '문자열을 입력해주세요.',
	NOT_INTEGER: '정수를 입력해주세요.',
	OVER_LIMIT_COUNT_RANGE: '입력 가능한 시도 횟수는 1~20 사이의 정수입니다.',
	HAVE_SPECIAL_CHARACTERS: '특수문자는 입력할 수 없습니다.',
	OUT_OF_RANGE: '0~5자 사이의 이름을 입력해주세요.',
});
export default ERROR_MESSAGE;
