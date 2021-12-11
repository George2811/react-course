import { useParams } from "react-router-dom";

const UserPage = () => {
    let { username } = useParams();

    return (
        <div>
            <h3>User Profile</h3>
            <p>User name <b>{username}</b> </p>
        </div>
    );
}

export default UserPage;