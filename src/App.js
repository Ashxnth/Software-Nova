import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-company" component={AddCompany} />
          <Route path="/edit-company" component={EditCompany} />
        </Switch>
      </Router>
      </CompanyProvider>
    </div>
  );
}

export default App;
