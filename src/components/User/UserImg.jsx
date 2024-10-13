import "./useritem.css";
import userImgSrc from "../../assets/images/user-default-img.png";

const UserImg = ({ className, img, ...otherProps }) => {
    return (
        <div
            {...otherProps}
            className={`user-profile-img ${img ? "" : "default-user-img"} ${className}`}
            style={{ backgroundImage: `url(${img || userImgSrc})` }}
            alt="user-profile-img"
        />
    );
};

export default UserImg;
