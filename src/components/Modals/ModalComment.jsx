import React from "react";
import Modal from "react-modal";
import "./modal.css";
import IconClose from "../../assets/images/icon/icon-close";
import imgSrc from "../../assets/images/intro-img-2.png";

const customStyles = {
    content: {
        top: "auto",
        left: "50%",
        right: "auto",
        bottom: "0",
        marginRight: "-50%",
        transform: "translate(-50%)",
        padding: "0",
        width: "100%",
        maxWidth: "650px",
        minHeight: "500px",
        borderRadius: "16px 16px 0px 0px",
        border: "none",
        maxHeight: "670px",
    },
};

const ModalComment = (props) => {
    const { closeModal, comments } = props;

    return (
        <Modal {...props} onRequestClose={closeModal} shouldCloseOnOverlayClick={true} style={customStyles} ariaHideApp={false}>
            <div className="modal-comment">
                <div className="modal-comment-header">
                    <p>Comments</p>
                    <IconClose onClick={closeModal} />
                </div>
                <div className="modal-comment-body">
                    {comments?.map((comment) => (
                        <div className="modal-comment-item">
                            <img src={comment?.user_img} alt="comment-user-img" />
                            <div>
                                <p className="modal-comment-username">{comment?.usernmae}</p>
                                <p className="modal-comment-text">{comment?.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default ModalComment;
