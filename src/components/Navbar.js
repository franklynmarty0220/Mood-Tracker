import React from 'react';
import {Link} from 'react-router-dom'




const NavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand nav-title brand-text" to="/">
                    <span className="pinkish">mood tracker</span>
                    
                </Link>
            </div>
        </nav>
    );
};
export default NavBar;