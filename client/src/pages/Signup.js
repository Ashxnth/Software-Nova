import React, {useContext, useState} from 'react';
import '../App.css';
import axios from 'axios';
import { CompanyContext } from '../context/CompanyContext';
import {useHistory} from 'react-router-dom';
import { Card, Input, Spacer, Button } from '@zeit-ui/react';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setUserId} = useContext(CompanyContext);

  const updateUsername = (e) => {
    setUsername(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  let history = useHistory();

  const signup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/signup', {
      username: username,
      password: password
    })
    .then((res) => {
      setUserId(res.data.userId);
      history.push('/login');
    })
    .catch((error) => {
    console.log(error);
    });
  }

  return (
    <div className="Signup">
      <div className="add-card">
        <Card shadow>
          <h2>Sign Up</h2>
          <Spacer />
          <Input onChange={updateUsername} placeholder="Username" width="95%">
            Username
          </Input>
          <Spacer />
          <Input onChange={updatePassword} placeholder="Password" width="95%">
            Password
          </Input>
          <Spacer />
          <Button onClick={signup} shadow type="secondary">Sign Up</Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
