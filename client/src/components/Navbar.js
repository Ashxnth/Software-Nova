import '../App.css';
import { useHistory } from "react-router-dom";
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const token = localStorage.getItem('jwt');

    let history = useHistory();
    function logout() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('userId');
        history.push('/login');
    }

    let navbar;
    if (token) {
        navbar = (
            <div className="Navbar">
                <ul>
                    <li><a>🚀Software Nova☄️</a></li>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/add-company'>Add-Company</Link></li>
                    <li onClick={logout}><Link to='/login'>Logout</Link></li>
                </ul>
            </div>
        );
    } else {
        navbar = (
            <div className="Navbar">
                <ul>
                    <li><a>🚀Software Nova☄️</a></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                </ul>
            </div>
        );
    }

    return (
        <div>{navbar}</div>
    ); 
}

export default Navbar;
