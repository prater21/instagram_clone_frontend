import { useNavigate } from "react-router-dom";
import IconHome from "../../assets/images/icon/icon-home";
import IcoonProfile from "../../assets/images/icon/icon-profile";
import { IconAdd } from "../../constants/icons";
import "./layout.css";
import { useState } from "react";
import ModalPost from "../Modals/ModalPost";
import { getLocal } from "../../utils/common";

const MainWrapper = ({ children }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const username = getLocal("username");
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
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
                        <IconAdd
                            onClick={() => {
                                setIsOpen(true);
                            }}
                        />
                    </div>
                    <div>
                        <IcoonProfile
                            onClick={() => {
                                navigate(`/${username}/main`);
                            }}
                        />
                    </div>
                </div>
            </div>
            <ModalPost isOpen={isOpen} closeModal={closeModal} />
        </>
    );
};

export default MainWrapper;
