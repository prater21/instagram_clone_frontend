import { useState } from "react";
import MainWrapper from "../../components/Layout/MainWrapper";
import PostDetail from "../../components/Post/PostDetail";
import { postUploadImg } from "../../apis/postApi";
import imgSrc from "../../assets/images/intro-img-1.png";
import logoSrc from "../../assets/images/logo-white.png";
import "./main.css";

const Main = () => {
    const [img, setImg] = useState(null);

    const getProfileImg = async (e) => {
        const file = e.target.files[0];
        if (file) {
            //for send img data to backend
            const formData = new FormData();
            formData.append("file", file);
            setImg(formData);

            //for show img to user
            // const reader = new FileReader();
            // reader.readAsDataURL(file);
            // reader.onloadend = () => {
            //     setProfileImg(reader.result);
            // };
        }
    };

    const uploadFile = async () => {
        const response = await postUploadImg(img);
    };
    const POST_DUMMY = [
        {
            id: 1,
            user_id: 2,
            description: "description",
            comments: [
                {
                    user_id: 4,
                    username: "comment_username",
                    text: "user comment",
                },
            ],
            like: 5,
            reg_date: "2024-09-30",
            imgs: [imgSrc, imgSrc, imgSrc, imgSrc],
        },
        {
            id: 2,
            user_id: 2,
            description: "description2",
            comments: [
                {
                    user_id: 4,
                    username: "comment_username2",
                    text: "user comment2",
                },
            ],
            like: 5,
            reg_date: "2024-09-31",
            imgs: [imgSrc, imgSrc, imgSrc, imgSrc],
        },
        {
            id: 3,
            user_id: 3,
            description: "description3",
            comments: [
                {
                    user_id: 4,
                    username: "comment_username3",
                    text: "user comment3",
                },
            ],
            like: 5,
            reg_date: "2024-09-33",
            imgs: [imgSrc, imgSrc, imgSrc, imgSrc],
        },
        {
            id: 4,
            user_id: 4,
            description: "description4",
            comments: [
                {
                    user_id: 4,
                    username: "comment_username42",
                    text: "user comment4",
                },
            ],
            like: 5,
            reg_date: "2024-09-34",
            imgs: [imgSrc, imgSrc, imgSrc, imgSrc],
        },
    ];

    return (
        <MainWrapper>
            <div className="main-header">
                <img className="main-logo" src={logoSrc} alt="intro-logo" />
            </div>
            <div className="main-body">
                {POST_DUMMY.map((post) => (
                    <PostDetail post={post} />
                ))}
            </div>
        </MainWrapper>
    );
};

export default Main;
