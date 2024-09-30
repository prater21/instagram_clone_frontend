import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CrossfadeImage from "react-crossfade-image";
import Input from "../../components/Input/Input";
import Button from "../../components/Buttons/Button";
import Border from "../../components/Border/Border";
import { ErrorText } from "../../components/Text";
import IntroWrapper from "../../components/Layout/IntroWrapper";
import InputWrapper from "../../components/Layout/InputWrapper";
import { checkValidation } from "../../utils/validation";
import { postLoginApi } from "../../apis/loginApi";
import phoneImg from "../../assets/images/intro-phone.png";
import phoneSource1 from "../../assets/images/intro-img-1.png";
import phoneSource2 from "../../assets/images/intro-img-2.png";
import phoneSource3 from "../../assets/images/intro-img-3.png";
import phoneSource4 from "../../assets/images/intro-img-4.png";
import logoSrc from "../../assets/images/intro-logo.png";
import "./intro.css";

const Intro = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [curImg, setCurImg] = useState(0);
    const [loginError, setLoginError] = useState(false);

    const images = [phoneSource1, phoneSource2, phoneSource3, phoneSource4];

    const login = async () => {
        const formData = new FormData();

        formData.append("username", email);
        formData.append("password", password);

        const response = await postLoginApi(formData);
        if (response.result === "Y") {
            // navigate to main page
        } else {
            setLoginError(true);
        }
    };

    useEffect(() => {
        const flag = checkValidation({ type: "email", value: email }) && password.length > 0;
        setDisabled(!flag);
    }, [email, password]);

    useEffect(() => {
        let interval = null;

        interval = setInterval(() => {
            if (curImg < 1) {
                setCurImg((prev) => (prev + 1) % 4);
            } else {
                setCurImg(0);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <IntroWrapper>
                <div className="intro">
                    <div className="intro-img-wrapper">
                        <img src={phoneImg} alt="intro-phone-mockup" />
                        <div className="intro-source-img">
                            <CrossfadeImage src={images[curImg]} timingFunction={"ease-out"} />
                        </div>
                    </div>
                    <div>
                        <Border className="intro-login-wrapper">
                            <img className="intro-logo" src={logoSrc} alt="intro-logo" />
                            <InputWrapper className="intro-input-wrapper">
                                <Input
                                    label="email address"
                                    value={email}
                                    setValue={(value) => {
                                        setEmail(value);
                                    }}
                                />
                                <Input
                                    type="password"
                                    label="password"
                                    value={password}
                                    setValue={(value) => {
                                        setPassword(value);
                                    }}
                                />
                                <p
                                    className="intro-psw"
                                    onClick={() => {
                                        navigate("/accounts/password/reset");
                                    }}
                                >
                                    Forgotten your password?
                                </p>
                                {loginError && (
                                    <ErrorText className="intro-error-login">
                                        {"Sorry, your password was incorrect.\n Please double-check your password."}
                                    </ErrorText>
                                )}
                                <Button disabled={disabled} onClick={login} className="intro-login-btn">
                                    Log In
                                </Button>
                            </InputWrapper>
                        </Border>
                        <Border className="intro-signup-wrapper">
                            <div className="intro-register">
                                <p>
                                    Don't have an account?
                                    <span
                                        onClick={() => {
                                            navigate("/signup");
                                        }}
                                    >
                                        Sign up
                                    </span>
                                </p>
                            </div>
                        </Border>
                    </div>
                </div>
            </IntroWrapper>
        </>
    );
};

export default Intro;
