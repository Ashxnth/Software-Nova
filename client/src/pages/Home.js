import React, {useContext, useEffect} from 'react';
import CompanyCard from '../components/CompanyCard';
import { CompanyContext } from '../context/CompanyContext';
import axios from 'axios';
import '../App.css';

function Home() {
    const {company, setCompany, token} = useContext(CompanyContext);

    useEffect(() => {
        axios.get('http://localhost:5000/api/home', { headers: {authorization: `Bearer ${token}`} })
        .then((res) => (setCompany(res.data)))
    },[]);

    return (
        <div className="Home">
            {company.map(company => <CompanyCard name={company.name} location={company.location} image_url={company.image_url} careers_url={company.careers_url} id={company.id} />)}
        </div>
    );
}

export default Home;