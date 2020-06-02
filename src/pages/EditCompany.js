import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';
import { Card, Input, Spacer, Button } from '@zeit-ui/react';
import { CompanyContext } from '../context/CompanyContext';

function EditCompany() {
  let {company, setCompany} = useContext(CompanyContext);
  let {editUser, setEditUser} = useContext(CompanyContext);
  let [name, setName] = useState(editUser.name);
  let [location, setLocation] = useState(editUser.location);
  let [imageUrl, setimageUrl] = useState(editUser.image_url);
  let [careersUrl, setcareersUrl] = useState(editUser.careers_url);

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

  let history = useHistory();

  const editCompany = (e) => {
    e.preventDefault();
    const updatedUser = { name: name, location: location, image_url: imageUrl, careers_url: careersUrl }
    setCompany(company.map(company => company.id == editUser.id ? updatedUser : company));
    history.push('/');
  }

  return (
    <div className="EditCompany">
      <div className="edit-card">
        <Card shadow>
          <h2>Edit Company</h2>
          <Spacer />
          <Input onChange={updateName} value={`${editUser.name}`} width="95%">
            Company Name
          </Input>
          <Spacer />
          <Input onChange={updateLocation} value={`${editUser.location}`} width="95%">
            Location
          </Input>
          <Spacer />
          <Input onChange={updateimageUrl} value={`${editUser.image_url}`} width="95%">
            Image URL
          </Input>
          <Spacer />
          <Input onChange={updatecareersUrl}  value={`${editUser.careers_url}`} width="95%">
            Careers URL
          </Input>
          <Spacer />
          <Button onClick={editCompany} shadow auto type="secondary">Apply Changes</Button>
          <Button shadow auto type="error">Delete</Button>
        </Card>
      </div>
    </div>
  );
}

export default EditCompany;