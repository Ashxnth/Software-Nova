import axios from 'axios';
import '../App.css';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Card, Input, Spacer, Button } from '@zeit-ui/react';
//axios.defaults.withCredentials = true;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateUsername = (e) => {
    setUsername(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  let history = useHistory();

  const login = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', {
      username: username,
      password: password
    })
    .then((res) => {
      localStorage.setItem('jwt', res.data.accessToken);
      localStorage.setItem('userId', res.data.userId);
      history.push('/home');
    })
    .catch((error) => {
    console.log(error);
    });
  }

  return (
    <div className="Login">
      <div className="add-card">
        <Card shadow>
          <h2>Login</h2>
          <Spacer />
          <Input onChange={updateUsername} placeholder="Username" width="95%">
            Username
          </Input>
          <Spacer />
          <Input onChange={updatePassword} placeholder="Password" width="95%">
            Password
          </Input>
          <Spacer />
          <Button onClick={login} shadow type="secondary">Login</Button>  
        </Card>
      </div>
    </div>
  );
}

export default Login;
