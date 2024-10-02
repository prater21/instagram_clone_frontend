import React from "react";
import Modal from "react-modal";
import "./modal.css";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        right: "auto",
        padding: "0",
        width: "100%",
        maxWidth: "450px",
        minHeight: "500px",
        border: "none",
        maxHeight: "670px",
        borderRadius: "16px",
    },
};

const ModalPost = (props) => {
    const { closeModal, isOpen } = props;

    return (
        <Modal {...props} isOpen={isOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={true} style={customStyles} ariaHideApp={false}>
            <div className="modal-post">
                <div className="modal-post-header">
                    <p className="modal-post-title">Create New Post</p>
                </div>
            </div>
        </Modal>
    );
};

export default ModalPost;
