import React, {useState, createContext} from 'react';
import axios from 'axios';

export const CompanyContext = createContext(); 

export const CompanyProvider = (props) => {
    //Initial State
    const [company, setCompany] = useState([
        {
            id: 1,
            name: 'Google',
            location: 'California, USA',
            image_url: 'https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            id: 2,
            name: 'Amazon',
            location: 'Vancouver, BC',
            image_url: 'https://www.vmastoryboard.com/wp-content/uploads/2014/08/Amazon-Logo_Feature.jpg',
            careers_url: 'https://careers.google.com/jobs/'
        }
    ]);

    const [editUser, setEditUser] = useState({});

    return(
        <CompanyContext.Provider value={{company, setCompany, editUser, setEditUser}}>
            {props.children}
        </CompanyContext.Provider>
    );
}