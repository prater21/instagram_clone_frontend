import "./layout.css";

const InputWrapper = ({ children }) => {
    return (
        <div className="input-wrapper">
            <div>{children}</div>
        </div>
    );
};

export default InputWrapper;
