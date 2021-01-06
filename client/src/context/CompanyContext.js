import React, {useState, createContext} from 'react';

export const CompanyContext = createContext(); 

export const CompanyProvider = (props) => {
    //Initial State
    const [company, setCompany] = useState([]);
    const [editUser, setEditUser] = useState({});

    return(
        <CompanyContext.Provider value={{company, setCompany, editUser, setEditUser}}>
            {props.children}
        </CompanyContext.Provider>
    );
}
