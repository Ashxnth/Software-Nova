import '../App.css';
import axios from 'axios';
import CompanyCard from '../components/CompanyCard';
import { CompanyContext } from '../context/CompanyContext';
import React, {useContext, useEffect} from 'react';

function Home() {
    const {company, setCompany} = useContext(CompanyContext);

    useEffect(() => {
        axios.post('http://localhost:5000/api/home', {
            userId: localStorage.getItem('userId'),
        }, {headers: {authorization: `Bearer ${localStorage.getItem('jwt')}`}})
        .then((res) => (setCompany(res.data)))
    },[]);

    return (
        <div className="Home">
            {company.map(company => <CompanyCard name={company.name} status={company.status} image_url={company.image_url} careers_url={company.careers_url} id={company.id} />)}
        </div>
    );
}

export default Home;
