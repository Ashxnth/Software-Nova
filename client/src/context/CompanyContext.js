import React, {useState, createContext} from 'react';

export const CompanyContext = createContext(); 

export const CompanyProvider = (props) => {
    //Initial State
    const [company, setCompany] = useState([]);
    const [editUser, setEditUser] = useState({});
    const [token, setToken] = useState('');

    return(
        <CompanyContext.Provider value={{company, setCompany, editUser, setEditUser, token, setToken}}>
            {props.children}
        </CompanyContext.Provider>
    );
}