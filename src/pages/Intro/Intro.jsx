import MiddleWrapper from "../../components/Layout/IntroWrapper";
import "./intro.css";
import phoneImg from "../../assets/images/intro-phone.png";
import phoneSource1 from "../../assets/images/intro-img-1.png";
import logoSrc from "../../assets/images/intro-logo.png";
import Input from "../../components/Input/Input";
import Button from "../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";
import IntroWrapper from "../../components/Layout/IntroWrapper";

const Intro = () => {
    const navigate = useNavigate();

    return (
        <>
            <IntroWrapper>
                <div className="intro">
                    <div className="intro-img-wrapper">
                        <img src={phoneImg} alt="intro-phone-mockup" />
                        <img className="intro-source-img" src={phoneSource1} alt="intro-phone-source-1" />
                    </div>
                    <div>
                        <div className="intro-login-wrapper">
                            <img className="intro-logo" src={logoSrc} alt="intro-logo" />
                            {/* <p className="intro-subtitle">{"Sign up to see photos and videos\n from your friends."}</p> */}
                            <div className="intro-input-wrapper">
                                <Input label="email address" />
                                <Input label="password" />
                                <p className="intro-psw">Forgotten your password?</p>
                                <Button disabled className="intro-login-btn">
                                    Log In
                                </Button>
                            </div>
                        </div>
                        <div className="intro-login-wrapper second">
                            <div className="intro-register">
                                <p>
                                    Don't have an account?{" "}
                                    <span
                                        onClick={() => {
                                            navigate("/signup");
                                        }}
                                    >
                                        Sign up
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </IntroWrapper>
        </>
    );
};

export default Intro;
