import "./text.css";

export const ErrorText = (props) => {
    const { children, className, ...otherProps } = props;

    return (
        <p className={`error-text ${className || ""}`} {...otherProps}>
            {children}
        </p>
    );
};
