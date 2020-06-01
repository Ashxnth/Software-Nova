import React, {useState, useContext} from 'react';
import '../App.css';
import { Card, Input, Spacer, Button } from '@zeit-ui/react';
import {CompanyContext} from '../context/CompanyContext';

function AddCompany() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setimageUrl] = useState('');
  const [careersUrl, setcareersUrl] = useState('');
  const [company, setCompany] = useContext(CompanyContext);

  const updateName = (e) => {
    setName(e.target.value);
  }

  const updateLocation = (e) => {
    setLocation(e.target.value);
  }

  const updateimageUrl = (e) => {
    setimageUrl(e.target.value);
  }

  const updatecareersUrl = (e) => {
    setcareersUrl(e.target.value);
  }

  const addCompany = (e) => {
    console.log('submitted');
    e.preventDefault();
    setCompany(prevCompany => [...prevCompany, {name: name, location: location, image_url: imageUrl, careers_url: careersUrl}]);
    document.querySelector('input').value = '';
  }

  return (
    <div className="AddCompany">
      <div className="add-card">
        <Card shadow>
          <h2>Add Company</h2>
          <Spacer />
          <Input onChange={updateName} placeholder="Google" width="95%">
            Company Name
          </Input>
          <Spacer />
          <Input onChange={updateLocation} placeholder="Mountain View, CA" width="95%">
            Location
          </Input>
          <Spacer />
          <Input onChange={updateimageUrl} placeholder="Link" width="95%">
            Image URL
          </Input>
          <Spacer />
          <Input onChange={updatecareersUrl} placeholder="Link" width="95%">
            Careers URL
          </Input>
          <Spacer />
          <Button onClick={addCompany} shadow type="secondary">Submit</Button>
        </Card>
      </div>
    </div>
  );
}

export default AddCompany;