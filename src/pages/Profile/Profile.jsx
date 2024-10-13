import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useNavigate, useParams } from "react-router-dom";
import MainWrapper from "../../components/Layout/MainWrapper";
import Posts from "./contents/Posts";
import Follow from "./contents/Follow";
import "./profile.css";
import ModalProfile from "../../components/Modals/ModalProfile";
import ModalProfileImg from "../../components/Modals/ModalProfileImg";
import { getUserProfile } from "../../apis/userApi";
import { getLocal } from "../../utils/common";
import UserImg from "../../components/User/UserImg";

const PROFILE_TYPE = {
    posts: "main",
    following: "following",
    followers: "followers",
};

const Profile = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenImg, setIsOpenImg] = useState(false);
    const [modalType, setModalType] = useState(false);
    const [data, setData] = useState({});

    const [lenInfo, setLenInfo] = useState({});
    const user_info = getLocal("username");

    const closeModal = () => {
        setIsOpen(false);
        setIsOpenImg(false);
    };

    const getProfileInfo = async () => {
        const user_id = getLocal("u_id");
        const response = await getUserProfile({ user_id });
        if (response.result === "Y") {
            setData({
                email: response.email,
                username: response.username,
                description: response.description,
                profile_img: response.profile_img,
                follower: response.follower,
                following: response.following,
                post: response.post,
                is_follow: response.is_follow,
            });
            setLenInfo({ followers: response.follower.length, following: response.following.length, posts: response.post.length });
        } else {
            console.log("error");
        }
    };
    // console.log(username);
    useEffect(() => {
        navigate("main");
        getProfileInfo();
    }, []);

    return (
        <>
            <MainWrapper>
                <div className="profile-header">
                    <p className="profile-username">{data?.username}</p>
                </div>
                <div className="profile-main">
                    <UserImg
                        onClick={() => {
                            setIsOpenImg(true);
                        }}
                        className="profile-img"
                        img={data?.profile_img}
                    />

                    <div className="profile-info">
                        <div className="profile-title">
                            <p>{data?.username}</p>
                        </div>
                        <div className="profile-setting">
                            {user_info === username ? (
                                <>
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
                                </>
                            ) : (
                                <div
                                    className={`profile-follow ${!data?.is_follow ? "follow" : ""}`}
                                    onClick={() => {
                                        // setIsOpen(true);
                                        // setModalType("password");
                                    }}
                                >
                                    <p>{data?.is_follow ? "Following" : "Follow"}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="profile-description">
                    <p>{data?.description}</p>
                </div>
                <div className="profile-summary">
                    {Object.entries(PROFILE_TYPE).map(([key, value]) => (
                        <NavLink key={key} className={({ isActive }) => (isActive ? "nav-active" : "")} to={`./${value}`}>
                            <div className="profile-summary-link">
                                <p>{lenInfo[key]}</p>
                                <p className="title">{key}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>

                <Routes>
                    <Route path="main" element={<Posts posts={data.post} />} />
                    <Route path="followers" element={<Follow follow={data.follower} />} />
                    <Route path="following" element={<Follow follow={data.following} />} />
                </Routes>
            </MainWrapper>
            {isOpen && (
                <ModalProfile
                    isOpen={isOpen}
                    userInfo={{
                        email: data.email,
                        username: data.username,
                        description: data.description,
                    }}
                    onSuccess={getProfileInfo}
                    type={modalType}
                    closeModal={closeModal}
                />
            )}
            {isOpenImg && <ModalProfileImg isOpen={isOpenImg} closeModal={closeModal} />}
        </>
    );
};

export default Profile;
