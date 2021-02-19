export const delay = (callback, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callback();
            resolve();
        }, time * 1000);
    });
};