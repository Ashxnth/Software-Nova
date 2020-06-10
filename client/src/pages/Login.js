import React, {useState, useContext} from 'react';
import {CompanyContext} from '../context/CompanyContext';
import {useHistory, Link} from 'react-router-dom';
import '../App.css';
import { Card, Input, Spacer, Button } from '@zeit-ui/react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {token, setToken} = useContext(CompanyContext);

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
    .then(res => setToken(res.data.accessToken))
    .catch((error) => {
    console.log(error);
    });
    if(token) {
      history.push('/home')
    }
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
          <Spacer />
          <Link to='/signup'>Signup</Link>
        </Card>
      </div>
    </div>
  );
}

export default Login;