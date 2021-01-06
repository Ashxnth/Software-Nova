import '../App.css';
import axios from 'axios';
import { CompanyContext } from '../context/CompanyContext';
import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import { Card, Input, Spacer, Button, Select, Text } from '@zeit-ui/react';

function EditCompany() {
  let {editUser} = useContext(CompanyContext);
  let [name, setName] = useState(editUser.name);
  let [status, setStatus] = useState(editUser.status);
  let [imageUrl, setimageUrl] = useState(editUser.image_url);
  let [careersUrl, setcareersUrl] = useState(editUser.careers_url);

  const updateName = (e) => {
    setName(e.target.value);
  }

  const updateStatus = (value) => {
    setStatus(value);
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
      status: status,
      image_url: imageUrl,
      careers_url: careersUrl
    }, {headers: {authorization: `Bearer ${localStorage.getItem('jwt')}`}})
    .then(() => {
      history.push('/home');
    })
    .catch((error) => {
    console.log(error);
    });
  }

  const deleteCompany = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/api/${editUser.id}`, {headers: {authorization: `Bearer ${localStorage.getItem('jwt')}`}})
    .then(() => {
      history.push('/home');
    })
    .catch((error) => {
      console.log(error);
    });
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
          <Text>Application Status</Text>
          <Spacer y={0.5}/>
          <Select placeholder="Choose One" onChange={updateStatus}>
            <Select.Option value="No Status">No Status</Select.Option>
            <Select.Option value="Applied">Applied</Select.Option>
            <Select.Option value="Online-Assessment">Online-Assessment</Select.Option>
            <Select.Option value="Phone-Screen">Phone-Screen</Select.Option>
            <Select.Option value="On-Site">On-Site</Select.Option>
            <Select.Option value="Offer!">Offer!</Select.Option>
          </Select>
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
