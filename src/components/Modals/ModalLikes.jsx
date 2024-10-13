import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./modal.css";
import IconClose from "../../assets/images/icon/icon-close";
import userImgSrc from "../../assets/images/user-default-img.png";
import UserImg from "../User/UserImg";
import { postUserFollow } from "../../apis/userApi";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        right: "auto",
        padding: "0",
        width: "100%",
        maxWidth: "400px",
        maxHeight: "400px",
        border: "none",
        borderRadius: "12px",
        height: "fit-content",
    },
};

const ModalLikes = (props) => {
    const { closeModal, isOpen, likes } = props;
    const [flag, setFlag] = useState([]);

    useEffect(() => {
        let follow = {};
        likes?.forEach((li) => {
            follow[li.id] = li.flag;
        });
        setFlag(follow);
    }, [likes]);

    const followHandler = async (userId) => {
        const data = {
            flag: !flag[userId],
            follow_id: userId,
        };
        const response = await postUserFollow(data);
        if (response.result === "Y") {
            setFlag((prev) => ({ ...prev, [userId]: !flag[userId] }));
            console.log(response);
        } else {
            console.log("error");
        }
    };

    return (
        <Modal {...props} isOpen={isOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={true} style={customStyles} ariaHideApp={false}>
            <div className="modal-likes">
                <div className="modal-likes-header">
                    <p className="modal-likes-title">Likes</p>
                    <IconClose onClick={closeModal} />
                </div>
                <div className="modal-likes-body">
                    {likes.map((li, idx) => (
                        <div className="modal-likes-user" key={idx}>
                            <div className="modal-likes-user-info">
                                <UserImg className={"modal-likes-img"} img={li?.profile_img} />
                                <p className="modal-likes-title">{li.username}</p>
                            </div>

                            <div
                                className={`modal-likes-follow ${!flag[li.id] ? "follow" : ""}`}
                                onClick={() => {
                                    followHandler(li.id);
                                }}
                            >
                                {flag[li.id] ? <p>Follwing</p> : <p>Follow</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default ModalLikes;
