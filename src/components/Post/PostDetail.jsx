import { useState } from "react";
import SwiperPost from "../Swiper/SwiperPost";
import ModalComment from "../Modals/ModalComment";
import IconCommentOutline from "../../assets/images/icon/icon-comment-outline";
import IconLikeOutline from "../../assets/images/icon/icon-like-outline";
import imgSrc from "../../assets/images/intro-img-1.png";
import "./postdetail.css";

const PostDetail = ({ post }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div className="post-body">
                <div className="post-profile">
                    <img src={imgSrc} alt="post-profile-img" />
                    <div className="post-profile-info">
                        <span className="post-profile-username">megabox </span>
                        <span>{"\u2022"} </span> <span className="post-following">Following</span>
                    </div>
                </div>
                <SwiperPost imgs={post.imgs} />
                <div className="post-description">
                    <div className="post-icons">
                        <IconLikeOutline />
                        {/* <IconLike color="red" /> */}
                        <IconCommentOutline onClick={openModal} />
                        {/* <IconShareOutline /> */}
                    </div>
                    <div>
                        <p className="post-like">236 likes</p>
                        <p className="post-caption">
                            <span>megabox</span> {post?.description}
                        </p>
                        <p className="post-comment" onClick={openModal}>
                            {post?.comments?.length === 0 ? "first comment" : "View all 2 comments"}
                        </p>
                        <p className="post-date">{"16 hours age"}</p>
                    </div>
                </div>
            </div>
            {isOpen && <ModalComment isOpen={isOpen} closeModal={closeModal} comments={post?.comments} />}
        </>
    );
};

export default PostDetail;
