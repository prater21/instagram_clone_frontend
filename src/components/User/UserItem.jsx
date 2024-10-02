import "./useritem.css";

const UserItem = ({ user }) => {
    return (
        <div className="useritem">
            <img className="useritem-img" src={user.img} alt="following-user-img" />
            <p className="useritem-username">{user.username}</p>
            <div className="useritem-btn">unfollow</div>
        </div>
    );
};

export default UserItem;
