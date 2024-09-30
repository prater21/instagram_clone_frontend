import { Textarea } from "@mui/joy";
import "./input.css";

let textAreaStyle = {
    minHeight: "150px",
    borderRadius: "3px",
    border: "1px solid rgba(219, 219, 219)",
    backgroundColor: "rgba(250, 250, 250)",
    color: "rgb(115, 115, 115)",
    fontSize: "14px",
    "--Textarea-focusedInset": "0",
    "--Textarea-focusedThickness": "0.25rem",
    "--Textarea-paddingInline": "15px",
    "& .MuiTextarea-endDecorator": {
        margin: 0,
    },
    "& .MuiTextarea-textarea": {
        marginLedft: "10px",
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
        backgroundColor: "rgba(250, 250, 250)",
    },
    "&.Mui-error": {
        border: "1px solid var(--color-error)",
    },
};

const TextArea = (props) => {
    const { setValue, placeholder = "", maxLength = "150", value } = props;

    const onChangeHandler = (e) => {
        if (e.target.value.length <= maxLength) {
            setValue(e.target.value);
        }
    };

    return (
        <div className="input-text">
            <Textarea value={value} minRows={3} onChange={onChangeHandler} placeholder={placeholder} sx={textAreaStyle} />
        </div>
    );
};
export default TextArea;
