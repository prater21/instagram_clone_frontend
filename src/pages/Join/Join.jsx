import MiddleWrapper from "../../components/Layout/IntroWrapper";
import "./join.css";
import logoSrc from "../../assets/images/intro-logo.png";
import EmailAuth from "./JoinSteps/EmailAuth";
import Username from "./JoinSteps/Username";
import Password from "./JoinSteps/Password";
import Description from "./JoinSteps/Description";
import { useState } from "react";
import Border from "../../components/Border/Border";
import InputWrapper from "../../components/Layout/InputWrapper";
import { postJoinApi } from "../../apis/joinApi";
import useToast from "../../hooks/useToast";
import { useNavigate } from "react-router-dom";

const Join = () => {
    const naviagte = useNavigate();
    const { openToast } = useToast();
    const [steps, setSteps] = useState(0);
    const [value, setValue] = useState({
        email: "",
        username: "",
        password: "",
        description: "",
    });

    const setUserInfo = (type, value) => {
        setValue((prev) => ({ ...prev, [type]: value }));
    };
    const onSuccess = (num) => {
        setSteps(num);
    };
    const joinHandler = async () => {
        const response = await postJoinApi(value);
        if (response.result === "Y") {
            openToast({ message: "Successfully SignUp!" });
            naviagte("/");
            //   setSendMail(true);
            // setAuthId(response.auth_id);
            //   setIsError(false);
            // } else {
            // }
        }
    };

    const STEPS = [
        <EmailAuth value={value.email} setValue={setUserInfo} onSuccess={onSuccess} />,
        <Password value={value.password} setValue={setUserInfo} onSuccess={onSuccess} />,
        <Username value={value.username} setValue={setUserInfo} onSuccess={onSuccess} />,
        <Description value={value.description} setValue={setUserInfo} onSuccess={onSuccess} joinHandler={joinHandler} />,
    ];
    return (
        <>
            <MiddleWrapper>
                <Border className="join-wrapper">
                    <img className="join-logo" src={logoSrc} alt="intro-logo" />
                    <p className="join-subtitle">{"Sign up to see photos and videos\n from your friends."}</p>
                    <InputWrapper>
                        {STEPS[steps]}
                        {/* <Button disabled className="join-btn">
                            Next
                        </Button> */}
                    </InputWrapper>
                </Border>
            </MiddleWrapper>
        </>
    );
};

export default Join;
