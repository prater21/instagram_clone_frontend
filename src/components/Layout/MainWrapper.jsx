import { useNavigate } from "react-router-dom";
import IconHome from "../../assets/images/icon/icon-home";
import IcoonProfile from "../../assets/images/icon/icon-profile";
import { IconAdd } from "../../constants/icons";
import "./layout.css";

const MainWrapper = ({ children }) => {
    const navigate = useNavigate();
    return (
        <div className="main-wrapper">
            <div className="main-body">{children}</div>
            <div className="main-footer">
                <div>
                    <IconHome
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                </div>
                <div>
                    <IconAdd />
                </div>
                <div>
                    <IcoonProfile
                        onClick={() => {
                            navigate("/prater/main");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainWrapper;
