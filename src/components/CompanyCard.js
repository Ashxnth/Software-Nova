import React from 'react';
import '../App.css';
import { Card, Image, Text, Button } from '@zeit-ui/react';

function CompanyCard({ name, location, image_url, careers_url }) {
    return (
        <div className="CompanyCard">
        <Card width="250px">
            <Image src={`${image_url}`} height="140" style={{ objectFit: 'cover' }}/>
            <Text h4 style={{ marginBottom: '0' }}>{name}</Text>
            <Text type="secondary" small>{location}</Text>
            <Card.Footer>
                <a href={`${careers_url}`} target="_blank" rel="noopener noreferrer"><Button shadow type="success">Apply</Button></a>
            </Card.Footer>
        </Card>
        </div>
    );
}

export default CompanyCard;