import deepFreeze from '../../utils/deepFeeze.js';

const ERROR_MESSAGE = deepFreeze({
	have_duplication: '중복된 이름이 존재합니다.',
	not_number: '숫자를 입력해주세요.',
	not_string: '문자열을 입력해주세요.',
	not_natural_number: '자연수를 입력해주세요.',
	have_special_characters: '특수문자는 입력할 수 없습니다.',
	out_of_range: '0~5자 사이의 이름을 입력해주세요.',
});
export default ERROR_MESSAGE;
