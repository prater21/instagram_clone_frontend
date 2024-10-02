import React from "react";
import Modal from "react-modal";
import "./modal.css";
import IconClose from "../../assets/images/icon/icon-close";
import imgSrc from "../../assets/images/intro-img-2.png";
import { InputLabel, Input, TextField, FormControl, styled } from "@mui/material";
import { Textarea } from "@mui/joy";

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

const StyledTextField = styled((props) => (
    <TextField
        slotProps={{
            input: { disableUnderline: true },
        }}
        {...props}
    />
))(({ theme }) => ({
    "label + &": {
        // marginTop: theme.spacing(-5.5),
        // marginLeft: theme.spacing(8),
    },

    "& .MuiInputBase-input": {
        color: "white",
        borderRadius: 4,
        position: "relative",
        border: "1px solid",
        borderColor: "#b4b4b4",
        fontSize: 16,
        backgroundColor: "transparent",
        padding: "10px 12px",
    },
}));

let textAreaStyle = {
    minHeight: "150px",
    borderRadius: 4,
    border: "1px solid ",
    borderColor: "#b4b4b4",
    backgroundColor: "transparent",
    color: "white",
    fontSize: 16,
    "--Textarea-focusedInset": "0",
    "--Textarea-focusedThickness": "0.2rem",
    "--Textarea-paddingInline": "15px",
    "& .MuiTextarea-endDecorator": {
        margin: 0,
    },
    "& .MuiTextarea-textarea": {
        // marginLedft: "10px",
        // overflow: "scroll !important",
        // overflowX: "hidden !important",
        "&::placeholder": {
            color: "var(--color-gray-20)",
            opacity: 1,
        },
        "&::-webkit-scrollbar": {
            width: "0.2em",
        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: "4px",
        },
    },
    "&.Mui-focused": {
        backgroundColor: "transparnet",
    },
    "&.Mui-error": {
        border: "1px solid var(--color-error)",
    },
};

const ModalProfile = (props) => {
    const { closeModal, isOpen } = props;

    return (
        <Modal {...props} isOpen={isOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={true} style={customStyles} ariaHideApp={false}>
            <div className="modal-profile">
                <div className="modal-profile-header">
                    <p className="modal-profile-title">Edit Profile</p>
                    <p className="modal-profile-header-save" onClick={closeModal}>
                        Save
                    </p>
                    {/* <IconClose onClick={closeModal} /> */}
                </div>
                <div className="modal-profile-body">
                    <div className="modal-profile-item">
                        {/* <FormControl className="modal-profile-item"> */}
                        <InputLabel className="modal-profile-label" shrink htmlFor="email">
                            Email
                        </InputLabel>
                        <p className="modal-profile-text">prater21@naver.com</p>
                        {/* <StyledTextField autoComplete={"off"} id="email" fullWidth variant="filled" width /> */}
                        {/* </FormControl> */}
                    </div>
                    {/* <div className="modal-profile-hr" /> */}
                    <div className="modal-profile-form-item">
                        {/* <FormControl className="modal-profile-item"> */}
                        <InputLabel className="modal-profile-label" shrink htmlFor="username">
                            Username
                        </InputLabel>
                        <StyledTextField autoComplete={"off"} id="username" fullWidth variant="filled" width />
                        {/* </FormControl> */}
                    </div>
                    <div className="modal-profile-form-item">
                        {/* <FormControl className="modal-profile-item"> */}
                        <InputLabel className="modal-profile-label" shrink htmlFor="description">
                            Description
                        </InputLabel>
                        <Textarea sx={textAreaStyle} />
                        {/* </FormControl> */}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ModalProfile;
