/**
 * 가격계산
 * @param {*} second
 * @returns
 */
export const convertPrice = (value, lang = "kor") => {
    if (value) {
        if (lang === "kor") {
            return value.toLocaleString();
        } else {
            return value.toLocaleString();
        }
    }
};

/**
 * 현재시간을 YYYY,MM,DD,HH 형식의 object로 반환
 * @returns
 */
export const convertNowDate = () => {
    let today = new Date();

    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);

    let hours = ("0" + today.getHours()).slice(-2);
    let minutes = ("0" + today.getMinutes()).slice(-2);
    let seconds = ("0" + today.getSeconds()).slice(-2);

    return {
        year,
        month,
        day,
        hours,
        minutes,
        seconds,
    };
};
