import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./input.css";

const StyledTextField = styled((props) => (
    <TextField
        slotProps={{
            input: { disableUnderline: true },
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiInputLabel-root": {
        color: "rgb(115, 115, 115)",
        fontSize: "14px",
        lineHeight: "15px",
        marginTop: "-2px",
        "&.Mui-focused": {
            color: "rgb(115, 115, 115)",
        },
        "&.Mui-error": {
            color: "var(--color-error)",
        },
    },
    "& .MuiFilledInput-root": {
        overflow: "hidden",
        borderRadius: 3,
        border: "1px solid",
        backgroundColor: "rgba(250, 250, 250)",
        borderColor: "rgba(219, 219, 219)",
        fontSize: "14px",
        "&.Mui-focused": {
            backgroundColor: "rgba(250, 250, 250)",
            borderColor: "rgba(219, 219, 219)",
        },
    },
}));

const Input = (props) => {
    const { className, label } = props;
    return (
        <div className={`input-basic ${className || ""}`}>
            <StyledTextField autoComplete={"off"} id="reddit-input" variant="filled" label={label} />
        </div>
    );
};
export default Input;
