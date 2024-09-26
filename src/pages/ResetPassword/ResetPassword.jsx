import Input from "../../components/Input/Input";
import IntroWrapper from "../../components/Layout/IntroWrapper";
import lockIconSrc from "../../assets/images/lock-icon.png";
import "./resetpassword.css";
import { useEffect, useState } from "react";
import Button from "../../components/Buttons/Button";
import { checkValidation } from "../../utils/validation";
import { postConfirmEmail, postResetPassword, postSendEmail } from "../../apis/authApis";
import Border from "../../components/Border/Border";
import { ErrorText } from "../../components/Text";
import InputWrapper from "../../components/Layout/InputWrapper";
import { useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";

const ResetPassword = () => {
    const naviagte = useNavigate();
    const { openToast } = useToast();

    const [email, setEmail] = useState("");
    const [authCode, setAuthCode] = useState("");
    const [sendMail, setSendMail] = useState(false);
    const [isError, setIsError] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [authId, setAuthId] = useState(0);
    const [isAuth, setIsAuth] = useState(false);
    const [password, setPassword] = useState({
        password: "",
        rePassword: "",
    });

    const sendEmail = async () => {
        const response = await postSendEmail({ email });
        if (response.result === "Y") {
            setSendMail(true);
            setAuthId(response.auth_id);
            setIsError(false);
        } else {
        }
    };

    const confirmEmail = async () => {
        const response = await postConfirmEmail({ auth_id: authId, auth_code: authCode });
        if (response.result === "Y") {
            setIsError(false);
            setIsAuth(true);
        } else {
            setIsError(true);
        }
    };

    const resetPassword = async () => {
        const response = await postResetPassword({ email, password: password.password });
        if (response.result === "Y") {
            naviagte("/");
            openToast({ message: "Successfully Changed!" });
        } else {
        }
    };

    useEffect(() => {
        const flag = checkValidation({ type: "email", value: email });
        setDisabled(!flag);
    }, [email]);

    useEffect(() => {
        if (password.password === "" && password.rePassword === "") {
            setDisabled(true);
            return;
        }
        const flag = password.password === password.rePassword;
        setDisabled(!flag);
    }, [password]);

    return (
        <IntroWrapper>
            <Border className="reset-wrapper">
                <div className="reset-lock-icon">
                    <img src={lockIconSrc} alt="lock-img" />
                </div>
                {!isAuth ? (
                    <>
                        <p className="reset-title">Trouble with logging in?</p>
                        <p className="reset-subtitle">{"Enter your email address and\n  we'll send you a authcode to reset your password"}</p>
                        {/* <p className="intro-subtitle">{"Sign up to see photos and videos\n from your friends."}</p> */}
                        <InputWrapper>
                            <Input
                                disabled={sendMail}
                                label="email address"
                                value={email}
                                setValue={(value) => {
                                    setEmail(value);
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
                            {isError && <ErrorText className="reset-errmsg">Invalid Authentication Code</ErrorText>}
                            <Button
                                disabled={disabled}
                                onClick={sendMail ? confirmEmail : sendEmail}
                                className={`reset-btn ${!isError ? "margin" : ""}`}
                            >
                                {!sendMail ? "Send Mail" : "Confirm"}
                            </Button>
                        </InputWrapper>
                    </>
                ) : (
                    <>
                        <p className="reset-title">Reset your password</p>
                        <InputWrapper>
                            <Input
                                type="password"
                                label="password"
                                value={password?.password}
                                setValue={(value) => {
                                    setPassword((prev) => ({ ...prev, password: value }));
                                }}
                            />
                            <Input
                                type="password"
                                label="confirm password"
                                value={password?.rePassword}
                                setValue={(value) => {
                                    setPassword((prev) => ({ ...prev, rePassword: value }));
                                }}
                            />
                            {isError && <ErrorText className="reset-errmsg">Invalid Authentication Code</ErrorText>}
                            <Button disabled={!disabled} onClick={resetPassword} className={`reset-btn ${!isError ? "margin" : ""}`}>
                                Reset Password
                            </Button>
                        </InputWrapper>
                    </>
                )}
            </Border>
        </IntroWrapper>
    );
};

export default ResetPassword;
