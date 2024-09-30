import "./border.css";

const Border = (props) => {
    const { children, className, ...otherProps } = props;

    return (
        <div className={`border-default ${className || ""}`} {...otherProps}>
            {children}
        </div>
    );
};
export default Border;
