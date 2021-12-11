import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import MenuConcepts from "../components/MenuConcepts";
import UserPage from "../pages/UserPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Error404Page from "../pages/Error404Page";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ReactTopicsPage from "../pages/ReactTopicsPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import PrivateRoute from "./PrivateRoute";


const BasicConcepts = () => {
    return (
        <div>
            <h2>Basic Concepts</h2>
            {/* Change Router to HashRouter (63), its going to solve the server side rendering problem */}
            <Router>
                <MenuConcepts />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/user/:username" element={<UserPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    {/* Redirections */}              
                    <Route path="/acerca" element={<Navigate to="/about" />} />
                    <Route path="/contacto" element={<Navigate to="/contact" />} />

                    {/* Nested Routes */}              
                    <Route path="/react/*" element={<ReactTopicsPage/>} />
                    
                    {/* Private Routes (do it by myself) */}              
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/dashboard" element={ // first path is the private route, the secod path is the default page
                        <PrivateRoute path="/login"> 
                            <DashboardPage />
                        </PrivateRoute> // between PrivateRoute tags is the redirect page if the authentication is success
                    }/>  

                    <Route path="*" element={<Error404Page />} />
                </Routes>
            </Router>
        </div>
    );
}

export default BasicConcepts;