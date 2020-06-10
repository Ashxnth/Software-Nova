import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AddCompany from './pages/AddCompany';
import EditCompany from './pages/EditCompany';
import {CompanyProvider} from './context/CompanyContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <CompanyProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home">
            <Navbar />
            <Home />
          </Route>
          <Route path="/add-company">
            <Navbar />
            <AddCompany />
          </Route>
          <Route path="/edit-company">
            <Navbar />
            <EditCompany />
          </Route>
        </Switch>
      </Router>
      </CompanyProvider>
    </div>
  );
}

export default App;
