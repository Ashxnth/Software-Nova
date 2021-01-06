import '../App.css';
import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Card, Input, Spacer, Button, Text, Select } from '@zeit-ui/react';

function AddCompany() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('No Status');
  const [imageUrl, setimageUrl] = useState('');
  const [careersUrl, setcareersUrl] = useState('');

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

  const addCompany = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/home/add', {
      name: name,
      userId: localStorage.getItem('userId'),
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
