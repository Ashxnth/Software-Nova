import './App.css';
import {CompanyProvider} from './context/CompanyContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import AddCompany from './pages/AddCompany';
import EditCompany from './pages/EditCompany';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CompanyProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/add-company" component={AddCompany} />
          <PrivateRoute path="/edit-company" component={EditCompany} />
        </Switch>
      </Router>
      </CompanyProvider>
    </div>
  );
}

export default App;
