export const delay = (callback, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callback();
            resolve();
        }, time * 1000);
    });
};

export const promiseForLoop = async (array, callback, time) => {
    return new Promise(async (resolve, reject) => {
        for(let i = 0; i < array.length; i++) {
            await setTimeout(() => {
                callback(i);
            }, 1000 * (i + 1));
        }
        resolve();
    });
}