import "./layout.css";

const IntroWrapper = ({ children }) => {
    return (
        <div>
            <div className="intro-wrapper">
                <div>{children}</div>
            </div>
            <div className="intro-footer">
                <p>© 2024 Instagram from Prater</p>
            </div>
        </div>
    );
};

export default IntroWrapper;
