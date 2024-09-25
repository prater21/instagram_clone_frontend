import "./button.css";
const Button = (props) => {
    const { children, size = "default", className, disabled, onClick, icon, ...otherProps } = props;

    const BUTTON_SIZE = {
        default: "",
        small: " btn-small",
    };
    return (
        <button type="button" onClick={onClick} disabled={disabled} className={`btn-default${BUTTON_SIZE[size]} ${className || ""}`} {...otherProps}>
            <p>{children}</p>
        </button>
    );
};
export default Button;
