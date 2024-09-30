import { useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import { ErrorText } from "../../../components/Text";
import Button from "../../../components/Buttons/Button";
import { checkValidation } from "../../../utils/validation";
import { postCheckEmail, postConfirmEmail, postSendEmail } from "../../../apis/authApi";
import "../join.css";

const EmailAuth = ({ value, setValue, onSuccess }) => {
    const [authCode, setAuthCode] = useState("");
    const [sendMail, setSendMail] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("This email address is already in use.");
    const [isValid, setIsValid] = useState(false);
    const [authId, setAuthId] = useState(0);

    const checkEmail = async () => {
        const response = await postCheckEmail({ email: value });
        if (response.result === "Y") {
            setIsError(false);
            setIsValid(true);
        } else {
            setIsError(true);
        }
    };

    const sendEmail = async () => {
        const response = await postSendEmail({ email: value });
        if (response.result === "Y") {
            setSendMail(true);
            setDisabled(true);
            setAuthId(response.auth_id);
            setIsError(false);
        } else {
        }
    };

    const confirmEmail = async () => {
        const response = await postConfirmEmail({ auth_id: authId, auth_code: authCode });
        if (response.result === "Y") {
            setIsError(true);
            onSuccess(1);
        } else {
            setErrorMsg("Invalid Authentication Code");
            setIsError(true);
        }
    };

    useEffect(() => {
        if (isValid && sendEmail) {
            setDisabled(authCode.length !== 6);
            return;
        }
        const flag = checkValidation({ type: "email", value });
        setDisabled(!flag);
    }, [value, authCode]);

    const resetValue = () => {
        setValue("email", "");
        setAuthCode("");
        setSendMail(false);
        setDisabled(true);
        setIsError(false);
        setErrorMsg("This email address is already in use.");
        setIsValid(false);
    };

    return (
        <>
            <Input
                disabled={isValid}
                label="email address"
                value={value}
                setValue={(value) => {
                    setValue("email", value);
                }}
            />
            {sendMail && (
                <Input
                    label="verification code"
                    value={authCode}
                    setValue={(value) => {
                        setAuthCode(value);
                    }}
                />
            )}
            <p onClick={resetValue} className={`join-reset-btn ${isError ? "margin" : ""}`}>
                reset
            </p>
            {isError && <ErrorText className="join-errmsg">{errorMsg}</ErrorText>}

            <Button
                disabled={disabled}
                className={`join-btn ${isError ? "margin" : ""}`}
                onClick={!isValid ? checkEmail : sendMail ? confirmEmail : sendEmail}
            >
                {!isValid ? "Check Validation" : sendMail ? "Next" : "Send Verification Mail"}
            </Button>
        </>
    );
};

export default EmailAuth;
