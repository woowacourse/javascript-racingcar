import readLineAsync from "./readLineAsync";

const retryUntilValid = async(
    promptMessage,
    validateFunc
) => {
    while (true) {  
        try {
            const input = await readLineAsync(promptMessage);
            const validatedInput = validateFunc(input);
            if (validatedInput !== null) return validatedInput;
        } catch (error) {
            console.log(`[ERROR] ${error.message} 다시 입력해주세요.`);
        }
    }
};

export default retryUntilValid