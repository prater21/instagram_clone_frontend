import { InputLabel } from "@mui/material";
import { Textarea } from "@mui/joy";
import "./input.css";

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

const TextFieldModal = ({ value, setValue, maxLength, id, label }) => {
    return (
        <>
            <InputLabel className="input-modal-label" shrink htmlFor={id}>
                {label}
            </InputLabel>
            <Textarea sx={textAreaStyle} id={id} />
        </>
    );
};

export default TextFieldModal;
