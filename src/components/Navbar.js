import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function Navbar() {
    return (
        <div className="Navbar">
            <ul>
                <li><a>🚀Software Nova</a></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/add-company'>Add-Company</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;