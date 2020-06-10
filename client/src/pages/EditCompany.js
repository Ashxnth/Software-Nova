import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';
import { Card, Input, Spacer, Button } from '@zeit-ui/react';
import { CompanyContext } from '../context/CompanyContext';
import axios from 'axios'

function EditCompany() {
  let {editUser, token} = useContext(CompanyContext);
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
    axios.put(`http://localhost:5000/api/${editUser.id}`, {
      id: editUser.id,
      name: name,
      location: location,
      image_url: imageUrl,
      careers_url: careersUrl
    }, { headers: {authorization: `Bearer ${token}`} })
    .catch((error) => {
    console.log(error);
    });
    history.push('/home');
  }

  const deleteCompany = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/api/${editUser.id}`, { headers: {authorization: `Bearer ${token}`} })
    .catch((error) => {
    console.log(error);
    });
    history.push('/home');
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
          <Button onClick={deleteCompany} shadow auto type="error">Delete</Button>
        </Card>
      </div>
    </div>
  );
}

export default EditCompany;