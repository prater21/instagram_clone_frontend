import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MainWrapper from "../../components/Layout/MainWrapper";
import PostDetail from "../../components/Post/PostDetail";
import IconLeftArrow from "../../assets/images/icon/icon-left-arrow";

import "./post.css";

const Post = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const post = location.state;
    console.log(post);

    return (
        <>
            <MainWrapper>
                <div className="post">
                    <div className="post-header">
                        <IconLeftArrow
                            onClick={() => {
                                navigate(-1);
                            }}
                        />
                        <p>Post</p>
                    </div>
                    <PostDetail post={post} />
                </div>
            </MainWrapper>
        </>
    );
};

export default Post;
