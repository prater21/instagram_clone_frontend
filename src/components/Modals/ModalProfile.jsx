import React from "react";
import Modal from "react-modal";
import { InputLabel } from "@mui/material";
import InputModal from "../Input/InputModal";
import TextFieldModal from "../Input/TextFieldModal";
import "./modal.css";

const style = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    right: "auto",
    padding: "0",
    width: "90%",
    maxWidth: "450px",
    border: "none",
    borderRadius: "16px",
};

const customStyles = {
    content: {
        ...style,
        height: "500px",
    },
};

const customStylesPassword = {
    content: {
        ...style,
        height: "430px",
    },
};

const ModalProfile = (props) => {
    const { closeModal, isOpen, type = "profile" } = props;

    return (
        <Modal
            {...props}
            isOpen={isOpen}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
            style={type === "password" ? customStylesPassword : customStyles}
            ariaHideApp={false}
        >
            <div className="modal-profile">
                <div className="modal-profile-header">
                    <p className="modal-profile-title">{type === "password" ? "Change Password" : "Edit Profile"}</p>
                    <p className="modal-profile-header-save" onClick={closeModal}>
                        Save
                    </p>
                </div>
                <div className="modal-profile-body">
                    {type === "password" ? (
                        <>
                            <div className="modal-profile-form-item">
                                <InputModal type="password" id="password" label="Current Password" />
                            </div>
                            <div className="modal-profile-form-item">
                                <InputModal type="password" id="newPassword" label="New Password" />
                            </div>
                            <div className="modal-profile-form-item">
                                <InputModal type="password" id="newPasswordConfirm" label="New Password Confirm" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="modal-profile-item">
                                <InputLabel className="modal-profile-label" shrink htmlFor="email">
                                    Email
                                </InputLabel>
                                <p className="modal-profile-text">prater21@naver.com</p>
                            </div>
                            <div className="modal-profile-form-item">
                                <InputModal id="username" label="Username" />
                            </div>
                            <div className="modal-profile-form-item">
                                <TextFieldModal label="Description" id="description" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default ModalProfile;
