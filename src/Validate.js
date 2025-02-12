class Validate {
    isEmpty(input) {
        if(!input.trim())
            throw new Error("[ERROR] 공백이 입력되었습니다.");
    }

    carNameLength(input){
        const names = input.split(',');
        names.forEach(name => {
            if(name.trim().length > 5)
                throw new Error("[ERROR] 이름 글자수가 5자를 초과하였습니다.");
        });
    }
}
export default Validate;
