import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { InputLabel } from "@mui/material";
import InputModal from "../Input/InputModal";
import TextFieldModal from "../Input/TextFieldModal";
import "./modal.css";
import { postChangePassword, postEditUserProfile } from "../../apis/userApi";

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
    const { closeModal, isOpen, type = "profile", userInfo = {}, onSuccess } = props;
    const [disabled, setDisabled] = useState(true);
    const [values, setValues] = useState({
        password: "",
        newPassword: "",
        passwordConfirm: "",
        username: userInfo?.username,
        description: userInfo?.description,
    });

    const chagnePassword = async () => {
        if (disabled) return;

        const data = {
            password: values.password,
            new_password: values.newPassword,
        };
        const response = await postChangePassword(data);
        if (response.result === "Y") {
            closeModal();
        } else {
            console.log("error");
        }
    };

    const editProfile = async () => {
        if (disabled) return;

        const data = {
            username: values.username,
            description: values.description,
        };
        const response = await postEditUserProfile(data);
        if (response.result === "Y") {
            onSuccess();
            closeModal();
        } else {
            console.log("error");
        }
    };

    const getValue = (type, value) => {
        setValues((prev) => ({ ...prev, [type]: value }));
    };

    useEffect(() => {
        if (type === "profile") {
            setDisabled(values.username.length === 0);
        } else {
            if (values.newPassword === "" && values.passwordConfirm === "") {
                setDisabled(true);
                return;
            }
            const flag = values.newPassword !== values.passwordConfirm;
            setDisabled(flag || values.password.length === 0);
        }
    }, [values]);

    console.log(values);

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
                    <p
                        className={`modal-profile-header-save ${disabled ? "disabled" : ""}`}
                        onClick={type === "password" ? chagnePassword : editProfile}
                    >
                        Save
                    </p>
                </div>
                <div className="modal-profile-body">
                    {type === "password" ? (
                        <>
                            <div className="modal-profile-form-item">
                                <InputModal type="password" id="password" label="Current Password" setValue={getValue} value={values.password} />
                            </div>
                            <div className="modal-profile-form-item">
                                <InputModal type="password" id="newPassword" label="New Password" setValue={getValue} value={values.newPassword} />
                            </div>
                            <div className="modal-profile-form-item">
                                <InputModal
                                    type="password"
                                    id="passwordConfirm"
                                    label="New Password Confirm"
                                    setValue={getValue}
                                    value={values.passwordConfirm}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="modal-profile-item">
                                <InputLabel className="modal-profile-label" shrink htmlFor="email">
                                    Email
                                </InputLabel>
                                <p className="modal-profile-text">{userInfo.email}</p>
                            </div>
                            <div className="modal-profile-form-item">
                                <InputModal id="username" label="Username" setValue={getValue} value={values?.username} />
                            </div>
                            <div className="modal-profile-form-item">
                                <TextFieldModal label="Description" id="description" setValue={getValue} value={values?.description} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default ModalProfile;
