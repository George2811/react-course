import { Navigate } from "react-router-dom";


const PrivateRoute = ({children, path}) => {
    const auth = null;
    return auth ? children: <Navigate to={path} />;
}

export default PrivateRoute;