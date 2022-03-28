import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="navbar">
            <h1>TODO LIST</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Home">List</Link>
            </div>
        </nav>

    );
}

export default Nav;
