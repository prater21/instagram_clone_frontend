import { TextField, styled, InputLabel } from "@mui/material";
import "./input.css";

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

const InputModal = ({ id, label, value, setValue, type = "" }) => {
    return (
        <>
            <InputLabel className="modal-profile-label" shrink htmlFor={id}>
                {label}
            </InputLabel>
            <StyledTextField type={type} autoComplete={"off"} id={id} fullWidth variant="filled" width />
        </>
    );
};

export default InputModal;
