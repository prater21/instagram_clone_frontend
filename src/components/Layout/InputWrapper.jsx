import "./layout.css";

const InputWrapper = ({ children, className }) => {
    return <div className={`input-wrapper ${className || ""}`}>{children}</div>;
};

export default InputWrapper;
