
export function validateCarNames(names) {
    // 글자 수 5개 초과 금지
    // 구분자는 쉼표

    // A, B, C, D
    // ,A, B
    const namesArr = names.split(',').trim()
    // ['A', 'B', 'C', 'D']
    // ['', 'A', 'B']
    validateEmptyString(namesArr)
    validateCarNameLength (names)
}

export function validateEmptyString (names) {
    names.forEach(name => {
        if (name.length === 0) {
            throw new Error('이름이 비어있습니다.')
        }
    })
}

export function validateCarNameLength (names) {
    names.forEach(name => {
        if (name.length > 5) {
            throw new Error('5자 이하로 설정해주세요.')
        }
    })

}