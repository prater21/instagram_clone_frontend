import { useEffect, useState } from "react";
import Button from "../../../components/Buttons/Button";
import Input from "../../../components/Input/Input";
import { ErrorText } from "../../../components/Text";
import { postCheckUsername } from "../../../apis/authApi";

const Username = ({ value, setValue, onSuccess }) => {
    const [disabled, setDisabled] = useState(true);
    const [isValid, setIsValid] = useState(false);
    const [isError, setIsError] = useState(false);

    const checkUsername = async () => {
        const response = await postCheckUsername({ username: value });
        if (response.result === "Y") {
            setIsError(false);
            setIsValid(true);
        } else {
            setIsError(true);
        }
    };
    const confirmUsername = () => {
        onSuccess(3);
    };

    const resetValue = () => {
        setValue("username", "");
        setDisabled(true);
        setIsError(false);
        setIsValid(false);
    };

    useEffect(() => {
        const flag = value.length >= 2 && value.length <= 30;
        setDisabled(!flag);
    }, [value]);

    return (
        <>
            <Input
                label="username"
                disabled={isValid}
                value={value}
                setValue={(value) => {
                    setValue("username", value);
                }}
                helperText={"2 to 30 characters are allowed."}
            />
            <p onClick={resetValue} className={`join-reset-btn ${isError ? "margin" : ""}`}>
                reset
            </p>
            {isError && <ErrorText className="join-errmsg">Invalid Username</ErrorText>}

            <Button disabled={disabled} onClick={!isValid ? checkUsername : confirmUsername} className={`join-btn ${isError ? "margin" : ""}`}>
                {isValid ? "Next" : "Check Duplicate"}
            </Button>
        </>
    );
};

export default Username;
