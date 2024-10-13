import { useState } from "react";
import SwiperPost from "../Swiper/SwiperPost";
import ModalComment from "../Modals/ModalComment";
import IconCommentOutline from "../../assets/images/icon/icon-comment-outline";
import IconLikeOutline from "../../assets/images/icon/icon-like-outline";
import imgSrc from "../../assets/images/intro-img-1.png";
import "./postdetail.css";
import ModalLikes from "../Modals/ModalLikes";
import IconLike from "../../assets/images/icon/icon-like";

const PostDetail = ({ post }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenLike, setIsOpenLike] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
        setIsOpenLike(false);
    };
    console.log(post);
    return (
        <>
            <div className="post-body">
                <div className="post-profile">
                    <img src={imgSrc} alt="post-profile-img" />
                    <div className="post-profile-info">
                        <span className="post-profile-username">{post?.username}</span>
                        {/* <span>{"\u2022"} </span> <span className="post-following">Following</span> */}
                    </div>
                </div>
                <SwiperPost imgs={post.image} />
                <div className="post-description">
                    <div className="post-icons">
                        {post.like_flag ? <IconLike color="red" /> : <IconLikeOutline />}
                        <IconCommentOutline onClick={openModal} />
                        {/* <IconShareOutline /> */}
                    </div>
                    <div>
                        <p
                            className="post-like"
                            onClick={() => {
                                setIsOpenLike(true);
                            }}
                        >
                            {post?.like?.length === 0 ? "Be the first to like this" : `${post.like.length} likes`}
                        </p>
                        <p className="post-caption">
                            <span>{post?.username}</span> {post?.content}
                        </p>
                        <p className="post-comment" onClick={openModal}>
                            {post?.comment?.length === 0 ? "Add a comment..." : `View all ${post?.comment?.length} comments`}
                        </p>
                        <p className="post-date">{"16 hours age"}</p>
                    </div>
                </div>
            </div>
            {isOpen && <ModalComment isOpen={isOpen} closeModal={closeModal} comments={post?.comments} />}
            {isOpenLike && <ModalLikes isOpen={isOpenLike} closeModal={closeModal} likes={post.like} />}
        </>
    );
};

export default PostDetail;
