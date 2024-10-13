import React, { useState } from "react";
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
        maxWidth: "400px",
        border: "none",
        borderRadius: "12px",
        height: "fit-content",
    },
};

const ModalProfileImg = (props) => {
    const { closeModal, isOpen } = props;

    const getProfileImg = async (e) => {
        const file = e.target.files[0];
        if (file) {
            //for send img data to backend
            const formData = new FormData();
            formData.append("file", file);
        }
    };
    const deletePhoto = () => {};

    return (
        <Modal {...props} isOpen={isOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={true} style={customStyles} ariaHideApp={false}>
            <div className="modal-profile-img">
                <p className="modal-profile-img-title">Change profile photo</p>
                <div className="modal-post-img-upload">
                    <label htmlFor="photo">Upload Photo</label>
                    <input type="file" accept="image/*" id="photo" onChange={getProfileImg} />
                </div>
                <p className="modal-profile-img-remove" onClick={deletePhoto}>
                    Remove current photo
                </p>
                <p className="modal-profile-img-cancel" onClick={closeModal}>
                    Cancel
                </p>
            </div>
        </Modal>
    );
};

export default ModalProfileImg;
