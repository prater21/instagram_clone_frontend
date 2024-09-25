import MiddleWrapper from "../../components/Layout/IntroWrapper";
import "./join.css";
import logoSrc from "../../assets/images/intro-logo.png";
import Input from "../../components/Input/Input";
import Button from "../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";
import EmailAuth from "./JoinSteps/EmailAuth";
import Username from "./JoinSteps/Username";
import Password from "./JoinSteps/Password";
import Description from "./JoinSteps/Description";

const Join = () => {
    const navigate = useNavigate();

    return (
        <>
            <MiddleWrapper>
                <div className="intro-wrapper">
                    <div className="intro-login-wrapper">
                        <img className="intro-logo" src={logoSrc} alt="intro-logo" />
                        <p className="intro-subtitle">{"Sign up to see photos and videos\n from your friends."}</p>
                        <div className="intro-input-wrapper">
                            <EmailAuth />
                            <Username />
                            <Password />
                            <Description />
                            <Button disabled className="intro-login-btn">
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </MiddleWrapper>
        </>
    );
};

export default Join;
