/**
 * str이 공백인지 체크
 * 주의: string이어야만 함
 * @param {*} str
 * @returns
 */
export const isEmpty = (str) => {
    if (!str || str === null || str === "") {
        return true;
    }
    return false;
};

/**
 * object가 공백인지 체크
 * @param {*} object
 * @returns
 */
export const isEmptyObject = (object) => {
    return Object.keys(object).length === 0 && object.constructor === Object;
};

/**
 * list가 공백인지 체크
 * @param {*} list
 * @returns
 */
export const isEmptyList = (list) => {
    return list.length === 0 && list.constructor === Array;
};

/**
 * 정규식으로 유효성체크
 * @param {*} type
 * @param {*} value
 * @returns
 */
export const checkValidation = ({ type, value }) => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/; //영문(대,소) + 숫자 + 특수문자 *각각 1개 이상, 길이 8~16자리 사이 문자열
    const phoneNumRegex = /^[0-9]{9,11}$/;
    const phoneDashRegex = /^\d{3}-\d{3,4}-\d{4}$/;
    const korRegex = /^[가-힣]+$/;
    const engRegex = /^[a-zA-Z\s]+$/;
    const numRegex = /^[0-9]+$/;
    const dateRegex = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    const cardNumRegex = /^[0-9]{4}[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4}$/;

    switch (type) {
        // 이메일
        case "email":
        case "id":
            return emailRegex.test(value);
        // 비밀번호
        case "password":
            return passwordRegex.test(value);
        // 한글
        case "kor":
            return korRegex.test(value);
        // 영문
        case "eng":
            return engRegex.test(value);
        // 폰번호 // '-' 제외한 휴대폰 번호
        case "phoneNo":
            return phoneNumRegex.test(value);
        // 폰번호 // 000-0000-000/000-000-000 형식의 휴대폰번호
        case "phoneDashNo":
            return phoneDashRegex.test(value);
        // 숫자
        case "number":
            return numRegex.test(value);
        // 년도 8자리(YYYYMMDD)
        case "date":
            return dateRegex.test(value);
        // 숫자로 구성된 4자리-4자리-4자리-4자리 유형 체크 (ex. 신용카드 번호)
        case "card_no":
            return cardNumRegex.test(value);
        // 비어있을경우
        case "empty":
            return !isEmpty(value);
        default:
            return true;
    }
};

/**
 * 모든 input의 object에 에러가 하나라도 있는지 체크
 * 하나도 없으면 return true
 */
export const checkErrors = (object) => {
    let errorPassCount = 0;
    Object.keys(object).forEach((key) => {
        if (object[key] === false) {
            errorPassCount++;
            return;
        }
    });
    return Object.keys(object).length === errorPassCount;
};
