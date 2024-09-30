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
    const { className, label, value, setValue, type = "", disabled = false, helperText } = props;
    const onChangeHandler = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };
    return (
        <div className={`input-basic ${className || ""}`}>
            <StyledTextField
                disabled={disabled}
                type={type}
                value={value}
                onChange={onChangeHandler}
                autoComplete={"off"}
                id="reddit-input"
                variant="filled"
                label={label}
            />
            <p className="input-helper-msg">{helperText}</p>
        </div>
    );
};
export default Input;
