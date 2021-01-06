import '../App.css';
import {CompanyContext} from '../context/CompanyContext';
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Text, Button, Tag, Spacer } from '@zeit-ui/react';

function CompanyCard({ id, name, status, image_url, careers_url}) {
    const {setEditUser} = useContext(CompanyContext);
    function setEditedUser() {
        setEditUser({
            id: id,
            name: name,
            status: status,
            image_url: image_url,
            careers_url: careers_url
        });
    }

    function setColor() {
        if (status === "Applied") {
            return "red";
        } else if (status === "Online-Assessment") {
            return "orange";
        } else if (status === "Phone-Screen") {
            return "deeppink";
        } else if (status === "On-Site") {
            return "purple";
        } else if (status === "Offer!") {
            return "green";
        } else {
            return "black";
        }
    }

    return (
        <div className="CompanyCard">
        <Card width="250px">
            <Image src={`${image_url}`} height="140" style={{ objectFit: 'cover' }}/>
            <Text h4 style={{ marginBottom: '0' }}>{name}</Text>
            <Spacer y={0.2} />
            <Tag type="default" style={{backgroundColor: setColor()}} invert>{status}</Tag>
            <Card.Footer>
                <a href={`${careers_url}`} target="_blank" rel="noopener noreferrer"><Button auto shadow type="success">Apply</Button></a>
                <Link to='/edit-company'><Button onClick={setEditedUser} auto shadow type="secondary">Edit</Button></Link>
            </Card.Footer>
        </Card>
        </div>
    );
}

export default CompanyCard;
