import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useNavigate, useParams } from "react-router-dom";
import MainWrapper from "../../components/Layout/MainWrapper";
import Posts from "./contents/Posts";
import Followers from "./contents/Followers";
import Following from "./contents/Following";
import IconSetting from "../../assets/images/icon/icon-setting";
import "./profile.css";
import ModalProfile from "../../components/Modals/ModalProfile";

const PROFILE_TYPE = {
    posts: "main",
    following: "following",
    followers: "followers",
};

const Profile = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState(false);

    const info = {
        posts: 155,
        followers: 4,
        following: 12,
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    // console.log(username);
    useEffect(() => {
        navigate("main");
    }, []);

    return (
        <>
            <MainWrapper>
                <div className="profile-header">
                    <p className="profile-username">{username}</p>
                </div>
                <div className="profile-main">
                    <div className="profile-img"></div>
                    <div className="profile-info">
                        <div className="profile-title">
                            <p>{username}</p>
                            {/* <IconSetting /> */}
                        </div>
                        <div className="profile-setting">
                            <div
                                className="profile-edit"
                                onClick={() => {
                                    setIsOpen(true);
                                    setModalType("profile");
                                }}
                            >
                                <p>Edit Profile</p>
                            </div>
                            <div
                                className="profile-edit password"
                                onClick={() => {
                                    setIsOpen(true);
                                    setModalType("password");
                                }}
                            >
                                <p>Change Password</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-description">
                    <p>
                        안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                    </p>
                </div>
                <div className="profile-summary">
                    {Object.entries(PROFILE_TYPE).map(([key, value]) => (
                        <NavLink key={key} className={({ isActive }) => (isActive ? "nav-active" : "")} to={`./${value}`}>
                            <div className="profile-summary-link">
                                <p>{info[key]}</p>
                                <p className="title">{key}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>

                <Routes>
                    <Route path="main" element={<Posts />} />
                    <Route path="followers" element={<Followers />} />
                    <Route path="following" element={<Following />} />
                </Routes>
            </MainWrapper>
            {isOpen && <ModalProfile isOpen={isOpen} type={modalType} closeModal={closeModal} />}
        </>
    );
};

export default Profile;
