import { useEffect, useState } from "react";
import Button from "../../../components/Buttons/Button";
import Input from "../../../components/Input/Input";

const Password = ({ value, setValue, onSuccess }) => {
    const [disabled, setDisabled] = useState(true);
    const [rePassword, seRePassword] = useState("");

    const confirmPassword = async () => {
        // const response = await postConfirmEmail({ auth_id: authId, auth_code: authCode });
        // if (response.result === "Y") {
        // setIsError(true);
        onSuccess(2);
        // } else {
        // setIsError(true);
        // }
    };

    useEffect(() => {
        if (value === "" && rePassword === "") {
            setDisabled(true);
            return;
        }
        const flag = value === rePassword;
        setDisabled(!flag);
    }, [rePassword]);

    return (
        <>
            <Input
                type="password"
                label="password"
                value={value}
                setValue={(value) => {
                    setValue("password", value);
                }}
            />
            <Input
                type="password"
                label="confirm password"
                value={rePassword}
                setValue={(value) => {
                    seRePassword(value);
                }}
            />
            <Button disabled={disabled} onClick={confirmPassword} className={"join-btn"}>
                Next
            </Button>
        </>
    );
};

export default Password;
