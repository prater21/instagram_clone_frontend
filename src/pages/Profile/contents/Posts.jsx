import { useState } from "react";
import imgSrc from "../../../assets/images/intro-img-1.png";
import IconLike from "../../../assets/images/icon/icon-like";
import IconComment from "../../../assets/images/icon/icon-comment";
import { useNavigate } from "react-router-dom";

const Posts = () => {
    const [hover, setHover] = useState({});
    const navigate = useNavigate();
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
    console.log(hover);

    return (
        <div className="profile-post-wrapper">
            {POST_DUMMY?.map((post) => (
                <div
                    className="profile-post"
                    key={post.id}
                    onClick={() => {
                        navigate(`/post/${post.id}`, { state: post });
                    }}
                    onMouseEnter={() => {
                        setHover((prev) => ({ ...prev, [post.id]: true }));
                    }}
                    onMouseLeave={() => {
                        setHover((prev) => ({ ...prev, [post.id]: false }));
                    }}
                >
                    <img src={post.imgs[0]} alt="post-thumbnail" />
                    {hover[post?.id] && (
                        <div className="profile-hover">
                            <div>
                                <IconLike />
                                <p>3</p>
                            </div>
                            <div>
                                <IconComment />
                                <p>3</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Posts;
