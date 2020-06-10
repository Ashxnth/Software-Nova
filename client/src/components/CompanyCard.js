import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Card, Image, Text, Button } from '@zeit-ui/react';
import {CompanyContext} from '../context/CompanyContext';

function CompanyCard({ id, name, location, image_url, careers_url}) {
    const {setEditUser} = useContext(CompanyContext);
    function setEditedUser() {
        setEditUser({
            id: id,
            name: name,
            location: location,
            image_url: image_url,
            careers_url: careers_url
        });
    }

    return (
        <div className="CompanyCard">
        <Card width="250px">
            <Image src={`${image_url}`} height="140" style={{ objectFit: 'cover' }}/>
            <Text h4 style={{ marginBottom: '0' }}>{name}</Text>
            <Text type="secondary" small>{location}</Text>
            <Card.Footer>
                <a href={`${careers_url}`} target="_blank" rel="noopener noreferrer"><Button auto shadow type="success">Apply</Button></a>
                <Link to='/edit-company'><Button onClick={setEditedUser} auto shadow type="secondary">Edit</Button></Link>
            </Card.Footer>
        </Card>
        </div>
    );
}

export default CompanyCard;