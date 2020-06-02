import React, {useContext} from 'react';
import CompanyCard from '../components/CompanyCard';
import { CompanyContext } from '../context/CompanyContext';
import '../App.css';

function Home() {
    const {company, setCompany} = useContext(CompanyContext);

    return (
        <div className="Home">
            {company.map(company => <CompanyCard name={company.name} location={company.location} image_url={company.image_url} careers_url={company.careers_url} id={company.id} />)}
        </div>
    );
}

export default Home;