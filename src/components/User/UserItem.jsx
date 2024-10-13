import { useState } from "react";
import { postUserFollow } from "../../apis/userApi";
import UserImg from "./UserImg";
import "./useritem.css";

const UserItem = ({ user }) => {
    const [flag, setFlag] = useState(user?.flag);
    console.log(user);
    const followHandler = async () => {
        const data = {
            flag: !flag,
            follow_id: user.id,
        };
        const response = await postUserFollow(data);
        if (response.result === "Y") {
            setFlag(!flag);
            console.log(response);
        } else {
            console.log("error");
        }
    };
    return (
        <div className="useritem">
            <UserImg className="useritem-img" img={user?.profile_img} />
            <p className="useritem-username">{user.username}</p>
            <div className={`useritem-btn ${!flag ? "follow" : ""}`} onClick={followHandler}>
                {flag ? "Following" : "Follow"}
            </div>
        </div>
    );
};

export default UserItem;
