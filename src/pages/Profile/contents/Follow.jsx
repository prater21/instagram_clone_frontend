import UserItem from "../../../components/User/UserItem";

const Follow = ({ follow }) => {
    return (
        <div className="follow-warpper">
            {follow?.map((user) => (
                <UserItem key={user?.username} user={user} />
            ))}
        </div>
    );
};

export default Follow;
