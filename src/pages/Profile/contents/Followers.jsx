import imgSrc from "../../../assets/images/intro-img-3.png";
import UserItem from "../../../components/User/UserItem";

const Followers = () => {
    const USER_DUMMY = [
        {
            user_id: 1,
            username: "username1",
            img: imgSrc,
        },
        {
            user_id: 2,
            username: "username2",
            img: imgSrc,
        },
        {
            user_id: 3,
            username: "username13",
            img: imgSrc,
        },
        {
            user_id: 14,
            username: "username14",
            img: imgSrc,
        },
        {
            user_id: 51,
            username: "username15",
            img: imgSrc,
        },
        {
            user_id: 16,
            username: "username16",
            img: imgSrc,
        },
    ];
    return (
        <div className="following">
            {USER_DUMMY.map((user) => (
                <UserItem user={user} />
            ))}
        </div>
    );
};

export default Followers;
