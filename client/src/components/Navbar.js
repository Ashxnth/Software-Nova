import React, {useContext} from 'react';
import { CompanyContext } from '../context/CompanyContext';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    const {setToken} = useContext(CompanyContext);
    function logout() {
        setToken('');
    }
    return (
        <div className="Navbar">
            <ul>
                <li><a>🚀Software Nova☄️</a></li>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/add-company'>Add-Company</Link></li>
                <li onClick={logout}><Link to='/login'>Logout</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;