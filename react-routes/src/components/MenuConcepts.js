import { Link, NavLink } from "react-router-dom";

const MenuConcepts = () => {
    return (
        <nav>
            <ol>
                <li>
                    <span>Menu with Html links (not recomended)</span>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <span>Component Link</span>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <span>Component NavLink</span>
                    <NavLink to="/" activeclassname="active">Home</NavLink>
                    <NavLink to="/about" activeclassname="active">About</NavLink>
                    <NavLink to="/contact" activeclassname="active">Contact</NavLink>                                        
                </li>
                <li>
                    <span>Params: </span>
                    <Link to="/user/george">george</Link>
                    <Link to="/user/jsanvdev">jsanvdev</Link>                              
                </li>
                <li>
                    <span>Query parameters: </span>
                    <Link to="/products">Products</Link>                    
                </li>
                <li>
                    <span>Redirections </span>
                    <Link to="/acerca">About</Link>
                    <Link to="/contacto">Contact</Link>
                </li>
                <li>
                    <span>Nested Routes </span>
                    <Link to="/react">React</Link>                    
                </li>
                <li>
                    <span>Private Routes </span>
                    <Link to="/login">Login</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ol>
        </nav>
    );
}

export default MenuConcepts;